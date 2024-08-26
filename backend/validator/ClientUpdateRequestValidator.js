import { z } from "zod";
const ClientUpdate = z.strictObject({
  _id:z.string().length(24),
  Name:z.string().optional(),
  Email:z.string().email("not a valid email").optional(),
  Password:z.string().min(8,'must contain minimum 8 char').regex(/^[\x21-\x7E]{8,}$/,"password must exclude space and non ASCII charecters").optional()
});
export default ClientUpdate;