import express from "express";
import ClientValidator from "../../../validator/ClientValidator.js";
/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 * @param {express.NextFunction} next
 */
const invalidCredentialError = async (request,response,next) => {
  try{
    const user = request.query;
    request.query = ClientValidator.UserLoginSchema.parse(user);
    next();
  }catch(e){
    response.json({err:e.message});
  }
}
export default invalidCredentialError;