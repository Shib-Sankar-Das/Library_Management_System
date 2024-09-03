import models from "./../../../../models/index.js";
/**
 * @name updateBorrowDetails
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 * @returns {void}
 */
const updateBorrowDetails = async (request, response, next) => {
  try {
    const data = { ...request.body };
    let DATE = new Date();
    DATE.setMonth(DATE.getMonth() + 1);
    const updated = await models.Models.BorrowModel.findByIdAndUpdate(data.BorrowId,{Approved:true,BorrowDate:new Date(),RenewalDate:DATE,BookID:data._id},{new:true});
    const updateCopy = await models.Models.BookModel.findByIdAndUpdate(data._id,{Borrowed:true},{new:true});
    request.body = {updated};
    next();
  } catch (e) {
    response.status(401).json({ err: e.message });
  }
}
export default updateBorrowDetails;