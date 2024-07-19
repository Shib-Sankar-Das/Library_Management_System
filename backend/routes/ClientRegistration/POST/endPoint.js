import express from "express";
import CV from "../../../validator/ClientValidator.js"
import efu from "express-fileupload"
/**
 * 
 * @param {express.Request} request 
 * @param {express.response} response 
 */
const endPoint = async (request,response) => {
  delete request.body.__v;
  response.json(request.body);
}
export default endPoint;