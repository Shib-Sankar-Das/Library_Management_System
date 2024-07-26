"use strict";
import express from "express";
import CoverPages from "./CoverPages.js";
import ClientAvatar from "./ClientAvatar.js";
import AdminAvatar from "./AdminAvatar.js";
const ImageRouter = express.Router();

ImageRouter.get('/image/book/:book_copy_id',CoverPages);
ImageRouter.get('/image/client/:client_id',ClientAvatar);
ImageRouter.get('/image/admin/:admin_id',AdminAvatar);

export default ImageRouter;