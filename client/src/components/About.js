import React, { useEffect, useState } from 'react';
// import pic from '.../images/bipul1.png'
import './About.css';
import { useHistory } from 'react-router-dom';

const About = () => {

    const [userData, setUserData] = useState("");
    const history = useHistory();

    const callAboutPage = async () => {


        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            history.push('/login');

        }

    }



    useEffect(() => {
        callAboutPage();
    }, []);


    return (
        <>

            <div className="page-content page-container  mx-auto" id="page-content">
                <h1 className="my-5 text-center section-tite">About Me</h1>
                <form method="GET">
                    <div className="padding">
                        <div className="container d-flex justify-content-center align-items-center">
                            <div className="col-xl-12 col-md-12">
                                <div className="card user-card-full">
                                    <div className="row ">
                                        <div className="col-sm-4 bg-c-lite-green user-profile">
                                            <div className="card-block text-center text-white">
                                                <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" /> </div>
                                                <h4 className="f-w-600">{userData.name}</h4>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="card-block">
                                                <h2 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h2>
                                                <div className="row">
                                                    <div className="col-md-6">

                                                        <label>ID</label>


                                                    </div>

                                                    <div className="col-md-6">

                                                        <p>{userData._id}</p>


                                                    </div>


                                                </div>





                                                <div className="row">
                                                    <div className="col-md-6">

                                                        <label>Email</label>


                                                    </div>

                                                    <div className="col-md-6">

                                                        <p>{userData.email}</p>


                                                    </div>


                                                </div>


                                                <div className="row">
                                                    <div className="col-md-6">

                                                        <label>Phone</label>


                                                    </div>

                                                    <div className="col-md-6">

                                                        <p>{userData.phone}</p>


                                                    </div>


                                                </div>


                                                <div className="row">
                                                    <div className="col-md-6">

                                                        <label>Profession</label>


                                                    </div>

                                                    <div className="col-md-6">

                                                        <p>{userData.work}</p>


                                                    </div>


                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About
