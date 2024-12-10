import models from "../../../models/index.js";
/**
 * @name invalidUserIdError
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */
const invalidUserIdError = async (request,response,next) => {
  try{
    const doc = await models.Models.UserModel.findById(request.body.UserID);
    if (doc == null) throw new Error("Invalid user id.");
    next();
  }catch(e){
    response.status(400).json({err:e.message});
  }
}
export default invalidUserIdError;