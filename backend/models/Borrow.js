import mongoose from "mongoose";
/**
 * @typedef BorrowObject - default value of ["Approved"] is false
 * @property {Date} [BorrowDate]
 * @property {Date} RenewalDate
 * @property {string} UserName
 * @property {string} BookName
 * @property {mongoose.Schema.ObjectId} UserID
 * @property {string} UserEmail
 * @property {string} ISBN
 * @property {boolean} [Approved]
 * @property {mongoose.Schema.ObjectId} [BookID]
 */

/**
 * @name ISBN_Validator validates all ISBNs
 * @param {string} isbn 
 * @returns {boolean}
 */
const ISBN_Validator = (isbn) => {
  let x =  parseInt(isbn)
  if (isbn.length==10 && (typeof x == "number")) 
    return true;
  else if (isbn.length==13 && (typeof x == "number")) 
    return true;
  else 
    return false;
}

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
    default:null
  },
  UserID:{
    type:mongoose.Schema.ObjectId,
    required:true
  },
  UserName:{
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
  UserEmail:{
    type:String,
    required:true,
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
  BookName:{
    type:String,
    required:true,
  },
  ISBN:{
    type:String,
    minlength:10,
    maxlength:13,
    required:true,
    validate:{
      validator:ISBN_Validator,
      message: (props) => `${props.value} is not a valid ISBN!`
    }
  },
  Approved:{
    type:Boolean,
    default:false
  }
});
/**
 * @type {mongoose.Model<BorrowObject>}
 */
const BorrowModel = mongoose.model('borrow_model',borrowSchema);
export default {borrowSchema,BorrowModel};