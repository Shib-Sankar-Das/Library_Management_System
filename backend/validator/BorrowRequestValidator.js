import {z} from "zod"
/**
 * @name ISBN_Validator validates all ISBNs
 * @param {string} isbn 
 * @returns {boolean}
 */
const ISBN_Validator = (isbn) => {
  let x =  parseInt(isbn)
  if (isbn.length==10 && (!Number.isNaN(x))) 
    return true;
  else if (isbn.length==13 && (!Number.isNaN(x))) 
    return true;
  else 
    return false;
}
/**
 * @typedef BorrowRequestObject
 * @property {z.ZodString} [BorrowDate]
 * @property {z.ZodString} [RenewalDate]
 * @property {z.ZodString} UserName
 * @property {z.ZodString} UserEmail
 * @property {z.ZodString} BookName
 * @property {mongoose.Schema.ObjectId} UserID
 * @property {z.ZodString} ISBN
 */

const BorrowRequestValidator= z.strictObject({
  UserName:z.string({required_error:'User name is required'}).min(4,'min length should be 4').max(50,'max length is 50'),
  UserEmail:z.string({required_error:"Email field is required"}).email("not a valid email"),
  UserID:z.string({required_error:'UserID required'}).length(24),
  BookName:z.string({required_error:'Book name is required'}).min(4),
  ISBN:z.string({required_error:'ISBN required'}).min(10).max(13).refine(ISBN_Validator,{message:'not a valid ISBN'}),
});
export default BorrowRequestValidator;