import mongoose from "mongoose";

/**
 * @typedef {BookObject}
 * @property {string} Name
 * @property {string} Author
 * @property {string} ISBN
 * @property {Date} PublishingDate
 * @property {string} Publisher
 * @property {string} Subject
 * @property {Boolean} Borrowed
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
 * @type {mongoose.Schema<BookObject>}
 */
const bookSchema = new mongoose.Schema({
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
  Name:{
    type:String,
    minlength:4,
    required:true
  },
  Author:{
    type:String,
    minlength:4,
    required:true
  },
  Publisher:{
    type:String,
    minlength:4,
    required:true
  },
  Subject:{
    type:String,
    minlength:4,
    required:true
  },
  PublishingDate:{
    type:Date,
    required:true,
    default: Date.now
  },
  Borrowed:{
    type:Boolean,
    required:[true,"Borrowed field is required"]
  }
});
/**
 * @typedef {BookCopyObject}
 * @property {string} Name
 * @property {string} Author
 * @property {string} ISBN
 * @property {Date} PublishingDate
 * @property {string} Publisher
 * @property {string} Subject
 * @property {Number} Copies 
 */
/**
 * @type {mongoose.Schema<BookCopyObject>}
 */
const bookCopySchema = new mongoose.Schema({
  ISBN:{
    type:String,
    minlength:10,
    maxlength:13,
    unique:true,
    required:true,
    validate:{
      validator:ISBN_Validator,
      message: (props) => `${props.value} is not a valid ISBN!`
    }
  },
  Name:{
    type:String,
    minlength:4,
    required:true
  },
  Author:{
    type:String,
    minlength:4,
    required:true
  },
  Publisher:{
    type:String,
    minlength:4,
    required:true
  },
  Subject:{
    type:String,
    minlength:4,
    required:true
  },
  PublishingDate:{
    type:Date,
    required:true,
    default: Date.now
  },
  Copies:{
    type:Number,
    required:true
  }
});
/**
 * @type {mongoose.model<BookObject>}
 */
const BookModel = mongoose.model('book_models',bookSchema);
/**
 * @type {mongoose.model<BookCopyObject>}
 */
const BookCopyModel = mongoose.model('book_copy_models',bookCopySchema);
export default {bookSchema,BookModel,bookCopySchema,BookCopyModel};