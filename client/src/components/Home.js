import React, { useEffect, useState } from 'react';
import '../App.css';
import './Home.css';
import { NavLink } from "react-router-dom";
const Home = () => {

    const [userName, setUserName] = useState("");



    const userHomeInfo = async () => {


        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            console.log(data);
            setUserName(data.name);

        } catch (err) {
            console.log(err);

        }

    }



    useEffect(() => {
        userHomeInfo();
    }, []);


    return (
        <>

            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <h1>Welcome {userName ? <span>{userName}</span> : <span>to MY PAGE</span> } </h1>
                    <h2>{userName ? 'Glad to see you back!' : 'Login to know more' }</h2>
                    
                    { userName ? <div> </div> : 
                    <div class="d-flex">
                        <NavLink to="/login" class="btn-get-started ">Get Started</NavLink>
                    </div> }
                </div>
            </section>
        </>
    )
}

export default Home



