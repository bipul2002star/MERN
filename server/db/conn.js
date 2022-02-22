const mongoose = require('mongoose');


const DB = process.env.DATABASE;

//Code to connect the db with the backend
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection`));