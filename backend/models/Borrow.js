import mongoose from "mongoose";
/**
 * @typedef BorrowObject
 * @property {Date} BorrowDate
 * @property {Date} RenewalDate
 * @property {string} UserName
 * @property {string} BookName
 * @property {mongoose.Schema.ObjectId} BookID
 * @property {mongoose.Schema.ObjectId} UserID
 * @property {string} AdminName
 * @property {String} AdminEmail
 */
/**
 * @type {mongoose.Schema<BorrowObject>}
 */
const borrowSchema = new mongoose.Schema({
  BorrowDate:{
    type:Date,
    default:Date.now
  },
  RenewalDate:{
    type:Date,
    required:true,
  },
  BookID:{
    type:mongoose.Schema.ObjectId,
    required:true
  },
  UserID:{
    type:mongoose.Schema.ObjectId,
    required:true
  },
  UserName:{
    type:String,
    required:true,
  },
  BookName:{
    type:String,
    required:true,
  },
  AdminName:{
    type:String,
    required:true,
  },
  AdminEmail:{
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
  }
});
/**
 * @type {mongoose.Model<BorrowObject>}
 */
const BorrowModel = mongoose.model('borrow_model',borrowSchema);
export default {borrowSchema,BorrowModel};