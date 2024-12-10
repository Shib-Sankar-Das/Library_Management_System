import bcrypt from 'bcrypt';
import model from './../../../models/index.js'
/**
 * @name userNotFoundError
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */
const userNotFoundError = async (request,response,next) => {
  try{
    let doc = await model.Models.UserModel.findOne({Email:request.query.Email}).select(['Name','Email','Password']);
    // console.log(doc);
    doc = JSON.parse(JSON.stringify(doc));
    // console.log(doc);
    if(!doc) throw new Error("User not found");
    else if(!bcrypt.compareSync(request.query.Password,doc.Password)) throw new Error("Wrong Email or Password");
    else {
      delete doc['Password'];
      doc['Image'] = 'http://localhost:4000/api/image/client/'+doc['_id']+'.jpeg';
      request.query = doc;
      next();
    }
  }catch(e){
    response.status(404).json({err:e.message});
  }
}
export default userNotFoundError;