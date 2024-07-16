import mongoose from "mongoose";
/**
 * @typedef UserObject
 * @property {string} Name
 * @property {string} Email
 * @property {string} Password 
 * @property {Buffer} ProfilePicture
 */
/**
 * @type {mongoose.Schema<UserObject>}
 */
const userSchema = new mongoose.Schema({
  Name:{
    type:String,
    minlength:4,
    requireed:true,
    lowercase:true
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
    unique:true,
    validate:{
      /**
       * @name vlidator validates Password
       * @param {string} v 
       * @returns {Boolean}
       */
      validator:v=> /^[\x21-\x7E]{8}$/.test(v),
      message:props=>`${props.value} is not a valid password.`
    }
  },
  ProfilePicture:{
    type:Buffer,
    required:[true,'profile pic is required.']
  }
});
/**
 * @type {mongoose.model<UserObject>}
 */
const UserModel = mongoose.model('user_model',userSchema);
export default {UserModel,userSchema};