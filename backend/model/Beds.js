const mongoose = require('mongoose')



const Bedschema = new mongoose.Schema({
    bed_name : String,
    bed_details : String,
    ward : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Ward"
    },
    allpatient : [{
            type : mongoose.Schema.Types.ObjectId,
            ref: "Patient"
    }],
    // currentPatient : {
    //     Type : mongoose.Schema.Types.ObjectId,
    //     ref : "Patient"
    // }
  
})

module.exports = new mongoose.model('Bed', Bedschema, 'Bed')