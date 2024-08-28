import React from "react";
import { z } from "zod";
import { BorrowDetails } from "../../Validator/BorrowDetailsValidator";
import ArrowLinkIcon from "../Icon/ArrowLinkIcon";
interface props {
  data: z.infer<typeof BorrowDetails>
}
const BorrowAdminViewer: React.FC<props> = ({ data }) => {
  return (
    <div className=" bg-blue-950 card w-80 shadow-xl m-2 hover:scale-[0.8]">
      <div className="avatar items-center justify-center">
        <div className="w-24 rounded-full">
          <img src={data.User.Avatar} />
        </div>
      </div>
      <div className="card-body items-center text-center p-1">
        <h2 className="card-title">{data.User.Name}</h2>
        <p className="text-ellipsis overflow-hidden w-[100%]">{data.User.Email}</p>
        <div className="card-actions">
          <button className="btn btn-primary">
            <ArrowLinkIcon/>
          </button>
        </div>
      </div>
    </div>
  );
}
export default BorrowAdminViewer;