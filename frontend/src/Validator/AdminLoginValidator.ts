import {z} from 'zod';
export const AdminLoginValidator = z.object({
  Name:z.string({required_error:"name field is required"}).min(4,"minimum mame length should be 4"),
  Email:z.string({required_error:"email field is required"}).email("not a valid email"),
  Password:z.string({required_error:"password field is required"}).min(8,"Password must be 8 charecter long").regex(/^[\x21-\x7E]{8,}$/,"password must exclude space and non ASCII charecters")
});