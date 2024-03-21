const mongoose = require('mongoose')

const empshema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    IId : String,
    YTd : String,
    LCd : String
})

const empmodel = mongoose.model("users", empshema)
module.exports = empmodel