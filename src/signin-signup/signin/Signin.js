import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FiEye,FiEyeOff } from 'react-icons/fi'
const Signin = () => {
  let signupHistory = useHistory()
  const goToSignup = () => {
    signupHistory.push("/signup")
  }
  const [ toggle, setToggle ] = useState(true)
  const eyeToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className="parent-signin">
      <div className="signin-container">
      <h1 className="signin-text">Sign in</h1>
      <input className="signin-username-email signin-input" type="text" placeholder="Email"/>
      <div className="eye" onClick={eyeToggle}>
        <FiEye display={toggle ? "block":"none"}/>
        <FiEyeOff display={ toggle ? "none":"block" } />
      </div>
      <input className="signin-password signin-input" type={toggle ? "password":"text"} placeholder="Password"/>
      <button className="signin-button">SIGN IN</button>
    </div>
    <h6 className="signin-donthave">Don't have an account? <span onClick={goToSignup}>Sign up</span></h6>
    </div>
  )
}

export default Signin
