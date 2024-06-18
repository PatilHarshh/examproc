import React, { useState } from "react";
import firebase from "firebase/app";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./formvalid.css";
import swal from "sweetalert";

const Formvalid = () => {
  const navigate = useNavigate();
  const [formvalid, setFormvalid] = useState("");

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

  function onChangeformvalid(e) {
    setFormvalid(e.target.value);
  }

  function handleClickformvalid() {
    const con_db = firebase.database().ref("con_dbs");

    con_db.on("value", (snapshot) => {
      var s = snapshot.val();
      var d = s[formvalid];

      if (d != null) {
        var form_link = d["formlink"];
        var exam_timer = d["examtimer"];

        sessionStorage.setItem("form_link", form_link);
        sessionStorage.setItem("exam_timer", exam_timer);
        sessionStorage.setItem("formvalid", formvalid);

        navigate("/Dashboard");
      } else {
        swal("Invalid Exam Code", "Please Enter A Valid Examcode", "error");
      }
    });
  }

  return (
    <div className="App-header1">
      <h3>
        <p align="center" style={{ color: "white" }}>
          Enter Exam Code To Proceed
        </p>
      </h3>
      <center>
        <td className="text-center">
          <input
            type="text"
            id="formvalid"
            name="formvalid"
            value={formvalid}
            onChange={onChangeformvalid}
          />
          <br />
          <br />
          <Button variant="contained" onClick={handleClickformvalid}>
            Submit
          </Button>
        </td>
        <br />
      </center>
    </div>
  );
};

export default Formvalid;
