import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className="login">
       <form className="loginForm">
           <span className="loginTitle">LOGIN</span>
           <label>Name</label>
           <input type="text" className="loginInput" placehodler="Enter your name..."></input>
           <label>Email</label>
           <input type="text" className="loginInput" placehodler="Enter your email..."></input>
           <label>Password</label>
           <input type="text" className="loginInput" placehodler="Enter your password..."></input>
           <label>Password Again</label>
           <input type="text" className="loginInput" placehodler="Enter your password again..."></input>
           <button className="loginButton">Login</button>
       </form>
       <button className="loginRegisterButton">Register</button>
    </div>
  )
}
