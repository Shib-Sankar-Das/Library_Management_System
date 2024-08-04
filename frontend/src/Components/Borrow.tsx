import React from "react";
import { z } from "zod";
import {BorrowResponseValidator} from "../Validator/BorrowResponseValidator";
import UV from "../Validator/UserValidator";
const Borrow : React.FC<{data:z.infer<typeof BorrowResponseValidator>,user:z.infer<typeof UV>}> = ({data,user}:{data:z.infer<typeof BorrowResponseValidator>,user:z.infer<typeof UV>}) =>{
  console.log(data,user);
  return(<>

  </>)
}
export default Borrow;