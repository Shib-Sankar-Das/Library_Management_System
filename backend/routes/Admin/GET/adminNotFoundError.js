import bcrypt from 'bcrypt';
import model from '../../../models/index.js'
/**
 * @name userNotFoundError
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */
const adminNotFoundError = async (request,response,next) => {
  try{
    let doc = JSON.parse(JSON.stringify(await model.Models.AdminModel.findOne({Email:request.query.Email})));
    if(!doc) throw new Error("admin not found");
    else if(!bcrypt.compareSync(request.query.Password,doc.Password)) throw new Error("Wrong Email or Password");
    else {
      delete doc["Avatar"];
      delete doc['__v'];
      delete doc['Password'];
      doc['Image'] = '/api/image/admin/'+doc['_id']+'.jpeg';
      request.query = doc;
      next();
    }
  }catch(e){
    response.status(404).json({err:e.message});
  }
}
export default adminNotFoundError;