import mongoose from "mongoose";
/**
 * @typedef AdminObject
 * @property {string} Name
 * @property {string} Email
 * @property {string} Password
 * @property {Date} JoiningDate
 */
/**
 * @type {mongoose.Schema<AdminObject>}
 */
const adminSchema = new mongoose.Schema({
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
  JoiningDate:{
    type:Date,
    required:true,
    default:Date.now
  }
});
/**
 * @type {mongoose.model<AdminObject>}
 */
const AdminModel = mongoose.model('admin_model',adminSchema);
export default {AdminModel,adminSchema};