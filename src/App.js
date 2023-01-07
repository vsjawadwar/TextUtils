// import PropTypes from 'prop-types'

// import './App.css';
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
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
      <Navbar titlename="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container " >
        <TextForm heading="Enter Text to Analyze here" mode={mode} showAlert={showAlert} />
        {/* <About heading="About Us" /> */}

      </div>
    </>
  );
}


export default App;
