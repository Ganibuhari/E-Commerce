const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please enter your name']
    },
    email:{
        type: String,
        required: [true,'Please enter your email'],
        unique: true,
        validate: [validator.isEmail,'Please enter valid email']
    },
    password: {
        type: String,
        required: [true,'Please enter your password'],
        minlength: [6,'Password must minumum 6 characters'],
        maxlength: [24,'Password cannot exceed 24 characters']
    },
    avatar: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
})



let model = mongoose.model('User',userSchema);
module.exports = model;