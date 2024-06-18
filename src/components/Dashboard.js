import React, { useState, useEffect } from "react";
import Detection from "./Detections";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import DetectRTC from "detectrtc";
import { supabase } from "../supabaseClient";
import swal from "sweetalert";
import "./Dashboard2.css";

const Dashboard = (props) => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) throw error;
      if (user) {
        setUserDetails(user);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error fetching user:", error.message);
      alert("An error occurred while fetching user data.");
    }
  }

  // Event listeners and constants
  useEffect(() => {
    // Disable Right click
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });

    // Alert on Tab Changed within the Same browser Window
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Count number of times escaped Fullscreen
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Keyboard events
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Handle visibility change event
  function handleVisibilityChange() {
    if (document.hidden) {
      swal("Changed Tab Detected", "Action has been Recorded", "error");
      sessionStorage.setItem("count_tabchange", 1);
    }
  }

  // Handle fullscreen change event
  function handleFullscreenChange(event) {
    if (!document.fullscreenElement) {
      swal("Exited Fullscreen", "Action has been Recorded", "error");
      sessionStorage.setItem("count_fullscreen", 1);
    }
  }

  // Handle key down events
  function handleKeyDown(event) {
    if (event.altKey) {
      swal("Alt Key Press Detected");
      sessionStorage.setItem(
        "countalt",
        Number(sessionStorage.getItem("countalt")) + 1
      );
    }
    if (event.ctrlKey) {
      swal("Ctrl Key Press Detected");
      sessionStorage.setItem(
        "countctrl",
        Number(sessionStorage.getItem("countctrl")) + 1
      );
    }
  }

  // Handle form submission
  function handleClicksub() {
    navigate("/thankyou");
  }

  // Camera Permission
  useEffect(() => {
    DetectRTC.load(() => {
      if (!DetectRTC.isWebsiteHasWebcamPermissions) {
        swal("Enable Your Camera");
        navigate("/components/404.js"); // Adjust as per your route
      }
    });
  }, []);

  // Fetches the timer provided by Admin in Admin page to Dashboard
  const [minutes, setMinutes] = useState(
    sessionStorage.getItem("exam_timer") || props.initialMinute
  );
  const [seconds, setSeconds] = useState(
    sessionStorage.getItem("exam_sec") || props.initialSeconds
  );

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        sessionStorage.setItem("exam_sec", seconds - 1);
      } else {
        if (minutes === 0) {
          clearInterval(myInterval);
          navigate("/thankyou");
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
          sessionStorage.setItem("exam_timer", minutes - 1);
        }
      }
    }, 1000);

    return () => clearInterval(myInterval);
  }, [minutes, seconds]);

  const formLink = sessionStorage.getItem("form_link");

  return (
    <div className="App-header" id="Dash">
      <header>
        <div className="detect">
          <Detection />
        </div>

        <div className="lame">
          <h3 align="left">
            Name :{" "}
            <span style={{ fontSize: "20px" }}>
              {userDetails?.user_metadata?.full_name}
            </span>
          </h3>
          <h3 align="left">
            Email :{" "}
            <span style={{ fontSize: "20px" }}>
              {userDetails?.user_metadata?.email}
            </span>
          </h3>
        </div>

        <div className="leftClass">
          <p>
            Timer:{" "}
            {minutes === 0 && seconds === 0 ? null : (
              <h1 align="center" style={{ fontSize: "69px" }}>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </h1>
            )}
          </p>
        </div>

        <div className="button">
          <p align="center" style={{ fontSize: "18px" }}>
            To Save Your Attendance :<br /> Kindly Click{" "}
            <strong>Exit Exam Window</strong> After Submission Of Google Form{" "}
          </p>
          <center>
            <Button
              style={{ fontSize: "15px" }}
              variant="contained"
              color="primary"
              size="medium"
              onClick={handleClicksub}
            >
              Exit Exam Window
            </Button>
          </center>
          <p align="left" style={{ fontSize: "18px" }}>
            <i>DONOT ESCAPE THIS PAGE ELSE ANSWERS WILL BE UNSAVED!!</i>
          </p>
        </div>

        <iframe src={formLink} id="form">
          Loading…
        </iframe>
      </header>
    </div>
  );
};

export default Dashboard;
