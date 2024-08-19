import express from 'express';
import fs from 'fs';
// import mongoose from 'mongoose';
import models from '../../models/index.js';
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const ClientAvatar = async (req, res) => {
  try{
    /**
     * await import('mongoose')
     */
    const { Avatar } = JSON.parse(JSON.stringify(await models.Models.UserModel.findOne({ _id: req.params.client_id })));
    if(Avatar==null) throw new Error();
    res.send(Buffer.from(Avatar.data));
  }catch(e){
    res.send(fs.readFileSync('./assets/not-found.svg'));
  }
}
export default ClientAvatar; 