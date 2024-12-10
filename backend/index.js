"use strict";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connect } from "mongoose";
import expressFileUpload from 'express-fileupload';
import routes from "./routes/index.js";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
try {
  console.clear();
  dotenv.config();

  await connect(process.env.DATABASE_URL);

  const APP = express();

  APP.use(express.json());
  APP.use(cookieParser());
  APP.use(express.urlencoded({ extended: true }));
  APP.use(express.static(path.join(__dirname, 'assets')));
  APP.use(expressFileUpload({
    limits: {
      fileSize: 40 * 1024
    },
    abortOnLimit: true
  }));
  APP.use('/', routes);

  APP.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
  });
} catch (e) {
  console.log(e.message);
}