import  {z} from "zod";
export const BookCopyId = z.object({
  _id:z.string({required_error:"_id is required"}).length(24)
});
export const BookCopyIdArray = z.array(BookCopyId); 