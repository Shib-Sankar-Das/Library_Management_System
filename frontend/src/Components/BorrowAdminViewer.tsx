import React from "react";
import { z } from "zod";
import { BorrowDetails } from "../Validator/BorrowDetailsValidator";
import BorrowAdminTable from "./BorrowAdminTable";
interface props {
  data: z.infer<typeof BorrowDetails>
}
const BorrowAdminViewer: React.FC<props> = ({ data }) => {
  // console.log(data);
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center max-h-[100dvh] overflow-hidden p-2">
      <details className="bg-blue-950 shadow rounded-lg overflow-auto max-h-[95dvh] min-w-[100%] m-2 p-2">
        <summary className="bg-blue-500 rounded-xl text-white font-semibold py-2 px-4 cursor-pointer grid items-center">
          <figure className="max-w-[100%] grid items-center justify-center">
            <img className="h-auto max-w-[250px] rounded-lg" src={data.UserImage} alt={data.Data[0].UserEmail}/>
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption>
          </figure>

        </summary>
        <div className="grid grid-cols-[85%] justify-center items-center auto-rows-[90dvh] gap-1 overflow-scroll max-h-[90dvh] p-2">
          {
            data.Data.map(item => (<BorrowAdminTable data={item} key={crypto.randomUUID()} />))
          }
        </div>
      </details>
    </div>
  );
}
export default BorrowAdminViewer;