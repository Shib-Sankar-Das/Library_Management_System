import JWT from 'jsonwebtoken';
import model from './../../../models/index.js'
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */
const invalidCookiesError = async (request,response,next) => {
  try{
    if(!request.query) next();
    else{
      const {_id} = JWT.decode(request.cookies._id,process.env.JWT_KEY);
      if(_id==null) throw new Error('User not logged in');
      else{
        const doc = JSON.parse(JSON.stringify(await model.Models.UserModel.findOne({"_id":_id})));
        if(doc){
          const TenYearsFromNow = new Date();
          TenYearsFromNow.setFullYear(TenYearsFromNow.getFullYear() + 10);
          response.cookie('_id',JWT.sign({"_id":_id},process.env.JWT_KEY),{
            httpOnly:true,
            expires:TenYearsFromNow
          });
          delete doc.__v;
          delete doc.Avatar;
          delete doc.Password;
          doc['Image'] = '/api/image/client/'+doc['_id'];
          delete doc._id;
          response.send(doc);
        }
      }
    }
  }catch(e){
    response.json({err:e.message});
  }
}
export default invalidCookiesError;