const mongoose = require('mongoose');

const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname : {
        firstname: {
            type: String,
            required: true,
            minlength: [2, 'First name must be at least 2 characters long']
        },
        lastname: {
            type: String,
            minlength: [2, 'Last name must be at least 2 characters long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters long']
    },
    password: {
        type: String,
        required: true,
        select : false
    },
    socketId: {
        type: String
    },
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;  
}

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bycrypt.compare(enteredPassword, this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bycrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;