import { z } from 'zod';
const ID = z.strictObject({
  _id: z.string({ required_error: "_id is required" }).length(24)
});
/**
 * @name invalidRequestError
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 * @param {import('express').NextFunction} next
 */
const invalidRequestError = (request,response,next) => {
  try {
    // console.log(request.body,request.query);
    ID.parse(request.body);
    next();
  } catch (e) {
    response.status(400).json({err:e.message});
  }
};
export default invalidRequestError;