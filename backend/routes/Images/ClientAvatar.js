import express from 'express';
import fs from 'fs';
import mongoose from 'mongoose';
import models from '../../models/index.js';
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const ClientAvatar = async (req, res) => {
  try{
    let client_id = req.params.client_id.split(".").shift();
    const { Avatar } = JSON.parse(JSON.stringify(await models.Models.UserModel.findOne({ _id: client_id })));
    if(Avatar==null) throw new Error();
    res.send(Buffer.from(Avatar.data,"base64url"));
  }catch(e){
    console.log(e);
    res.send(fs.readFileSync('./assets/not-found.svg'));
  }
}
export default ClientAvatar; 