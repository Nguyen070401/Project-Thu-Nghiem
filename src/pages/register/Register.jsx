import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <form className="registerForm">
           <span className="registerTitle">REGISTER</span>
           <label>Name</label>
           <input type="text" className="registerInput" placehodler="Enter your name..."></input>
           <label>Email</label>
           <input type="text" className="registerInput" placehodler="Enter your email..."></input>
           <label>Password</label>
           <input type="text" className="registerInput" placehodler="Enter your password..."></input>
           <label>Password Again</label>
           <input type="text" className="registerInput" placehodler="Enter your password again..."></input>
           <button className="registerButton">Register</button>
       </form>
       <button className="loginRegisterButton">Login</button>
    </div>
  )
}
