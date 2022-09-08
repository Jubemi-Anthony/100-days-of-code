const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

//init mongoose
mongoose.connect(process.env.MONGO_URI);

const con = mongoose.connection;
con.on('open', error => {
    if(!error){
        console.log('DB connection successful');
    }
})

//parse JSON data coming in the request body
app.use(express.json());

//gain access to my routes
app.use('/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> console.log(`Server started on ${PORT}`));
