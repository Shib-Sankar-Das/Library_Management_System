import React from "react";
import { z } from "zod";
import {BorrowResponses} from "../../Validator/BorrowResponseValidator";
import UV from "../../Validator/UserValidator";
import Borrow from "./Borrow";
import NoDataFound from "../NoDataFound";
interface BorrowViewProps{
  data:z.infer<typeof BorrowResponses>,
  user:z.infer<typeof UV>
}
const BorrowView : React.FC<BorrowViewProps> = ({data,user}:BorrowViewProps) =>{

  const SELECT_OPTION = ["Book-Name","ISBN","ID","Date"];
  const [Attribute,SetAttribute] = React.useState<string>(SELECT_OPTION[0]);
  const [Element,SetElement] = React.useState<z.infer<typeof BorrowResponses>>([]);
  const [Search,SetSearch] = React.useState<string>('');
  React.useEffect(()=>{
    SetElement(data);
  },[]);
  return(
  <>
  <div className="bg-[#00000000] p-2" >
      <div className="max-w-7xl mx-auto flex items-center max-h-[10dvh] ">
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
                    case "Book-Name":
                      return  item.BookName.toLowerCase().includes(Search);
                    case "ID":
                      return  item._id.toLowerCase().includes(Search);
                    case "Date":
                      return  item.RenewalDate!.toLowerCase().includes(Search)||item.BorrowDate!.toLowerCase().includes(Search);
                    case "ISBN":
                      return  item.ISBN.toLowerCase().includes(Search);
                    default :
                      console.log(Attribute + "not found");
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
          onChange={(e)=>{SetAttribute(e.currentTarget.value);}}
          value={Attribute}
          className="ml-2 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {SELECT_OPTION.map((item)=>(<option value={item} key={crypto.randomUUID()} >{item}</option>))}
        </select>
      </div>
  </div>
    {(Element.length!=0)?(
      <div 
        className="grid grid-cols-[repeat(auto-fill,min(90%,400px))] justify-center items-center auto-rows-[350px] gap-1 overflow-scroll max-h-[90dvh]"
      >
        {Element.map(item=>(<Borrow user={user} data={item} key={crypto.randomUUID()}/>))} 
      </div>
      ):(<NoDataFound/>
    )}
  </>
  );
}
export default BorrowView;