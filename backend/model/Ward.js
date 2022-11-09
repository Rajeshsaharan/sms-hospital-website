const mongoose = require('mongoose')



const Wardschema = new mongoose.Schema({
    ward_name : String,
    ward_details : String,
    patients : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Patient"
        }
    ],
    bed : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Bed"
    }]
  


})

module.exports = new mongoose.model('Ward', Wardschema, 'Ward')