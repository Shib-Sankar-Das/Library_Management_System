"use strict";
import express from "express"
import BorrowBook from "./BorrowBook/index.js";
import ViewBooks from "./Books/index.js";
import ImageRouter from "./Images/index.js";
import UserRouter from "./User/index.js";
import AdminRouter from "./Admin/index.js";
const Router = express.Router();
Router.use(
  '/api',
  UserRouter,
  BorrowBook,
  ViewBooks,
  ImageRouter,
  AdminRouter
);

export default Router;