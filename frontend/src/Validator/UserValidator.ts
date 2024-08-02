import {z} from 'zod';
const UserValidator = z.object({
  Name:z.string({required_error:'name not fond'}),
  Email:z.string({required_error:'Email not found'}).email({message:"invalid email id"}),
  Image:z.string({required_error:"image url not found"}),
  _id:z.string({required_error:"id not found"}).length(24,'insufficient length')
});
export default UserValidator;