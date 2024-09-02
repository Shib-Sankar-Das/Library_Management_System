import ISBN from "../../../../validator/__ISBN__.js";
/**
 * @name invalidRequestError
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 * @returns {void}
 */
const invalidRequestError = async (request, response, next) => {
  try {
    const query = { ...request.query };
    ISBN.parse(query);
    next();
  } catch (e) {
    response.status(400).json({ err: e.message });
  }
}
export default invalidRequestError;