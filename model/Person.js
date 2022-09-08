const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema({
    //Entering the user data
    fullName: String,
    email: String,
    phoneNumber: String,
    password: String,
    age: Number,
    state: String,
    features: {
        eyeColour: String,
        height: Number,
        disability: Boolean,
        isMarried: {type: Boolean, default: false}
    },
    hobbies: [String],
    houses: {type: Number, default: 0},
    gender: {type: String, enum: ["male", "female"]},
    timestamp: Number,
}, {collection: "people"});

const model = mongoose.model("Person", peopleSchema);
module.exports = model;