import {z} from "zod";
const BookCopyValidator = z.object({
  _id:z.string().length(24),
  BorrowId:z.string().length(24),
});
export default BookCopyValidator;