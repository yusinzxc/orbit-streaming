import React from 'react'
import { useHistory } from 'react-router-dom'
/* Icons */
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa'

const Start = () => {
  let history = useHistory()
  const goTo = (path) => {
   history.push(`/${path}`)
  }
  return (
    <div className="parent-start">
      <div className="start-container">
        <h1 className="start-text">Welcome</h1>
        <button className="start-btn-socialM start-button"><FaGoogle className="start-icons" /> Sign in with Google</button>
        <button className="start-btn-socialM start-button"><FaFacebook className="start-icons" /> Sign in with Facebook</button>
        <button className="start-btn-socialM start-button"><FaGithub className="start-icons" />Sign in with Github</button>
        <button className="start-btn-signup start-button" onClick={() => goTo("signup")}>Create an account</button>
      </div>
      <h6 className="start-havean">Have an account? <span onClick={() => goTo("signin")}>Sign in</span></h6>
    </div>
  )
}

export default Start
