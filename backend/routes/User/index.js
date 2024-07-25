"use strict";
import express from 'express'
import postDuplicateCredentialError from "./POST/duplicateCredentialError.js";
import postInvalidMimeTypeError from "./POST/invalidMimeTypeError.js";
import postInvalidCredentialError from "./POST/invalidCredentialError.js";
import postEndPoint from "./POST/endPoint.js";
const UserRouter = express.Router()
/*
  get -> login
  post -> signup
  put -> update credential
  delete -> delete user account
 */
UserRouter.route("/user")
  .get(

  )
  .post(
    postInvalidCredentialError,
    postInvalidMimeTypeError,
    postDuplicateCredentialError,
    postEndPoint
  )
  .put(

  )
  .delete(

  );
export default UserRouter;