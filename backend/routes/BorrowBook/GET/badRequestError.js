import JWT from 'jsonwebtoken';
import model from './../../../models/index.js'
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */
const badRequestError = async (request,response,next) => {
  try{
    if(Object.entries(request.query).length!=0) {
      throw new Error ("Bad request, query must be empty.");
    }else next();
  }catch(e){
    response.status(400).json({err:e.message});
  }
}
export default badRequestError;