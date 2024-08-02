import models from './../../../models/index.js'
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response
 */
const endPoint = async (request, response) => {
  const doc = JSON.parse( JSON.stringify ( await (new models.Models.BorrowModel(request.body)).save()));
  response.status(200).json(doc);
}
export default endPoint;