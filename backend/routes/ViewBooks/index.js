import express from "express"
import GetEndPoint from "./GET/endPoint.js";
export default {
  routeName:"view-book",
  GET:{
    endPoint:GetEndPoint
  },
  POST:{},
  PUT:{},
  PATCH:{},
  DELETE:{}
};