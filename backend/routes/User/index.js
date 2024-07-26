"use strict";
import express from 'express'
import postDuplicateCredentialError from "./POST/duplicateCredentialError.js";
import postInvalidMimeTypeError from "./POST/invalidMimeTypeError.js";
import postInvalidCredentialError from "./POST/invalidCredentialError.js";
import postEndPoint from "./POST/endPoint.js";
import getInvalidCredentialError from "./GET/invalidCredentialError.js"
import getUserNotFound from "./GET/userNotFoundError.js"
import getInvalidCookiesError from "./GET/invalidCookiesError.js"
import getEndPoint from "./GET/endPoint.js"
const UserRouter = express.Router()
/*
  get -> login
  post -> signup
  put -> update credential
  delete -> delete user account
 */
UserRouter.route("/user")
  .get(
    getInvalidCookiesError,
    getInvalidCredentialError,
    getUserNotFound,
    getEndPoint
  )
  .post(
    postInvalidCredentialError,
    postInvalidMimeTypeError,
    postDuplicateCredentialError,
    postEndPoint
  );
  // .put(

  // )
  // .delete(

  // );
export default UserRouter;