import express from "express";
/**
 * @name invalidMimeTypeError
 * @param {express.Request} request 
 * @param {express.Response} response 
 * @param {express.NextFunction} next 
 */
const invalidMimeTypeError = async (request,response,next) => {
  try{
    const file = Array.isArray(request.files.CoverPage)?(request.files.Avatar[0]):(request.files.CoverPage);
    if(file.mimetype !="image/jpeg") throw new Error("invalid mimetype for user avatar");
    next();
  }catch(e){
    response.status(415).json({err:e.message});
  }

}
export default invalidMimeTypeError;