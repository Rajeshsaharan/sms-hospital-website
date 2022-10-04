const mongoose = require('mongoose')

module.exports = async()=>{
    try{
        const connect = await mongoose.connect("mongodb://localhost:27017/smsDatabase")
        console.log("connected")
    }catch(e){
        console.log("not connected")
    }
}


