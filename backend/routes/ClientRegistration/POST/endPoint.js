import express from "express";

/**
 * 
 * @param {express.Request} request 
 * @param {express.response} response 
 */
const endPoint = async (request,response) => {
  delete request.body.Password;
  response.json(request.body);
}
export default endPoint;