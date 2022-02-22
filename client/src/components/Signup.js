import React, { useState } from 'react';
import signpic from "../images/signpic.svg";
import "./Signup.css"
import { NavLink, useHistory } from "react-router-dom";

const Signup = () => {
const history = useHistory();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });



    let name, value;
    const handleInputs = (e) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    };



    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({


                name, email, phone, work, password, cpassword

            })
        });

        const data = await res.json();

        if(data.status === 422 || !data)
        {
            window.alert("Invalid Registration");
        }
        else{
            window.alert("Registration Successful");
            history.push("/login");
        }

    };

    return (

        <>
            <div class="container">
                <div class="row py-4 mt-2 align-items-center">
                    <div class="col-md-5 pr-lg-5 my-5 mb-md-0">
                        <img src={signpic} alt="Registration Image" class="img-fluid mb-3 d-none d-md-block" />



                        <div class="text-center w-100 my-5">
                            <p class="text-muted font-weight-bold"><NavLink to="/login" className="signup-image-link">I am already registered.</NavLink></p>
                        </div>


                    </div>

                    {/* Registration form */}
                    <div class="col-md-7 col-lg-6 ml-auto">
                        <h1 class="text-center w-100 my-4">Create an Account</h1>
                        <form method="POST" className="register-form" id="register-form">

                            {/* Name */}
                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <label htmlFor="name">
                                            <i className="zmdi zmdi-account material-icons-name"></i>
                                        </label>
                                    </span>
                                </div>

                                <input type="text" name="name" id='name' placeholder="Enter Your Name" class="form-control bg-white border-left-0 border-md" value={user.name}
                                    onChange={handleInputs} />
                            </div>


                            {/* Email */}
                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <label htmlFor="email">
                                            <i className="zmdi zmdi-email material-icons-name"></i>
                                        </label>
                                    </span>
                                </div>

                                <input type="email" name="email" id='email' placeholder="Enter Your email" class="form-control bg-white border-left-0 border-md" value={user.email}
                                    onChange={handleInputs} />
                            </div>



                            {/* Phone */}
                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <label htmlFor="phone">
                                            <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                        </label>
                                    </span>
                                </div>

                                <input type="number" name="phone" id='phone' placeholder="Enter Your mobile number" class="form-control bg-white border-left-0 border-md" value={user.phone}
                                    onChange={handleInputs} />
                            </div>


                            {/* work */}
                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <label htmlFor="work">
                                            <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                        </label>
                                    </span>
                                </div>

                                <input type="text" name="work" id='work' placeholder="Enter Your profession" class="form-control bg-white border-left-0 border-md" value={user.work}
                                    onChange={handleInputs} />
                            </div>



                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <label htmlFor="password">
                                            <i className="zmdi zmdi-lock material-icons-name"></i>
                                        </label>
                                    </span>
                                </div>

                                <input type="password" name="password" id='password' placeholder="Create a New Password" class="form-control bg-white border-left-0 border-md" value={user.password}
                                    onChange={handleInputs} />
                            </div>


                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <label htmlFor="cpassword">
                                            <i className="zmdi zmdi-lock material-icons-name"></i>
                                        </label>
                                    </span>
                                </div>

                                <input type="password" name="cpassword" id='cpassword' placeholder="Confirm Password" class="form-control bg-white border-left-0 border-md" value={user.cpassword}
                                    onChange={handleInputs} />
                            </div>




                            {/* Submit Button */}
                            <div class="form-group col-lg-12 mx-auto mb-0">


                                <input type="submit" name="signup" id="signup" className="form-submit btn btn-primary btn-block py-2 font-weight-bold" value="Register" onClick={PostData} />
                            </div>




                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Signup
