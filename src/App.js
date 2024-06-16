import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./newcomponents/loginPage";
import Callback from "./newcomponents/callback.js";
import CreateExam from "./newcomponents/createExam.js";
import ExamsPage from "./newcomponents/exam.js";

import MainPage from "./components/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/callback" component={<Callback />} />
          <Route path="/create-exam" component={<CreateExam />} />
          <Route exact="/exams" component={<ExamsPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
