import {z} from "zod"
const ISBN_Validator = (isbn:string) => {
  const x:number =  parseInt(isbn)
  if (isbn.length==10 && (!Number.isNaN(x))) 
    return true;
  else if (isbn.length==13 && (!Number.isNaN(x))) 
    return true;
  else 
    return false;
}


const BorrowRequestValidator= z.object({
  UserName:z.string({required_error:'User name is required'}).min(4,'too short name').max(50,'too long name'),
  UserEmail:z.string({required_error:"Email field is required"}).email("not a valid email"),
  UserID:z.string({required_error:'UserID required'}).length(24),
  BookName:z.string({required_error:'Book name is required'}),
  ISBN:z.string({required_error:'ISBN required'}).min(10).max(13).refine(ISBN_Validator,{message:'not a valid ISBN'}),
});
export default BorrowRequestValidator;