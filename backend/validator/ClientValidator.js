import {z} from "zod"
/**
 * @typedef UserObject
 * @property {z.ZodString} Name
 * @property {z.ZodString} Email
 * @property {z.ZodString} Password 
 */
/**
 * @description it is only all text fields (like name email password) validation.
 * @type {z.ZodObject<UserObject>}
 */
const clientAuthenticationSchema = z.object({
  Name:z.string("name field is required").minLength(4,"minimum mame length should be 4"),
  Email:z.string("Email field is required").email("not a valid email"),
  Password:z.string().minLength(8,"Password must be 8 charecter long").regex(/^[\x21-\x7E]{8}$/,"password must exclude space and non ASCII charecters")
});
export default clientAuthenticationSchema