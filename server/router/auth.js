const express = require('express');

// ek function hota hai express ke andar jisse routes create kar sakte hain
const router = express.Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');


require('../db/conn');
const User = require('../model/userSchema');
const authenticate = require("../middleware/authenticate");
// const { response } = require('express');

router.use(cookieParser());

router.get('/', (req, res) => {
    res.send(`Hello world router js`);
});

router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Fill all the fields" });
    }


    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Try to sign in. This email is already registered" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Passwords are not matching" });
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword });

            // Here a middleware will be called 


            await user.save();
            res.status(201).json({ message: 'User has been Registered' });

            // const userRegister = await user.save();
            // if (userRegister) {
            //     res.status(201).json({ message: 'User has been Registered' });
            // }
            // else {
            //     res.status(500).json({ error: 'Failed to register' });
            // }
        }

    }
    catch (err) {
        console.log(err);
    }

})

router.post('/signin', async (req, res) => {

    try {
        let token;
        const { email, password } = req.body;

        if (!password || !email) {
            return res.status(400).json({
                error: 'Please fill in all the fields properly'
            });
        }
        const userLogin = await User.findOne({ email: email });


        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            // // with the help of userLogin,we are callling a function
            // token = await userLogin.generateAuthToken();
            // console.log(token);
            // res.cookie("jwtoken", token, {
            //     expires : new Date(Date.now() + 25892000000),
            //     httpOnly: true
            // });


            if (!isMatch) {
                return res.status(422).json({
                    error: "Invalid Credentials"
                });
            } else {
                // with the help of userLogin,we are callling a function
                token = await userLogin.generateAuthToken();
                console.log(token);
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });
                res.json({ message: 'User signed in successfully' });
            }
        } else {
            return res.status(422).json({
                error: "Invalid Credentials"
            });
        }

    } catch (err) {
        console.log(err);
    }

})



router.get('/about', authenticate, async (req, res) => {
    // res.send(`Hello about world `);
    await res.send(req.rootUser);
});

router.get('/getdata', authenticate, async (req, res) => {
    await res.send(req.rootUser);
})

router.post('/contact', authenticate, async (req, res) => {

    try {

        const { name, email, phone, message } = await req.body;

        if (!name || !email || !phone || !message) {

            console.log("Error in contact form");

            return res.json({ error: "Please fill all the fields" });
        }


        const userContact = await User.findOne({ _id: req.userID });

        if (userContact) {


            const userMessage = await userContact.addMessage(name, email, phone, message);

            await userContact.save();
            res.status(201).json({ message: "User's message stored" });
        }

    } catch (error) {
        console.log(error);
    }



});


router.get('/logout', (req, res) => {
    console.log(`Logout ka page`);
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send("User successfully logged out");
});

module.exports = router;

