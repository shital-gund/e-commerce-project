import axios from 'axios'
import React, { useState } from 'react'
import "../../theme-asset/css/sign.css"

const SignUp = () => {

  const [user, setUser] = useState()
  const [pass, setPass] = useState()

  const signUpData = () => {
    let payload = {
      username: user,
      password: pass
    }

    axios.post("http://localhost:3001/signin", payload)
      .then(response => {
        console.log("cartdata", response)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="Login">
        <div className="login-form">
          <div className="title">Sign In</div>
          <div className="form">
            <form>
              <div className="input-container">
                <label>Username </label>
                <input type="text" onChange={(event) => { setUser(event.target.value) }} name="uname" required />

              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="password" onChange={(event1) => { setPass(event1.target.value) }} name="pass" required />

              </div>
              <div className="button-container" onSubmit={signUpData()}>
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp