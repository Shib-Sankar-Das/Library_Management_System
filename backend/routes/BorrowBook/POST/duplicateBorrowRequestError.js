import models from "../../../models/index.js";
/**
 * @name duplicateBorrowRequestError
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */
const duplicateBorrowRequestError = async (request,response,next) => {
  try{
    const doc = await models.Models.BorrowModel.findOne({UserID:request.body.UserID,ISBN:request.body.ISBN});
    // console.log(doc)
    if (doc != null) throw new Error("Duplicate borrow request.");
    next();
  }catch(e){
    // console.log("ln14")
    response.status(400).json({err:e.message});
  }
}
export default duplicateBorrowRequestError;