import mongoose from "mongoose";
/**
 * @typedef AccessionStatus
 * @property {mongoose.Schema.ObjectId} ID
 * @property {Boolean} Borrowed
 */
/**
 * @typedef {BookObject}
 * @property {string} Name
 * @property {string} Author
 * @property {string} ISBN
 * @property {Date} PublishingDate
 * @property {string} Publisher
 * @property {string} Subject
 * @property {AccessionStatus[]} AccessionIDs
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
const BookSchema = new mongoose.Schema({
  ISBN:{
    type:String,
    minlength:10,
    maxlength:13,
    unique:true,
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
  AccessionIDs:[{
    ID:{
      type:mongoose.Schema.ObjectId,
      required:true
    },
    Borrowed:{
      type:Boolean,
      required:true
    }
  }]
});
/**
 * @type {mongoose.model<BookObject>}
 */
const bookModel = mongoose.model('book_models',BookSchema);
export default {BookSchema,bookModel};