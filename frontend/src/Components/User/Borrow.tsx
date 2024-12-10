import React from "react";
import { z } from "zod";
import { BorrowResponseValidator } from "../../Validator/BorrowResponseValidator";
import UV from "../../Validator/UserValidator";
interface BorrowProp {
  data: z.infer<typeof BorrowResponseValidator>;
  user: z.infer<typeof UV>;
}
const Borrow: React.FC<BorrowProp> = ({data,user}:BorrowProp) => {
  let ShowData:any = {
    "ID":data._id,
    "Book":data.BookName,
    "ISBN":data.ISBN,
    "Approved":data.Approved
  };
  if(data.BorrowDate!=null && data.RenewalDate!=null){
    const YYYY_MM_DD =  Intl.DateTimeFormat('en-CA');
    const BorrowDate = new Date(data.BorrowDate);
    const ReturnDate = new Date(data.RenewalDate);
    ShowData = {
      ...ShowData,
      "Borrow":YYYY_MM_DD.format(BorrowDate),
      "Renewal":YYYY_MM_DD.format(ReturnDate)
    };
  }else{
    ShowData = {
      ...ShowData,
      "Borrow":"not approved yet",
      "Renewal":"not approved yet"
    };
  }
  
  return (
    <>
      <div className="overflow-x-auto bg-slate-900 rounded-md hover:scale-[90%] m-1 p-1">
        <table className="table" key={user._id}>
          <thead>
            <tr>
              <th className="text-center">{"index"}</th>
              <th className="text-center">{"description"}</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(ShowData).map((it) => (
              <tr key={crypto.randomUUID()}>
                <td key={crypto.randomUUID()}>{it[0]}</td>
                <td key={crypto.randomUUID()}>{it[1]?.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Borrow;
