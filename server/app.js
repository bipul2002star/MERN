const dotenv = require("dotenv");
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

//mongoose wala connection ka code
require('./db/conn');

//Hamare collection ka naam
const User = require('./model/userSchema');


// app.use(function(req, res, next){
// res.header("Access-Control-Allow-Origin", "*");
// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// res.header("Access-Control-Allow-Methods", 'PUT, POST, GET, DELETE, OPTIONS');
// next();

// })



//data post karte samay hamare json ko nahi samjhta hai app issliye hum iss middleware ka use karte hain
app.use(express.json());


//middleware hai ek router files ko link kar rahe hai to make our routes easy
app.use(require('./router/auth'));

const PORT = process.env.PORT;


//routes
// app.get('/', (req, res) => {
//     res.send(`Hello world `);
// });

// app.get('/about', middleware, (req, res) => {
//     res.send(`Hello about world `);
// });

// app.get('/contact', (req, res) => {
//     res.send(`Hello about world `);
// });

// app.get('/signin', (req, res) => {
//     res.send(`Hello about world `);
// });

// app.get('/signup', (req, res) => {
//     res.send(`Hello about world `);
// });

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})