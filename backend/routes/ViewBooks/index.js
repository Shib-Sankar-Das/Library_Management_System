import express from "express"
import GetEndPoint from "./GET/endPoint.js";
import covers from "./GET/covers.js";
export default {
  routeName:"view-book",
  GET:{
    endPoint:GetEndPoint,
    covers:covers
  },
  POST:{},
  PUT:{},
  PATCH:{},
  DELETE:{}
};