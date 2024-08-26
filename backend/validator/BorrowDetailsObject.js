import { z } from 'zod';
export const BorrowDetailsObject = z.strictObject({
  _id: z.string().length(24),
  BorrowDate:z.union([z.string().datetime(),z.null()]),
  RenewalDate:z.union([z.string().datetime(),z.null()]),
  UserID: z.string().length(24),
  UserName: z.string(),
  UserEmail: z.string().email('not a valid email'),
  UserImage: z.string().url(),
  BookID: z.union([z.string().length(24),z.null()]),
  BookName: z.string(),
  Approved:z.boolean(),
  ISBN: z.string(),
  BookImage:z.string().url(),
});
export const BorrowDetailsModel = z.array(BorrowDetailsObject);
export const BorrowDetails = z.array(z.strictObject({
  UserImage:z.string().url(),
  Data:BorrowDetailsModel
}));