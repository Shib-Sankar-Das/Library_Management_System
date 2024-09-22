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
    const doc = await models.Models.BorrowModel.findById(data.BorrowId);
    const doc_2 = await models.Models.BookModel.findById(data._id);
    if (doc == null || doc_2 == null) throw new Error("Invalid request");
    const updated = await models.Models.BorrowModel.findByIdAndUpdate(data.BorrowId,{Approved:true,BorrowDate:new Date(),RenewalDate:DATE,BookID:data._id},{new:true});
    const updateCopy = await models.Models.BookModel.findByIdAndUpdate(data._id,{Borrowed:true},{new:true});
    const Data = JSON.parse(JSON.stringify(updated));
    delete Data["UserEmail"];
    delete Data["UserID"];
    delete Data["UserName"];
    delete Data["__v"];
    request.body = Data;
    next();
  } catch (e) {
    response.status(401).json({ err: e.message });
  }
}
export default updateBorrowDetails;