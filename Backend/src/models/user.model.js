const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    userMail:{
        type: String,
        required: true, 
        unique: true 
    },
    userName:{
        type: String,
        required: true,
        unique: true 
    },
    userAlias:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    }

})

const User = mongoose.model('User', userSchema, 'users');
module.exports = {User, userSchema}