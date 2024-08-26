/**
 * @name endPoint
 * @param {import('express').Request} request 
 * @param {import('express').Response} response 
 */
const endPoint = (request,response)=>{
  response.status(200).json(request.query);
}
export default endPoint;