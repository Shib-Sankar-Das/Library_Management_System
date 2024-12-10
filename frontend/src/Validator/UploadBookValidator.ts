/**
 * @typedef BookCopyObject
 * @property {string} Name
 * @property {string} Author
 * @property {string} ISBN
 * @property {Date} PublishingDate
 * @property {string} Publisher
 * @property {string} Subject
 * @property {Number} Copies 
 * @property {Buffer} CoverPage 
 */

import {z} from "zod";
const ISBN_Validator = (isbn:string):boolean => {
  let x =  parseInt(isbn)
  if (isbn.length==10 && (!Number.isNaN(x))) 
    return true;
  else if (isbn.length==13 && (!Number.isNaN(x))) 
    return true;
  else 
    return false;
}
export const UploadBook = z.object({
  Name:z.string({required_error:"Name is required."}).min(4,"min length must be 4"),
  ISBN:z.string({required_error:'ISBN required.'}).min(10).max(13).refine(ISBN_Validator,{message:'not a valid ISBN'}),
  Author:z.string({required_error:"Author name is required."}).min(4,'min length must be 4'),
  PublishingDate:z.string({required_error:"publishing date is required."}).date(),
  Publisher:z.string({required_error:"publisher is required"}).min(4),
  Subject:z.string({required_error:"Subject is required"}).min(2),
  Copies:z.number({required_error:"copies is required"}).int()
});