import React from "react";
import { z } from "zod";
import { BookCopyModel } from "../../Validator/BookCopy";
import UV from "../../Validator/UserValidator";
import NoDataFound from "../NoDataFound";
import Book from "./Book";
interface BooksViewProps {
  data:z.infer<typeof BookCopyModel>,
  user:z.infer<typeof UV>
}
const BooksView : React.FC<BooksViewProps> = ({data,user}:BooksViewProps) =>{
  const SELECT_OPTION = ["Name","Author","ISBN","Publisher","Subject"];
  const [Attribute,SetAttribute] = React.useState<string>(SELECT_OPTION[0]);
  const [Element,SetElement] = React.useState<z.infer<typeof BookCopyModel>>([]);
  const [Search,SetSearch] = React.useState<string>('');
  React.useEffect(()=>{
    SetElement(data);
  },[]);
  return (
    <>
    <div className="bg-[#00000000] p-2">
      <div className="max-w-7xl mx-auto flex items-center max-h-[10dvh]">
        <input
          type="text"
          value={Search}
          placeholder={'Search by '+Attribute+""}
          onInput={e=>{
            SetSearch(e.currentTarget.value.toLowerCase());
          }}
          onKeyDown={(e)=>{
            if(e.key=="Enter"){
              SetElement(()=>{
                const filtered = data.filter(item=>{
                  switch(Attribute){
                    case "Author":
                      return  item.Author.toLowerCase().includes(Search);
                    case "Name":  
                      return  item.Name.toLowerCase().includes(Search);
                    case "ISBN":
                      return  item.ISBN.toLowerCase().includes(Search);
                    case "Publisher":
                      return  item.Publisher.toLowerCase().includes(Search);
                    case "Subject":
                      return  item.Subject.toLowerCase().includes(Search);
                    default :
                      console.log(Attribute + "not found")
                      return true;
                  }
                });
                return filtered;
              })
            }
          }}
          className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select 
          onChange={(e)=>{
            SetAttribute(e.currentTarget.value);
          }}
          value={Attribute}
          className="ml-2 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {SELECT_OPTION.map((item)=>(<option value={item} key={crypto.randomUUID()} >{item}</option>))}
        </select>
      </div>
    </div>
    {(Element.length!=0)?(<div className="grid grid-flow-row grid-cols-[repeat(auto-fill,300px)] auto-rows-[280px] min-w-full m-0 p-2 justify-center align-middle place-items-center gap-1.5 overflow-y-auto max-h-[90dvh]">
      {Element.map((item) => (<Book key={item._id} data={item} user={user} />))}
    </div>):(<NoDataFound/>)}
    </>
  );
}
export default BooksView;