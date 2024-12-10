import JWT from 'jsonwebtoken';
import model from './../../../models/index.js'
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */

const invalidCookiesError = async (request, response, next) => {
  try{
    // console.log('invalidCookiesError');
    const { _id } = JWT.decode(request.cookies._id, process.env.JWT_KEY);
    if (_id == null) throw new Error('User not logged in');
    else {
      const doc = JSON.parse(JSON.stringify(await model.Models.UserModel.findOne({ "_id": _id })));
      if (doc){
        request.body._id = doc._id;
        next();
      }  
      else throw new Error("Invalid cookies");
    }
  }catch(e){
    response.status(401).send({"message":e.message});
  }
}
export default invalidCookiesError;