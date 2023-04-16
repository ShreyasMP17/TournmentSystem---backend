const mongoose = require("mongoose")

const tournmentSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    
})

module.exports = mongoose.model("Tournment",tournmentSchema)