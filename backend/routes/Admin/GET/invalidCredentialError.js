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
    //using same validator;
    request.query = ClientValidator.UserSignUpSchema.parse(user);
    next();
  }catch(e){
    response.status(400).json({err:e.message});
  }
}
export default invalidCredentialError;