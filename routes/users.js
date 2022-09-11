const express = require('express');
const router = express.Router();

//User model
const User = require('../models/User')

//Login page
router.get('/login', (req,res) => res.render('login'));

//Register page
router.get('/register', (req,res) => res.render('register'));

//dashboard
router.get('/dashboard', (req,res) => res.render('dashboard'));

//REGISTER HANDLE
router.post('/register', (req,res)=>{
    const {name, email, password, password2} = req.body;
    let errors= [];

    //checking required fields
    if(!name || !email || !password || !password2){
        errors.push({msg: 'Please fill in all fields'});
    }

    //Check password match
    if(password !== password2){
        errors.push({msg: 'Passwords should match'})
    }

    //Check Lenght of password
    if(password.length < 6){
        errors.push({msg: 'Password should be at least 6 characters'})
    }

    if(errors.length > 0){
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        })
    }else{
       //Validation Passed
        User.findOne({email : email})
        .then(user => {
            if(user){
                //USER EXISTS
                errors.push({msg: 'Email already registered'})
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                })
            }else{
                const newUser = new User({
                    name,
                    email,
                    password
                });
                newUser.save()
                .then(user =>{
                    res.redirect('/users/dashbord')
                })
                .catch(err => console.log(err));
            }
        });
    }
})
router.post('/login', (req, res)=>{
    const {email, password} = req.body;

    if( !email || !password){
        return res.status(400).send({status: "Error", msg: "All fields must be entered"});
    }
    User.findOne({email},{password}).lean()
    .then(user =>{
        if(!user){
            return res.status(400).send({status: "Error", msg: "No user found"});
        }
    
        if(user.password != password){
            return res.status(400).send({status: "Error", msg: "Incorrect password"});
        }
        
        res.redirect('/users/dashboard');
    }).catch(err => console.log(err));

   
    
})
module.exports = router;