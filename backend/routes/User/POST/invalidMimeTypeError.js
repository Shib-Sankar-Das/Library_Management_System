import express from "express";
/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */
const invalidMimeTypeError = async (request,response,next) => {
  try{
    const file = Array.isArray(request.files.Avatar)?(request.files.Avatar[0]):(request.files.Avatar);
    if(file.mimetype !="image/jpeg") throw new Error("invalid mimetype for user avatar");
    next();
  }catch(e){
    response.status(415).json({err:e.message});
  }

}
export default invalidMimeTypeError;