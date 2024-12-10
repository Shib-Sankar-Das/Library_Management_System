import BorrowRequestValidator from './../../../validator/BorrowRequestValidator.js';
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */
const invalidRequestError = async (request,response,next) => {
  try{
    BorrowRequestValidator.parse(request.body);
    next();
  }catch(e){
    response.status(400).json({err:e.message});
  }
}
export default invalidRequestError;