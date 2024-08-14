import model from './../../../models/index.js'
import ClientUpdate from "./../../../validator/ClientUpdateRequestValidator.js"
import {z} from "zod";
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */

const updateTextFields = async (request, response, next) => {
  try{
    /**
     * @type {z.infer<typeof ClientUpdate>}
     */
    let data = request.body;
    ClientUpdate.parse(data);
    const {_id} = data;
    delete data._id;
    request.body = await model.Models.UserModel.findByIdAndUpdate(_id,data,{new:true});
    if(request.files?.Avatar)
      next();
    else
      response.status(200).json(data);
  }catch(e){
    response.status(401).send({"message":e.message});
  }
}
export default updateTextFields;