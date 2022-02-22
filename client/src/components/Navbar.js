import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import boy from '../images/boy.gif';


import {UserContext} from '../App'

import './Navbar.css'

const Navbar = () => {


    const { state, dispatch } = useContext(UserContext);

    const RenderMenu = () => {


        if (state)
            return (
                <>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link option" exact to="/">Home </NavLink>
                    </li>
                    <li className="nav-item  mx-2">
                        <NavLink className="nav-link option" exact to="/bipul">About Bipul</NavLink>
                    </li>
                    <li className="nav-item  mx-2">
                        <NavLink className="nav-link option" exact to="/about">About Me</NavLink>
                    </li>
                    <li className="nav-item  mx-2">
                        <NavLink className="nav-link option" exact to="/contact">Contact</NavLink>
                    </li>


                    <li className="nav-item mx-2">
                        <NavLink className="nav-link option" exact to="/logout">Logout</NavLink>
                    </li>

                </>


            )

        else {


            return (
                <>



                <li className="nav-item mx-2">
                    <NavLink className="nav-link option" exact to="/">Home </NavLink>
                </li>
                <li className="nav-item  mx-2">
                    <NavLink className="nav-link option" exact to="/bipul">About Bipul</NavLink>
                </li>
                <li className="nav-item  mx-2">
                    <NavLink className="nav-link option" exact to="/about">About Me</NavLink>
                </li>
                <li className="nav-item  mx-2">
                    <NavLink className="nav-link option" exact to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item  mx-2">
                    <NavLink className="nav-link option" exact to="/login">Login</NavLink>
                </li>
                <li className="nav-item  mx-2">
                    <NavLink className="nav-link option" exact to="/signup">Register</NavLink>
                </li>




            </>
            )


        }

    }



    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bgcolor">
                <NavLink className="navbar-brand" to="/">
                    <img src={boy} className="rounded" alt="bgHK" /><span className="logo-me">BIPUL</span>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        <RenderMenu />

                    </ul>
                </div>
            </nav>






        </>
    )
}

export default Navbar
