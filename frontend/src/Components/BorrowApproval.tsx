import React from "react";
import { z } from "zod";
import { BorrowDetailsArray } from "../Validator/BorrowDetailsValidator";
import BorrowAdminViewer from "./BorrowAdminViewer"
// const 
interface props {
  data: z.infer<typeof BorrowDetailsArray>
}
const BorrowApproval: React.FC<props> = ({ data }) => {
  console.log(data);
  return (
    <>
    {
      data.map((item) => <BorrowAdminViewer data={item} key={crypto.randomUUID()}/>)
    }
    </>
  );
}
export default BorrowApproval;