import express from "express";
import JWT from "jsonwebtoken"
/**
 * @description end point of client registration
 * @param {express.Request} request 
 * @param {express.Response} response 
 */
const endPoint = async (request,response) => {
  const USER_HTTP_TOKEN = JWT.sign({_id:request.body._id},process.env.JWT_KEY);
  const TenYearsFromNow = new Date();
  TenYearsFromNow.setFullYear(TenYearsFromNow.getFullYear() + 10);
  response.cookie('_id',USER_HTTP_TOKEN,{
    httpOnly:true,
    expires:TenYearsFromNow
  });
  response.json(request.body);
}
export default endPoint;