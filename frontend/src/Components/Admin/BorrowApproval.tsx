import React from "react";
import { z } from "zod";
import { BorrowDetailsArray } from "../../Validator/BorrowDetailsValidator";
import BorrowAdminViewer from "./BorrowAdminViewer"
import NoDataFound from "../NoDataFound";
// const 
interface props {
  data: z.infer<typeof BorrowDetailsArray>
}

const BorrowApproval: React.FC<props> = ({ data }) => {
  const SELECT_OPTION = ["Name","Email","_id"];
  const [Attribute,SetAttribute] = React.useState<string>(SELECT_OPTION[0]);
  const [Element,SetElement] = React.useState<z.infer<typeof BorrowDetailsArray>>([]);
  const [Search,SetSearch] = React.useState<string>('');
  React.useEffect(()=>{
    SetElement(data);
  },[]);
  return (
    <>
      <div className="bg-[#00000000] p-2" >
        <div className="max-w-7xl mx-auto flex items-center max-h-[10dvh] ">
          <input
            type="text"
            value={Search}
            placeholder={'Search by ' + Attribute + ""}
            onInput={e => {
              SetSearch(e.currentTarget.value.toLowerCase());
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                SetElement(()=>{
                  const filtered = data.filter(item => {
                    switch (Attribute) {
                      case "_id":
                        return item.User._id.toLowerCase().includes(Search);
                      case "Name":
                        return item.User.Name.toLowerCase().includes(Search);
                      case "Email":
                        return item.User.Email.toLowerCase().includes(Search);
                      default:
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
            onChange={(e) => { SetAttribute(e.currentTarget.value); }}
            value={Attribute}
            className="ml-2 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {SELECT_OPTION.map((item) => (<option value={item} key={crypto.randomUUID()} >{item}</option>))}
          </select>
        </div>
      </div>
        {
          (Element.length)?
            (
            <div className="grid grid-cols-[repeat(auto-fill,min(90%,400px))] justify-center items-center auto-rows-[350px] gap-1 overflow-scroll max-h-[90dvh]">
              {(Element.map((item) => <BorrowAdminViewer data={item} key={crypto.randomUUID()}/>))}
            </div>
            ):
            (<NoDataFound/>)
        }
    </>
  );
}
export default BorrowApproval;