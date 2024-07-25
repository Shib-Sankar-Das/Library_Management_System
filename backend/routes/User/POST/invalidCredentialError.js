import express from "express";
import CV from "../../../validator/ClientValidator.js"
/**
 * 
 * @param {express.Request} request 
 * @param {express.response} response 
 * @param {express.NextFunction} next
 */
const invalidCredentialError = async (request,response,next) => {
  try{
    let userData = CV.parse(request.body);
    request.body = userData;
    next();
  }catch(e){
    response.json({err:e.message});
  }

}
export default invalidCredentialError;