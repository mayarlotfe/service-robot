const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },office:{
       type: Schema.Types.ObjectId,ref:"Office",
        required:true
    }
})

module.exports = User =  mongoose.model('users', UserSchema)