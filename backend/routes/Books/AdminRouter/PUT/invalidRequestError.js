import BookCopyValidator from "../../../../validator/BookCopyValidator.js";

/**
 * @name invalidRequestError
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 * @returns {void}
 */
const invalidRequestError = async (request, response, next) => {
  try {
    BookCopyValidator.parse(request.body);
    next();
  } catch (e) {
    response.status(401).json({ err: e.message });
  }
}
export default invalidRequestError;