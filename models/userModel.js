const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
 Name:{
    type:String,
     required: true
 },
 Address:{
    type:String,
 },
 Username:{
    type:String,
    required:true,
 },
 Password:{
    type:String,
    required:true
 },
 Phone:{
    type:String,
    required:true
 },
 Coins:{
    type:Number,
 },
 Gmail:{
    type:String,
    required:true
 },
 Course:[
    {
        type:{
         course:{
         type:String
        },
        numOfQuestion:{
         type:Number
        }
      }
    }
 ],
 About:{
   type:String
 },
 Birthday:{
   type:String
 },
 Followers:{
   type:Number
 },
 WorkPlace:{
   type:String
 },
 Specialization:{
   type:String
 }
},{timestamps: true,collection:"users"})
userSchema.methods.generateJWT = function(){
   const token = jwt.sign({
      _id:this._id,
      Phone:this.Phone
   },process.env.JWT_SECRET_KEY,{expiresIn:"7d"})
}
let User = mongoose.model("User",userSchema)
module.exports = {User};