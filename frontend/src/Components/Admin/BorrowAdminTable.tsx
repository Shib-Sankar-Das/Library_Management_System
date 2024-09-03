import React from "react";
import { z } from "zod";
import { BorrowRequest } from "../../Validator/BorrowDetailsValidator";
import { BookCopyId, BookCopyIdArray } from "../../Validator/BookIdList";
interface props {
  data: z.infer<typeof BorrowRequest>
}
const BorrowAdminTable: React.FC<props> = ({ data }) => {
  const [BookIds, SetBookIds] = React.useState<z.infer<typeof BookCopyIdArray> | null>(null)
  const [Key, SetKey] = React.useState<string>("");
  let UpdateRequest = (!data.Approved) ? (async () => {
    const fetchData = await fetch("/api/books/admin/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "BorrowId": data._id, "_id": Key })
    }).then(res => res.json());
    console.log(fetchData);
  }) : (async () => { });
  React.useEffect(() => {
    const FetchIds = async () => {
      if (!data.Approved) {
        const fetchData = await fetch(`/api/books/admin/?ISBN=${data.ISBN}`).then(res => res.json());
        try {
          BookCopyIdArray.parse(fetchData);
          if (fetchData?.length == 0) {
            SetBookIds(null);
          } else {
            SetBookIds(fetchData);
            SetKey(fetchData[0]._id);
          }
        } catch (e) {
          console.log(e);
        }
      } else {
        console.log("already approved")
      }
    }
    FetchIds();
  }, []);

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
        <div
          className="modal-action card bg-base-100 image-full w-96 shadow-xl justify-center items-center"
          style={{
            backgroundImage: `url('${data.BookImage}')`,
            backgroundRepeat: "no-repeat no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
        >
          <div className="card-body text-gray-900 bg-[#00000080] rounded-2xl">
            <h2 className="card-title backdrop-blur-md rounded-2xl">{data.BookName}</h2>
            {
              (BookIds != null) ?
                (
                  <>
                    <select
                      className="select select-primary bg-[#00000080] w-full max-w-xs"
                      value={Key}
                      onChange={e => {
                        SetKey(e.target.value);
                      }}
                    >
                      {
                        BookIds.map(item => (<option key={item._id}>{item._id}</option>))
                      }
                    </select>
                    <button type="button" onClick={e => {
                      e.preventDefault();
                      UpdateRequest();
                    }}>{"Save"}</button>
                  </>
                ) :
                (<></>)
            }
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