import React from "react";
import { z } from "zod";
import { BorrowRequest } from "../../Validator/BorrowDetailsValidator";
import { BookCopyIdArray } from "../../Validator/BookIdList";
import { toast } from "react-toastify";
import BottomToastOption from "../../Options/BottomToastOption";
interface props {
  data: z.infer<typeof BorrowRequest>
  removeRecord: (id:string) => void
}
const BorrowAdminTable: React.FC<props> = ({ data,removeRecord }) => {
  const [Data,SetData] = React.useState<z.infer<typeof BorrowRequest>>(data);
  // const [Arr,setArr] = React.useState<[string, string | boolean | null][]>(Object.entries(Data));
  const DDMMYYYY = Intl.DateTimeFormat("en-CA");
  
  React.useEffect(() => {
    if (data.BorrowDate != null && data.RenewalDate != null) {
      const formatted_borrow_date = DDMMYYYY.format(new Date(data.BorrowDate));
      const formatted_renewal_date = DDMMYYYY.format(new Date(data.RenewalDate));
      SetData(prev=>{
        return {...prev,BorrowDate:formatted_borrow_date,RenewalDate:formatted_renewal_date};
      })
    } else {

    }
  }, [])

  const [BookIds, SetBookIds] = React.useState<z.infer<typeof BookCopyIdArray> | null>(null)
  const [Key, SetKey] = React.useState<string>("");

  const DeleteBorrowRecord = async () => {
    const response = (
      await fetch('/api/borrow-book/admin', {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ "_id": data._id })
        })
        .then(res => {
          if (res.status == 200) {
            toast.success(res.statusText, BottomToastOption)
          } else {
            toast.error(res.statusText, BottomToastOption)
          }
          return res.json();
        })
    );
    removeRecord(data._id);
  }

  let UpdateRequest = (!Data.Approved) ? (async () => {
    const fetchData = await fetch("/api/books/admin/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "BorrowId": Data._id, "_id": Key })
    })
      .then(res => {
        if (res.status == 200) {
          toast.success(res.statusText, BottomToastOption);
        } else {
          toast.error(res.statusText, BottomToastOption);
        }
        return res.json();
      });
    // console.log(fetchData);
    const isValid = BorrowRequest.safeParse({...fetchData,BookImage:Data.BookImage});
    // console.log("parsing",isValid);
    if(isValid.success){
      const formatted_borrow_date = DDMMYYYY.format(new Date(isValid.data.BorrowDate??""));
      const formatted_renewal_date = DDMMYYYY.format(new Date(isValid.data.RenewalDate??""));
      SetData(prev=>{
        return {...isValid.data,BorrowDate:formatted_borrow_date,RenewalDate:formatted_renewal_date,BookImage:prev.BookImage};
      })
      // console.log("message:done");
    }
  }) : (async () => { });

  /*
  const EscapeTrigger = () => {
    const escEvent = new KeyboardEvent('keydown', {
      key: 'Escape', // The key value representing the Escape key
      keyCode: 27,   // Deprecated but still widely used for backward compatibility
      code: 'Escape',
      which: 27,     // Same as keyCode, but included for some browsers' compatibility
      bubbles: true  // Whether the event bubbles up through the DOM
    });
    document.dispatchEvent(escEvent);

  };
  */


  React.useEffect(() => {
    const FetchIds = async () => {
      if (!data.Approved) {
        const fetchData = await fetch(`/api/books/admin/?ISBN=${Data.ISBN}`).then(res => res.json());
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
        // console.log("already approved");
      }
    }
    FetchIds();
  }, []);

  
  return (
    <div
      className="overflow-x-auto bg-slate-900 rounded-md hover:scale-[90%] m-1 p-1"
      onContextMenu={(e) => {
        e.preventDefault();
        (document.getElementById(data._id)! as HTMLDialogElement).showModal();
      }}
    >
      <dialog id={Data._id} className="modal">
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
                    
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={e => {
                        e.preventDefault();
                        UpdateRequest();
                        (document.getElementById(data._id)! as HTMLDialogElement).close();
                      }}
                    >
                      SAVE
                    </button>
                    <button
                      type="button"
                      className="btn btn-error"
                      onClick={e => {
                        e.preventDefault();
                        removeRecord(Data._id);
                        DeleteBorrowRecord();
                        (document.getElementById(data._id)! as HTMLDialogElement).close();
                      }}
                    >
                      DELETE
                    </button>
                  </>
                ) :
                (
                  <button
                    type="button"
                    className="btn btn-error"
                    onClick={e => {
                      e.preventDefault();
                      DeleteBorrowRecord();
                    }}
                  >
                    DELETE
                  </button>
                )
            }
          </div>
        </div>

      </dialog>
      <table className="table" >
        <tbody >
          {Object.entries(Data).map((item) => (item[0] != "BookImage") ? (
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