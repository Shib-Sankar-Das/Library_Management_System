import { z } from "zod";
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
const ISBN = z.strictObject({
  ISBN:z.string({required_error:"ISBN required"}).min(10).max(13).refine(ISBN_Validator,{message:"invalid ISBN"}),
})
export default ISBN;