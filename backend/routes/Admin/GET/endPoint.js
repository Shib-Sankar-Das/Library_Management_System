import JWT from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import model from './../../../models/index.js'
/**
 * @name endPoint
 * @param {import("express").Request} request 
 * @param {import("express").Response} response
 */
const endPoint = async (request, response) => {
  try {
    const ADMIN_HTTP_TOKEN = JWT.sign({ _id: request.query._id }, process.env.JWT_KEY);
    const TenYearsFromNow = new Date();
    TenYearsFromNow.setFullYear(TenYearsFromNow.getFullYear() + 10);
    response.cookie('_id', ADMIN_HTTP_TOKEN, { httpOnly: true, expires: TenYearsFromNow });
    response.status(200).send(request.query);
  } catch (e) {
    response.status(500).json({ err: e.message });
  }
}
export default endPoint;