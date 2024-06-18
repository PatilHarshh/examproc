import React from "react";
import Button from "@mui/material/Button";
import thanks from "./thanks.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Thankyou = () => {
  const navigate = useNavigate();

  function handleClickExit() {
    navigate("/");
  }

  const checkn = sessionStorage.getItem("checkname");
  const checke = sessionStorage.getItem("checkemail");

  return (
    <div className="App-header">
      <center>
        <img src={thanks} id="thankyou" height="400px" alt="Thank you" />
        <br />
        <br />
        <br />
        <br />
        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            handleClickExit();
          }}
        >
          Exit Secure Window
        </Button>
      </center>
    </div>
  );
};

export default Thankyou;
