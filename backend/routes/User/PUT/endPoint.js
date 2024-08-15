import model from './../../../models/index.js'
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */

const endPoint = async (request, response) => {
  let data = {...request.body};
  delete data["_id"];
  response.status(200).json(data);
}
export default endPoint;