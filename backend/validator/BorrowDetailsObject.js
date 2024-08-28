import { z } from 'zod';
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
export const BorrowRequest = z.strictObject({
  _id: z.string().length(24),
  BorrowDate: z.union([z.string().datetime(), z.null()]),
  RenewalDate: z.union([z.string().datetime(), z.null()]),
  BookID: z.union([z.string().length(24), z.null()]),
  BookName: z.string({required_error:'Book name is required'}).min(4),
  ISBN:z.string({required_error:'ISBN required'}).min(10).max(13).refine(ISBN_Validator,{message:'not a valid ISBN'}),
  Approved: z.boolean(),
  BookImage: z.string().url(),
});
export const BorrowRequestArray = z.array(BorrowRequest);
export const BorrowDetails = z.strictObject({
  User: z.strictObject({
    _id: z.string().length(24),
    Name: z.string({required_error:'User name is required'}).min(4,'min length should be 4').max(50,'max length is 50'),
    Email: z.string({required_error:"Email field is required"}).email("not a valid email"),
    Avatar: z.string().url(),
  }),
  BorrowRequests: BorrowRequestArray
});
export const BorrowDetailsArray = z.array(BorrowDetails);