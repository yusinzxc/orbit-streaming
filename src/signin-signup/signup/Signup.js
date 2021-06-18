import React from 'react'
import { useHistory } from 'react-router-dom'
const Signin = () => {
  let history = useHistory()
  const goToSignin = () => {
    history.push("/signin")
  }
  return (
    <div className="parent-signup">
      <div className="signup-container">
        <h1 className="signup-text">Sign up</h1>
        <input className="signup-username signup-input" type="text" placeholder="Username" />
        <input className="signup-email signup-input" type="email" placeholder="Email" />
        <input className="signup-password signup-input" type="password" placeholder="Password" />

        <input className="signup-confirn-password signup-input" type="password" placeholder="Confirm Password"/>
        <button className="signup-button">SIGN UP</button>
      </div>
     <h6 className="signup-havean">Have an account? <span onClick={goToSignin}>Sign in</span></h6> 
    </div>
  )
}

export default Signin
