import express from "express";
import path from "path";
import dotenv from "dotenv";
import { connect } from "mongoose";
import expressFileUpload from 'express-fileupload';
import routes from "./routes/index.js";
import models from "./models/index.js";
import fs from 'fs';
try {
  console.clear();
  dotenv.config();
  connect(process.env.DATABASE_URL);

  const APP = express();
  APP.use(express.json());
  APP.use(express.urlencoded({ extended: true }));
  APP.use(expressFileUpload({
    limits: {
      fileSize: 40 * 1024
    }
  }));
  APP.set('view engine', 'ejs');
  APP.set('views', path.resolve('./views'));

  APP.get('/api/' + routes.ViewBooks.routeName + '/:Subject', routes.ViewBooks.GET.endPoint);
  /**
   * this route provides the cover page links
   */
  APP.get('/api/covers/:id', async (req, res) => {
    try{
      const { CoverPage } = JSON.parse(JSON.stringify(await models.Models.BookCopyModel.findOne({ _id: req.params.id })));
      if(CoverPage==null) throw new Error();
      res.send(Buffer.from(CoverPage.data));
    }catch(e){
      res.send(fs.readFileSync('./test/empty.jpg'));
    }
  })
  APP.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
  })
} catch (e) {
  console.log(e.message);
}