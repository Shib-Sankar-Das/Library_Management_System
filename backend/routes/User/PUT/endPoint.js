import model from './../../../models/index.js'
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */

const endPoint = async (request, response) => {
  response.status(200).json(request.body);
}
export default endPoint;