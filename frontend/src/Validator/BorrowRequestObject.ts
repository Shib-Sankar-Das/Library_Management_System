import {z} from "zod"
/**
 * @name ISBN_Validator validates all ISBNs
 * @param {string} isbn 
 * @returns {boolean}
 */
const ISBN_Validator = (isbn:string) => {
  const x:number =  parseInt(isbn)
  if (isbn.length==10 && (typeof x == "number")) 
    return true;
  else if (isbn.length==13 && (typeof x == "number")) 
    return true;
  else 
    return false;
}


const BorrowRequestValidator= z.object({
  BorrowDate:z.string().datetime().optional(),
  RenewalDate:z.string({required_error:'renewal date is required'}).datetime(),
  UserName:z.string({required_error:'User name is required'}).min(4,'too short name').max(50,'too long name'),
  UserEmail:z.string({required_error:"Email field is required"}).email("not a valid email"),
  BookName:z.string({required_error:'Book name is required'}),
  UserID:z.string({required_error:'UserID required'}).length(24),
  ISBN:z.string({required_error:'ISBN required'}).min(10).max(13).refine(ISBN_Validator,{message:'not a valid ISBN'})
});
export default BorrowRequestValidator;