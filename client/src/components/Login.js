import React, { useState, useContext } from 'react';
import './Login.css'
import { NavLink, useHistory } from "react-router-dom"
import login from "../images/login.svg"
import {UserContext} from '../App'

const Login = () => {

    const { state, dispatch } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();


    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('/signin', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({ email, password })

        });

        const data =  res.json();


        if (res.status === 400 || res.status === 422 || !data) {
            window.alert("Invalid credentials");
        }
        else {
            dispatch({
                type: "USER",
                payload: true
            });
            window.alert("User Logged In");
            history.push("/");
        }


        
        // let request = { email, password }
        // const res = await axios.post('http://localhost:5000/signin', request);
        // if (res.status === 400 || res.status === 422 || !res) {
        //     window.alert("Invalid credentials");
        // }
        // else {
        //     window.alert("User Logged In");
        //     history.push("/");
        // }

        
    }
    return (
        <>
            <div class="container">
                <div class="row py-5 mt-4 align-items-center">


                    {/* Registration form */}
                    <div class="col-md-7 col-lg-6 ml-auto">
                        <h1 class="text-center w-100 my-5">Sign in to your Account</h1>
                        <form method="POST" className="register-form" id="register-form">



                            {/* Email */}
                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <label htmlFor="email">
                                            <i className="zmdi zmdi-email material-icons-name"></i>
                                        </label>
                                    </span>
                                </div>

                                <input type="email" name="email" id='email' placeholder="Enter Your email" class="form-control bg-white border-left-0 border-md" value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    } />
                            </div>


                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <label htmlFor="password">
                                            <i className="zmdi zmdi-lock material-icons-name"></i>
                                        </label>
                                    </span>
                                </div>

                                <input type="password" name="password" id='password' placeholder="Enter Password" class="form-control bg-white border-left-0 border-md" value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                            </div>




                            {/* Submit Button */}
                            <div class="form-group col-lg-12 mx-auto mb-0">


                                <input type="submit" name="signin" id="signin" className="form-submit btn btn-primary btn-block py-2 font-weight-bold" value="Log In" onClick={loginUser} />
                            </div>




                        </form>
                    </div>


                    <div class="col-md-5 pr-lg-5 my-5 mb-md-0">
                        <img src={login} alt="Registration Image" class="img-fluid mb-3 d-none d-md-block" />
                        <div class="text-center w-100 my-5">
                            <p class="text-muted font-weight-bold"><NavLink to="/signup" className="signup-image-link">I do not have an account</NavLink></p>
                        </div>


                    </div>


                </div>
            </div>

        </>
    )
}

export default Login
