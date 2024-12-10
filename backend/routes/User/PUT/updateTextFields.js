import model from './../../../models/index.js'
import ClientUpdate from "./../../../validator/ClientUpdateRequestValidator.js"
import {z} from "zod";
import bcrypt from "bcrypt";
/**
 * @name updateTextFields
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */

const updateTextFields = async (request, response, next) => {
  // console.log('updateTextFields');
  try{
    /**
     * @type {z.infer<typeof ClientUpdate>}
     */
    let data = {...request.body};
    ClientUpdate.parse(data);
    const {_id} = data;
    delete data._id;
    if(Object.entries(data).length){
      if(data["Password"]){
        // console.log('updatingPasswordInTextFields');
        data["Password"] = bcrypt.hashSync(data["Password"], bcrypt.genSaltSync(8));
      }
      const updatedData = await model.Models.UserModel.findByIdAndUpdate(_id,data,{new:true});
      request.body = {"Name":updatedData.Name,"Email":updatedData.Email,"_id":_id};
      await model.Models.BorrowModel.updateMany({UserID:request.body._id},{UserName:updatedData.Name,UserEmail:updatedData.Email});
      if(request.files?.Avatar) next();
      else  response.status(200).json({Name:updatedData.Name,Email:updatedData.Email});
    }
    if(request.files?.Avatar) next();
  }catch(e){
    response.status(401).send({"message":e.message});
  }
}
export default updateTextFields;