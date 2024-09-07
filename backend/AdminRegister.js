import mongoose from "mongoose";
import Admin from "./../models/Admin.js";
import fs from 'fs';
await mongoose.connect("mongodb://127.0.0.1:27017/library");
const ADMIN_NAME = "", ADMIN_EMAIL = "", ADMIN_PASSWORD = "", ADMIN_IMAGE_PATH = "";
/**
 * @type {import("./../models/Admin.js").AdminObject}
 */
(
  new Admin.AdminModel({
    Name: ADMIN_NAME,
    Email: ADMIN_EMAIL,
    Password: ADMIN_PASSWORD,
    Avatar: fs.readFileSync(ADMIN_IMAGE_PATH)
  })
)
  .save()
  .then((value) => {
    console.table(value)
  });