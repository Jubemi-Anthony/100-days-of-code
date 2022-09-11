const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const session = require('express-session')

//init mongoose
const db = process.env.MONGO_URI;
mongoose.connect(db, {useNewUrlParser: true})
.then(()=> console.log('MongoDB connected...'))
.catch(err => console.log(err));

const app = express();

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({ extended: false }));

// EXPRESS Session Middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))

//Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT: ${PORT}`));
