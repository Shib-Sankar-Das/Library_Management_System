import express from "express";
import mongoose from "mongoose";
import models from "../../../models/index.js"
/**
 * 
 * @param {express.Request} request 
 * @param {express.response} response 
 * @param {express.NextFunction} next
 */
const duplicateCredentialError = async (request,response,next) => {
  try{
    const user = new models.Models.UserModel({...request.body,Avatar:request.files.data});
    request.body = JSON.parse(JSON.stringify(await user.save()));
    delete request.body.Avatar;
    next();
  }catch(e){
    response.json({err:e.message});
  }

}
export default duplicateCredentialError;