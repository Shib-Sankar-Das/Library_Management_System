import React from "react";
import { z } from "zod";
import { BorrowRequest } from "../../Validator/BorrowDetailsValidator";
interface props {
  data: z.infer<typeof BorrowRequest>
}
const BorrowAdminTable: React.FC<props> = ({ data }) => {
  const x = Object.entries(data);
  return (
    <div className="overflow-x-auto bg-slate-900 rounded-md hover:scale-[90%] m-1 p-1">
      <table className="table">
        <tbody>
          {x.map((item) => (
            <tr key={crypto.randomUUID()}>
              <td className="text-center text-ellipsis" children={item[0]} />
              <td className="text-center text-ellipsis" children={(item[1])?item[1]?.toString():('null')} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BorrowAdminTable;