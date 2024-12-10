import model from './../../../models/index.js'
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */

const updateProfilePicture = async (request, response, next) => {
  try{
    // console.log("updateProfilePicture");
    /**
     * @type {import("express-fileupload").UploadedFile}
     */
    let profile = request.files.Avatar;
    await model.Models.AdminModel.findByIdAndUpdate(
      request.body._id,
      {Avatar:profile.data}
    );
    request.body['Image'] = 'http://localhost:4000/api/image/admin/'+request.body['_id']+".jpeg";
    next();
  }catch(e){
    response.status(401).send({"message":e.message});
  }
}
export default updateProfilePicture;