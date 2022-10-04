const mongoose = require('mongoose')

const url = "https://eu.ui-avatars.com/api/?name=John+Doe&size=250"

const Userschema = new mongoose.Schema({
    username : String,
    phoneNumber : String,
    name : String,
    bio : String,
    profilePicUrl : {
        type : String,
        default : url
    }
})

module.exports = new mongoose.model('User', Userschema, 'User')