import React, { useState } from "react"
import './App.css';

function App() {

  const [userName, setUserName] = useState("")
   const [password, setPassword] = useState("");

   function updatePassword(event) {
    setPassword(event.target.value)
   }

    function updateUserName(event) {
      setUserName(event.target.value);
    }

    function isVisible() {
     return (userName !== "" && password !== "") ? false: true 
    }
 
  return (
    <div className="App">
     <input type = "text" onChange = {updateUserName} value = {userName} />
     <input type = "password" onChange = {updatePassword} value = {password} />
     <button disabled = {isVisible()}>Submit</button>
    </div>
  );
}

export default App;
