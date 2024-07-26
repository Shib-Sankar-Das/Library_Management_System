import React from "react";
import { z } from "zod";
import { BookCopyModel } from "./../Validator/BookCopy";
import BookView from "./../Components/BookView";
const AllBooks : React.FC = () =>{
  const [Data, SetData] = React.useState<z.infer<typeof BookCopyModel>>([]);
  React.useEffect(()=>{
    fetch("api/view-book/All")
      .then((res) => res.json())
      .then((data) => {
        const DATA = BookCopyModel.safeParse(data);
        (DATA.success)?SetData(DATA.data):console.error(DATA.error);
      });
  },[])
  return (
    <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,30%)] auto-rows-[70dvh] min-w-full m-0 p-2 justify-center align-middle gap-1.5">
      {Data.map((item) => (<BookView key={item._id} {...item} />))}
    </div>
  );
}
export default AllBooks;