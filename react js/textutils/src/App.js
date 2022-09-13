import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('primary')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=> {
    if (mode === 'primary') {
      setMode('dark')
      document.body.style.backgroundColor = '#042744'
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('primary')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "primary")
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils" about = "About Utils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert} />
    <div className="container mt-4">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading = "Enter the text to analyze" mode = {mode} showAlert = {showAlert}/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
