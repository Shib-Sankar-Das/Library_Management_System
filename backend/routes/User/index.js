"use strict";
import express from 'express'
import POST from './POST/methods.js';
import GET from "./GET/methods.js"
const UserRouter = express.Router()
/*
  get -> login
  post -> signup
  put -> update credential
  delete -> delete user account
 */
UserRouter.route("/user")
  .get(
    GET.invalidCookiesError,
    GET.invalidCredentialError,
    GET.userNotFoundError,
    GET.endPoint
  )
  .post(
    POST.invalidCredentialError,
    POST.invalidMimeTypeError,
    POST.duplicateCredentialError,
    POST.endPoint
  );
  // .put(

  // )
  // .delete(

  // );
export default UserRouter;