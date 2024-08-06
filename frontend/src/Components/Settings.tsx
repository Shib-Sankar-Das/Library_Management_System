import React from "react";
import { z } from "zod";
import UV from "../Validator/UserValidator";
interface SettingProps {
  data:z.infer<typeof UV>
}
const Settings:React.FC<SettingProps>=({data}:SettingProps)=>{
  React.useEffect(()=>{
    console.log(data)
  })
  return(<>
  </>)
}
export default Settings;