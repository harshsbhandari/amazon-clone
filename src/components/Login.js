import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          {/* Email */}
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          {/* Password */}
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            type="submit"
            // onClick={signIn}
            className="login__signInButton">
            Sign In
          </button>

          <p>By signing-in you agree to Amazon's terms and condition of Use & Sale.</p>

          <button
            type="submit"
            // onClick={register}
            className="login__registerButton">
            Create Amazon account here
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
