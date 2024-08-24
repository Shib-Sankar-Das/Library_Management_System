import express from 'express';
import fs from 'fs';
// import mongoose from 'mongoose';
import models from './../../models/index.js';
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const AdminAvatar = async (req, res) => {
  try{
    let admin_id = req.params.admin_id.split(".").shift();
    const { Avatar } = JSON.parse(JSON.stringify(await models.Models.AdminModel.findOne({ _id: admin_id })));
    if(Avatar==null) throw new Error();
    res.send(Buffer.from(Avatar.data));
  }catch(e){
    res.send(fs.readFileSync('./assets/not-admin.svg'));
  }
}
export default AdminAvatar; 