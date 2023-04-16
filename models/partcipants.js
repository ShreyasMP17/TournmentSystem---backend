const mongoose = require("mongoose")

const partcipantsSchema = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("Partcipants",partcipantsSchema)