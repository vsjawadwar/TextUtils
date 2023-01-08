// import PropTypes from 'prop-types'

// import './App.css';
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import { Router } from "react-router-dom";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark Mode Enabled", "success");
    }
  };
  return (
    <>
    <BrowserRouter>
      <Navbar titlename="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container " >
        <Routes>
          <Route path="/About" element={<About heading="About Us" />}></Route>
          <Route path="/" element={<TextForm heading="Enter Text to Analyze here" mode={mode} showAlert={showAlert} />}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}


export default App;
