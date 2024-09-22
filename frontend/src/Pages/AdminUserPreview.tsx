import React from "react";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import { BorrowDetails,BorrowRequestArray } from "../Validator/BorrowDetailsValidator";
import { ToastContainer, toast } from "react-toastify";
import BottomtoastOption from "../Options/BottomToastOption";
import UserPreviewNavbar from "../Components/Admin/UserPreviewNavbar";
import NoDataFound from "../Components/NoDataFound";
import BorrowAdminTable from "../Components/Admin/BorrowAdminTable";
const AdminUserPreview: React.FC = () => {
  const location = useLocation();
  const [UserData, SetUserData] = React.useState<z.infer<typeof BorrowDetails> | null>(null);
  const [Element,SetElement] = React.useState<z.infer<typeof BorrowRequestArray>>([]);
  const [Attribute,SetAttribute] = React.useState<string>("");
  const [Search,SetSearch] = React.useState<string>("");

  const RemoveRecord = (_id:string) => {
    SetElement(prev=>{
      const res = prev.filter(it=>it._id!=_id);
      console.log(res);
      return res;
    });
  }

  React.useEffect(() => {
    const isValid = BorrowDetails.safeParse(location.state);
    if (isValid.success) {
      SetUserData(location.state);
      SetElement(location.state.BorrowRequests);
    } else {
      toast.error('parsing error', BottomtoastOption);
    }
  }, []);
  const SearchTable=()=>{
    SetElement(()=>{
      const filtered =(UserData)? UserData?.BorrowRequests.filter(item => {
        switch (Attribute) {
          case "BookName":
            return item.BookName.toLowerCase().includes(Search);
          case "_id":
            return item._id.toLowerCase().includes(Search);
          case "ISBN":
            return item.ISBN.toLowerCase().includes(Search);
          case "BorrowDate":
            return (item.BorrowDate)?item.BorrowDate?.toLowerCase().includes(Search):false;
          case "RenewalDate":
            return (item.RenewalDate)?item.RenewalDate?.toLowerCase().includes(Search):false;
          default:
            console.log(Attribute + "not found");
            return true;
        }
      }):[];
      return filtered;
    })
  }

  return (<>
    <UserPreviewNavbar 
      Name={UserData ? UserData.User.Name : "User-name"} 
      Email={UserData ? UserData.User.Email : "username@mail.com"} 
      Avatar={UserData ? UserData.User.Avatar : "./avatar.svg"} 
      _id={UserData ? UserData.User._id : "xxxxxxxx"} 
      SearchTable={SearchTable}
      SetSearch={SetSearch}
      SetAttribute={SetAttribute}
    />
    <ToastContainer />
    {(Element.length != 0) ? (
        <div
          className="grid grid-cols-[repeat(auto-fill,min(90%,400px))] justify-center items-center auto-rows-[350px] gap-1 overflow-scroll min-h-[calc(100vh - 64px)]"
        >
          {Element.map(item => (<BorrowAdminTable  data={item} key={crypto.randomUUID()} removeRecord={RemoveRecord}/>))}
        </div>
      ) :
        (<NoDataFound />)
      }
  </>)
}
export default AdminUserPreview;