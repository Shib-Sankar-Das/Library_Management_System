import React from "react";
import { z } from "zod";
import { BookCopyModel } from "../Validator/BookCopy";
import Book from "../Components/Book";
// import SearchBar from "../Components/SearchBar";
const BooksView : React.FC = () =>{
  const [Data, SetData] = React.useState<z.infer<typeof BookCopyModel>>([]);
  // let Options = [''];
  React.useEffect(()=>{
    fetch("api/books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
        <select 
        className="ml-2 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          {Object.keys(Data[0]).filter(item=>(item!="_id" && item!="Copies" && item!="PublishingDate" && item!="ImageLink")).map((item,index)=>(<option value={item} selected={(index==0)?true:false}>{item}</option>))}
          
          {/* <option value="option1">Author</option>
          <option value="option2">Publisher</option>
          <option value="option3">Subject</option>
          <option value="option4">ISBN</option> */}
        </select>
      </div>
    </div>
    <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,300px)] auto-rows-[240px] min-w-full m-0 p-2 justify-center align-middle gap-1.5 overflow-y-auto max-h-[90dvh]">
      {Data.map((item) => (<Book key={item._id} {...item} />))}
    </div>
    </>
  );
}
export default BooksView;