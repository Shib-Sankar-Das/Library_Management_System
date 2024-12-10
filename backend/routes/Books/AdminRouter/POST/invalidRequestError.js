import model from "../../../../models/index.js";
import { UploadBook } from "../../../../validator/BookValidator.js";
/**
 * @name invalidRequesrError
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 * @returns {void}
 */
const invalidRequesrError = async (request, response, next) => {
  try {
    request.body = {...request.body,Copies : parseInt(request.body.Copies)}
    UploadBook.parse(request.body);
    next();
  } catch (e) {
    response.status(400).json({ err: e.message });
  }
}
export default invalidRequesrError;