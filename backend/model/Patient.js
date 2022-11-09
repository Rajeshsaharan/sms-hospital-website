const mongoose = require('mongoose')



const Patientschema = new mongoose.Schema({
    patient_name : String,
    patient_details : String,
    ward : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Ward"
    },
    bed : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Bed"
    }
  
})

module.exports = new mongoose.model('Patient', Patientschema, 'Patient')