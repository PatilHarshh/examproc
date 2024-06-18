import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./newcomponents/loginPage";
import Callback from "./newcomponents/callback";
import CreateExam from "./newcomponents/createExam";
import ExamsPage from "./newcomponents/exam";
import MainPage from "./components/Home";
import SystemCheckPage from "./components/SystemCheck";
import ValidatePage from "./components/Validate";
import Instructions from "./components/Instructions";
import Dashboard from "./components/Dashboard";
import ThankyouPage from "./components/Thankyou";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/callback" element={<Callback />} />
          <Route path="/create-exam" element={<CreateExam />} />
          <Route path="/exams" element={<ExamsPage />} />
          <Route path="/systemcheck" element={<SystemCheckPage />} />
          <Route path="/validate" element={<ValidatePage />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/thankyou" element={<ThankyouPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
