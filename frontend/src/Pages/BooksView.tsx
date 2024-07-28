import React from "react";
import { z } from "zod";
import { BookCopyModel } from "../Validator/BookCopy";
import Book from "../Components/Book";
const BooksView : React.FC = () =>{
  const SELECT_OPTION = ["Name","Author","ISBN","Publisher","Subject"];
  const [Data, SetData] = React.useState<z.infer<typeof BookCopyModel>>([]);
  React.useEffect(()=>{
    fetch("api/books")
      .then((res) => res.json())
      .then((data) => {
        const DATA = BookCopyModel.safeParse(data);
        (DATA.success)?SetData(()=>{
          return DATA.data;
        }):console.log(DATA.error.message);
        
      });
  },[])
  return (
    <>
    <div className="bg-[#00000000] p-2">
      <div className="max-w-7xl mx-auto flex items-center max-h-[10dvh]">
        <input
          type="text"
          onKeyDown={(e)=>{
            if(e.key=="Enter"){
              console.log(e.key);
            }
          }}
          placeholder="Enter to Search..."
          className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select defaultValue={"Name"}
        className="ml-2 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          {SELECT_OPTION.map((item)=>(<option value={item} key={crypto.randomUUID()} >{item}</option>))}
        </select>
      </div>
    </div>
    <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,300px)] auto-rows-[280px] min-w-full m-0 p-2 justify-center align-middle gap-1.5 overflow-y-auto max-h-[90dvh]">
      {Data.map((item) => (<Book key={item._id} {...item} />))}
    </div>
    </>
  );
}
export default BooksView;