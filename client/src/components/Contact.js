import React, { useEffect, useState } from 'react'
import "./Contact.css"

const Contact = () => {
    const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });




    const userContactInfo = async () => {


        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            console.log(data);
            setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });

        } catch (err) {
            console.log(err);

        }

    }



    useEffect(() => {
        userContactInfo();
    }, []);



    // data ko states me prapt kar rahe hain

    const handleInputs = (e) => {


        const name = e.target.name;
        const value = e.target.value;

        setUserData({ ...userData, [name]: value });
    }


    // send data
    const contactForm =  async (e) => {


        e.preventDefault();

        const { name, email, phone, message } = userData;

        const res = await fetch('/contact', {

            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },


            body : JSON.stringify({
                name, email, phone, message
            })



        });

        const data = await res.json;


        if(!data || data.status !== 201){
             console.log("message not sent");
        } else {
            alert("Message Has Been Sent");
            setUserData({...userData, message : ""});
        }

    }

    return (
        <>
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Get In Touch</h2>
                        <p>Fill out the details and reach out to me</p>
                    </div>

                    <div className="row mt-5">

                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bx bx-map"></i>
                                    <h4>Address:</h4>
                                    <p>India</p>
                                </div>

                                <div className="email">
                                    <i className="bx bx-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>b2000gautam@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bx bx-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+918696673509</p>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0">

                            <form method ="POST" id="contact_form" className="email-form">

                                <div className="form-group mt-3">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="true" value={userData.name}
                                        onChange={handleInputs} />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="true" value={userData.email}
                                        onChange={handleInputs} />
                                </div>

                                <div className="form-group mt-3">
                                    <input type="number" className="form-control" name="phone" id="phone" placeholder="Your Phone" required="true" value={userData.phone}
                                        onChange={handleInputs} />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" cols="30" placeholder="Message" required="true" value={userData.message}
                                        onChange={handleInputs}></textarea>
                                </div>
                                <div className="text-center"><button type="submit" onClick={contactForm} >Send Message</button></div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact
