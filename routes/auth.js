const express = require("express");
const Person = require("../model/Person");
const router = express.Router()
const jwt = require("jsonwebtoken")

router.post('/newPerson', async (req, res) =>{
    // TO COLLECT DATA FROM THE Person
    const {fullName, email, password, phoneNumber, gender} = req.body

    //CHECKING FOR REQUIRED FIELDS
    if(!fullName || !password || !email || !gender || !phoneNumber){
        return res.status(400).send({status: 'Error', msg: 'All fields must be entered'})
    }

    //CREATE A NEW DOCUMENT
    try{
        
        const timestamp = Date.now();

        let person = new Person;
        person.fullName = fullName;
        person.age = 0;
        person.state = "";
        person.phoneNumber = phoneNumber;
        person.email = email;
        person.password = password;
        person.features.eyeColour = '';
        person.features.height = 0;
        person.features.disability = false;
        person.features.isMarried = false;
        person.hobbies = [''];
        person.houses = 0;
        person.gender = gender;
        person.timestamp = timestamp;

        person = await person.save()

        const token = jwt.sign({
            _id: person._id
        }, process.env.JWT_SECRET)

        return res.status(200).send({status: 'OK', msg: 'Person Created', person, token})
    }catch(e){
        console.log(e);
        return res.status(404).send({status: 'Error', msg: 'Some error occured', e})
    }
})

router.post('/login', async (req, res) =>{
    const { email, password} = req.body;

    if( !email || !password){
        return res.status(400).send({status: "Error", msg: "All fields must be entered"});
    }

    //FINDONE RETURNS THE FIRST DOCUMENT THAT MATCHES WITH THE GIVEN KEY AND VALUE,
    //WHILE FINDS RETURNS EVERYTHING WITH THE GIVEN KEY AND VALUE
    
    try{
        const person = await Person.findOne({email},{password}).lean();
        
        if(!person){
            return res.status(400).send({status: "Error", msg: "No person found"});
        }

        if(person.password != password){
            return res.status(400).send({status: "Error", msg: "Incorrect password"});
        }

        delete person.password;

        const token = jwt.sign({
            _id: person._id,
            email: person.email
        }, process.env.JWT_SECRET)

        person["token"] = token;

        return res.status(200).send({status: "OK", msg: "Login successful", person})
    }catch(e){
        console.log(e);
        return res.status(404).send({status: "Error", msg: "Some error occured", e})
    }
})

router.post('/getPerson', async (req, res) =>{
    const {fullName} = req.body;
    if(!fullName){
        return res.status(400).send({status: "Error", msg: "Enter name"});
    }
    //FINDONE RETURNS THE FIRST DOCUMENT THAT MATCHES WITH THE GIVEN KEY AND VALUE,
    //WHILE FINDS RETURNS EVERYTHING WITH THE GIVEN KEY AND VALUE
    try{
        const person = await Person.find({gender: "female"}).lean();
        return res.status(200).send({status: "OK", msg: "Success", person})
    }catch(e){
        console.log(e);
        return res.status(404).send({status: "Error", msg: "Some error occured", e})
    }
})

router.post('/editPerson', async (req, res) =>{
    const {fullName, height, hobbies, houses, isMarried} = req.body;
    if(!fullName){
        return res.status(400).send({status: "Error", msg: "Enter name"});
    }
    //FINDONE RETURNS THE FIRST DOCUMENT THAT MATCHES WITH THE GIVEN KEY AND VALUE,
    //WHILE FINDS RETURNS EVERYTHING WITH THE GIVEN KEY AND VALUE
    try{
        const person = await Person.findOne({fullName: "Etinosa June"}).lean();

        const data = {
            'features.height': height || person.features.height,
            hobbies: hobbies || person.hobbies,
            houses: houses || person.houses,
            'features.isMarried': isMarried || person.features.isMarried,
        }
        const found = await Person.findOneAndUpdate({fullName: "Etinosa June"}, data, {new: true});
        return res.status(200).send({status: "OK", msg: "Success", person:found})
    }catch(e){
        console.log(e);
        return res.status(404).send({status: "Error", msg: "Some error occured", e})
    }
})

router.post('/deletePerson', async (req, res) =>{
    const {fullName} = req.body;
    if(!fullName){
        return res.status(400).send({status: "Error", msg: "Enter name"});
    }
    //FINDONE RETURNS THE FIRST DOCUMENT THAT MATCHES WITH THE GIVEN KEY AND VALUE,
    //WHILE FINDS RETURNS EVERYTHING WITH THE GIVEN KEY AND VALUE
    try{
        const person = await Person.findOneAndDelete({fullName: fullName}).lean();
        return res.status(200).send({status: "OK", msg: "Success", person})
    }catch(e){
        console.log(e);
        return res.status(404).send({status: "Error", msg: "Some error occured", e})
    }
})

router.post('/update', async (req, res) =>{
    const {token, age} = req.body;
    if(!token || !age){
        return res.status(400).send({status: "Error", msg: "All fields must be filled"});
    }
    //FINDONE RETURNS THE FIRST DOCUMENT THAT MATCHES WITH THE GIVEN KEY AND VALUE,
    //WHILE FINDS RETURNS EVERYTHING WITH THE GIVEN KEY AND VALUE
    try{

        //JWT VERIFICATION
        const person = jwt.verify(token, process.env.JWT_SECRET)


        const ages = await Person.findOneAndUpdate({_id: person._id}, {age: age, $inc: {houses: 1} }, {new: true}).lean();
        // To find all Persons less than 30
        // const person = await Person.find({age: $lt:30})

        return res.status(200).send({status: "OK", msg: "Success", ages})
    }catch(e){
        console.log(e);
        return res.status(404).send({status: "Error", msg: "Some error occured", e})
    }
})

router.post('/updateId', async (req, res) =>{
    const {token, age} = req.body;
    if(!token || !age){
        return res.status(400).send({status: "Error", msg: "All fields must be filled"});
    }
    //FINDONE RETURNS THE FIRST DOCUMENT THAT MATCHES WITH THE GIVEN KEY AND VALUE,
    //WHILE FINDS RETURNS EVERYTHING WITH THE GIVEN KEY AND VALUE
    try{

        //JWT VERIFICATION
        const person = jwt.verify(token, process.env.JWT_SECRET)


        const ages = await Person.findByIdAndUpdate({_id: person._id}, {age: age, $inc: {houses: 1} }, {new: true}).lean();
        // To find all Persons less than 30
        // const person = await Person.find({age: $lt:30})

        delete ages._id

        return res.status(200).send({status: "OK", msg: "Success", ages})
    }catch(e){
        console.log(e);
        return res.status(404).send({status: "Error", msg: "Some error occured", e})
    }
})

module.exports = router;