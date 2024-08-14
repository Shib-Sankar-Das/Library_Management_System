import model from './../../../models/index.js'
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */

const updateProfilePicture = async (request, response, next) => {
  try{
    /**
     * @type {import("express-fileupload").UploadedFile}
     */
    let profile = request.files.Avatar;
    await model.Models.UserModel.findByIdAndUpdate(request.body._id,{Avatar:profile.data});
    request.body['Image'] = '/api/image/'+request.body['_id'];
    next();
  }catch(e){
    response.status(401).send({"message":e.message});
  }
}
export default updateProfilePicture;