import {z} from 'zod';
export const bookCopySchema = z.object({
  _id: z.string(),
  Name: z.string(),
  Author: z.string(),
  ISBN: z.string(),
  PublishingDate: z.string().datetime(),
  Publisher: z.string(),
  Subject: z.string(),
  Copies: z.number(),
  ImageLink: z.string().url(),
});
export const BookCopyModel = z.array(bookCopySchema);