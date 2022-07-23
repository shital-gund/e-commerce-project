import React, { useState } from 'react'
import axios from 'axios';
import "../../theme-asset/css/sign.css"

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [database, setDatabase] = useState([])
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
            
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        axios.get(`http://localhost:3001/signin`)
            .then((response) => {
                console.log(response.data)
                setDatabase(response.data)
            })
            .catch((error) => console.log(error))
        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.email === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                console.log("userData", userData);
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };
    return (
        <div className="Login">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> :
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <label>Email</label>
                                <input type="text" name="uname" required />
                                {renderErrorMessage("uname")}
                            </div>
                            <div className="input-container">
                                <label>Password </label>
                                <input type="password" name="pass" required />
                                {renderErrorMessage("pass")}
                            </div>
                            <div className="button-container">
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}

export default Login