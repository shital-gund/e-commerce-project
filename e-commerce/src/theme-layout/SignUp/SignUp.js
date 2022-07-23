import axios from 'axios'
import React, { useState } from 'react'
import "../../theme-asset/css/sign.css"

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  mobile: ''
}

const SignUp = () => {
  
  const [formState, setFormState] = useState(initialState);

  const createUser = () => {
    axios.post("http://localhost:3001/signin", formState)
    .then(response => {
      console.log("cartdata", response)
    })
    .catch(err => console.log(err))
  }

  const formValueChange = (event, fieldType) => {

    let newState = { ...formState };
    switch (fieldType) {
      case "FIRST_NAME":
        newState.firstName = event.target.value
        break;
      case "LAST_NAME":
        newState.lastName = event.target.value
        break;

      case "EMAIL":
        newState.email = event.target.value
        break;

      case "PASSWORD":
        newState.password = event.target.value
        break;

      case "MOBILE_NO":
        newState.mobile = event.target.value
        break;
    }
    setFormState({ ...newState });
  }

  return (
    <div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">First Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" onChange={(event) => formValueChange(event, "FIRST_NAME")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Last Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" onChange={(event) => formValueChange(event, "LAST_NAME")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" onChange={(event) => formValueChange(event, "EMAIL")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" onChange={(event) => formValueChange(event, "PASSWORD")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Mobile No</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" onChange={(event) => formValueChange(event, "MOBILE_NO")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary" onClick={() => createUser()}>Create User</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp