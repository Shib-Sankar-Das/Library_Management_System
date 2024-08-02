import mongoose from "mongoose";
import bcrypt from "bcrypt"
/**
 * @typedef UserObject
 * @property {string} Name
 * @property {string} Email
 * @property {string} Password 
 * @property {Buffer} Avatar
 */
/**
 * @type {mongoose.Schema<UserObject>}
 */
const userSchema = new mongoose.Schema({
  Name:{
    type:String,
    minlength:4,
    maxlength:50,
    requireed:true,
    lowercase:true,
    validator:{
      /**
       * @name vlidator validates Email
       * @param {string} v 
       * @returns {Boolean}
       */
      validate:v=>/^[a-zA-Z ]{4,50}$/.test(v),
      message:props=>`${props.value} is not a valid user name.`
    }
  },
  Email:{
    type:String,
    required:true,
    unique:true,
    validator:{
      /**
       * @name vlidator validates Email
       * @param {string} v 
       * @returns {Boolean}
       */
      validate:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message:props=>`${props.value} is not a valid Email id.`
    }
  },
  Password:{
    type:String,
    required:true,
    unique:true
  },
  Avatar:{
    type:Buffer,
    required:[true,'profile pic is required.']
  }
});
/**
 * @type {mongoose.Model<UserObject>}
 */
userSchema.pre('save',function(next){
  this.Password = bcrypt.hashSync(this.Password, bcrypt.genSaltSync(8));
  next();
});
/**
 * @type {mongoose.Model<UserObject>}
 */
const UserModel = mongoose.model('user_model',userSchema);
export default {UserModel,userSchema};