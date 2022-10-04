const mongoose = require("mongoose")

const Articleschema = new mongoose.Schema({
 title : String,
 body : String,
 arrow : Number,
 owner : {
    type : mongoose.Types.ObjectId,
    ref : 'User'
 },
 comments : {
    type : mongoose.Types.ObjectId,
    ref : "Comment"
 }
 
})

module.exports = new mongoose.model('Article', Articleschema, 'Article')