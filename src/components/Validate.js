import React, { useState, useCallback } from "react";
import Button from "@mui/material/Button";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./validate.css";
import { Container, Row, Col } from "react-bootstrap";

const ValidatePage = () => {
  const [buttonfield, setButtonField] = useState(true); // State to manage button disabled/enabled
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Disable Right click
  React.useEffect(() => {
    const disableContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", disableContextMenu);
    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  // Capture photo callback
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    sessionStorage.setItem("imageSrc", imageSrc);
    setButtonField(false); // Enable the button after capturing photo
  }, [webcamRef, setImgSrc]);

  // Navigate to system check page using useNavigate
  const handleClick = () => {
    navigate("/systemcheck");
  };

  return (
    <div className="App-header">
      <center>
        <p>
          <b>Instructions to Follow:</b>
        </p>
        <li>
          The lighting in the room must be bright enough to be considered
          “daylight” quality. Overhead lighting is preferred.
        </li>
      </center>
      <Container fluid>
        <Row>
          <Col sm={6} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <center>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
              />
            </center>
          </Col>
          <Col sm={6}>
            <center>{imgSrc && <img src={imgSrc} alt="Captured" />}</center>
          </Col>
        </Row>
      </Container>

      <Button id="validateButtons" variant="contained" onClick={capture}>
        Capture Photo
      </Button>

      <Button
        id="validateButtons"
        disabled={buttonfield}
        variant="contained"
        onClick={handleClick}
      >
        Confirm Validation
      </Button>
    </div>
  );
};

export default ValidatePage;
