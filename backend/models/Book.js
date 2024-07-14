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
 * @name validateISBN10 validate ISBN with length 10
 * @param {string} isbn 
 * @returns {boolean}
 */
const validateISBN10 = (isbn) => {
  isbn = isbn.replace(/[\ |-]/g, ''); // Remove hyphens and spaces
  let sum = 0;
  for (let i = 0; i < 9; i++) 
    sum += (i + 1) * parseInt(isbn[i]);
  let checksum = sum % 11;
  let checkDigit = isbn[9].toUpperCase();
  checksum = (checkDigit === 'X')?(10):(parseInt(checkDigit));
  return checksum === (sum % 11);
}
/**
 * @name validateISBN13 validate ISBN with length 13
 * @param {string} isbn 
 * @returns {boolean}
 */
const validateISBN13 = (isbn) => {
  isbn = isbn.replace(/[\ |-]/g, ''); // Remove hyphens and spaces
  let sum = 0;
  for (let i = 0; i < 12; i++) 
    sum += parseInt(isbn[i]) * (i % 2 === 0 ? 1 : 3);
  let checksum = 10 - (sum % 10);
  if (checksum === 10) checksum = 0;
  return checksum === parseInt(isbn[12]);
}
/**
 * @name ISBN_Validator validates all ISBNs
 * @param {string} isbn 
 * @returns {boolean}
 */
const ISBN_Validator = (isbn) => {
  const isbn10Regex = /^(?:\d[\ |-]?){9}[\d|X]$/;
  const isbn13Regex = /^(?:\d[\ |-]?){13}$/;
  if (isbn10Regex.test(isbn)) 
    return validateISBN10(isbn);
  else if (isbn13Regex.test(isbn)) 
    return validateISBN13(isbn);
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
const BookCopyModel = mongoose.model('book_copy_models',bookSchema);
export default {bookSchema,BookModel,bookCopySchema,BookCopyModel};