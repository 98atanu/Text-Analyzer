import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, {useState} from 'react'
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light') //Whether dark mode is enabled
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) =>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);

  }

  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#000b18f7';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode'

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode ={mode} toggleMode={toggleMode}/>
        <Alert alert = {alert}/>
         <div className="container">
          <Routes>
            <Route>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />} />
            </Route>
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
