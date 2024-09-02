import model from "../../../../models/index.js";
/**
 * @name getBookData
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 * @returns {void}
 */
const getBookData = async (request, response, next) => {
  try {
    let data = await model.Models.BookModel.find({ ISBN: request.query.ISBN, Borrowed: false }).select("-__v");
    data = JSON.parse(JSON.stringify(data));
    request.query = data;
    next();
  } catch (e) {
    response.status(401).json({ err: e.message });
  }
}
export default getBookData;