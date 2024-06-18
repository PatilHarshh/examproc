import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./SystemCheck.css";
import icon from "./icon.png";
import swal from "sweetalert";
import DetectRTC from "detectrtc"; // Import DetectRTC library

const SystemCheck = () => {
  const [buttonViewDisabled, setButtonViewDisabled] = useState(true); // State to manage button disabled/enabled
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle navigation to /validate route
  const handleClick = () => {
    navigate("/validate");
  };

  // Function to open fullscreen and navigate to /instructions
  const openFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      navigate("/instructions");
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
      navigate("/instructions");
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
      navigate("/instructions");
    }
  };

  // Simulated network speed check
  useEffect(() => {
    // Simulate the network speed check
    setTimeout(() => {
      sessionStorage.setItem("netspeed", "100"); // Simulated value
      setButtonViewDisabled(false); // Enable button after simulated speed test
    }, 2000); // Simulated 2 second delay
  }, []);

  return (
    <body className="App-header">
      <div className="main">
        <p className="sign" align="center">
          System Compatibility Check
        </p>
        <table align="center">
          <tbody>
            <tr>
              <td className="text-center">
                <div>
                  <img src={icon} id="classIcon" alt="icon" />
                </div>
              </td>
              <td>
                <ul>
                  <li className="test">
                    <span>
                      <b>OS:</b>{" "}
                      {"- " +
                        JSON.stringify(DetectRTC.osName, null, 2).slice(1, -1) +
                        " " +
                        JSON.stringify(DetectRTC.osVersion, null, 0).slice(
                          1,
                          -1
                        )}{" "}
                    </span>
                  </li>
                  <li className="test">
                    <span>
                      <b>Browser:</b>{" "}
                      {"- " +
                        JSON.stringify(DetectRTC.browser.name).slice(1, -1) +
                        " " +
                        JSON.stringify(DetectRTC.browser.version)}{" "}
                    </span>
                  </li>
                  <li className="test">
                    <span>
                      <b>Internet Speed:</b>{" "}
                      {"- " + sessionStorage.getItem("netspeed") + " mbps"}{" "}
                    </span>
                  </li>
                  <li className="test">
                    <span>
                      <b>Webcam:</b>{" "}
                      {"- " +
                        JSON.stringify(
                          DetectRTC.isWebsiteHasWebcamPermissions
                        )}{" "}
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <center>
          <Button
            className="activateButton"
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
            Activate Your WebCam and Network Check
          </Button>
          <br />
          <br />
        </center>

        <center>
          <Button
            size="large"
            disabled={buttonViewDisabled}
            variant="contained"
            color="primary"
            onClick={openFullscreen}
          >
            Next
          </Button>
        </center>
      </div>
    </body>
  );
};

export default SystemCheck;
