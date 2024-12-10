import JWT from "jsonwebtoken";
import model from "../../../../models/index.js";
/**
 * @name invalidCookiesError
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 * @returns {void}
 */
const invalidCookiesError = async (request, response, next) => {
  try {
    const { _id } = JWT.decode(request.cookies._id, process.env.JWT_KEY);
    if (_id == null) throw new Error("Admin not logged in");
    else {
      const doc = await model.Models.AdminModel.findById(_id);
      if (doc !== null) next();
      else throw new Error("Invalid cookies");
    }
  } catch (e) {
    response.status(401).json({ err: e.message });
  }
}
export default invalidCookiesError;