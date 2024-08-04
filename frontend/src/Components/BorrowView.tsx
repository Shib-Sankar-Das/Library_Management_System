import React from "react";
import { z } from "zod";
import {BorrowResponses} from "../Validator/BorrowResponseValidator";
import UV from "../Validator/UserValidator";
import Borrow from "./Borrow";
const BorrowView : React.FC<{data:z.infer<typeof BorrowResponses>,user:z.infer<typeof UV>}> = ({data,user}:{data:z.infer<typeof BorrowResponses>,user:z.infer<typeof UV>}) =>{
  console.log(data,user);
  return(<>
  {data.map(item=>(<Borrow user={user} data={item}/>))} 
  </>)
}
export default BorrowView;