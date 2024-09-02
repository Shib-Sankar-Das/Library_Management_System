import React from "react";
import { z } from "zod";
import { BorrowRequest } from "../../Validator/BorrowDetailsValidator";
interface props {
  data: z.infer<typeof BorrowRequest>
}
const BorrowAdminTable: React.FC<props> = ({ data }) => {

  const x = Object.entries(data);
  return (
    <div
      className="overflow-x-auto bg-slate-900 rounded-md hover:scale-[90%] m-1 p-1"
      onContextMenu={(e) => {
        e.preventDefault();
        (document.getElementById(data._id)! as HTMLDialogElement).showModal();
      }}
    >
      <dialog id={data._id} className="modal">
        <div className="modal-action card bg-base-100 image-full w-96 shadow-xl justify-center items-center">
          <figure>
            <img
              src={data.BookImage}
              alt={data.BookName}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.BookName}</h2>
          </div>
        </div>

      </dialog>
      <table className="table" >
        <tbody >
          {x.map((item) => (item[0] != "BookImage") ? (
            <tr key={crypto.randomUUID()}>
              <td className="text-center text-ellipsis" children={item[0]} />
              <td className="text-center text-ellipsis" children={(item[1]) ? item[1]?.toString() : ('null')} />
            </tr>
          ) : (<React.Fragment key={crypto.randomUUID()} />)
          )}
        </tbody>
      </table>
    </div>
  );
}
export default BorrowAdminTable;