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
    if(Object.entries(request.query).length) next();
    else{
      const {_id} = JWT.decode(request.cookies._id,process.env.JWT_KEY);
      if(_id==null) throw new Error('Admin not logged in');
      else{
        const doc = JSON.parse(JSON.stringify(await model.Models.AdminModel.findOne({"_id":_id})));
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
          doc['Image'] = '/api/image/admin/'+doc['_id'];
          response.send(doc);
        }
        else {
          throw  new Error("Invalid cookies");
        }
      }
    }
  }catch(e){
    response.status(401).json({err:e.message});
  }
}
export default invalidCookiesError;