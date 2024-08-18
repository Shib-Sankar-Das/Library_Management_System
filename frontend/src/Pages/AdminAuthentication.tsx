import React from "react";
import  {z} from "zod";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import BottomToastOption from "../Options/BottomToastOption";
import {AdminLoginValidator} from "./../Validator/AdminLoginValidator";
const AdminAuthentication:React.FC=()=>{
  // console.log(z);
  const [Data,SetData] = React.useState<z.infer<typeof AdminLoginValidator>>({
    Name:"",
    Email:"",
    Password:""
  });

  const handleSubmit = async ()=> {
    console.log(Data);
  }

  return(
  <form
    name={'login'} 
    className="flex w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg transition-all dark:bg-gray-800 lg:max-w-4xl"
    onSubmit={e=>{
      e.preventDefault();
      handleSubmit();
    }}
  >
    <ToastContainer />
    <div
      className="hidden bg-cover lg:block lg:w-1/2 relative"
      style={{ backgroundImage: "url('./library.jpg')" }}
    >
      <p className="px-1 mt-3 text-xl rounded-sm absolute text-center text-gray-600 dark:text-gray-200 bg-[#77777780] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:text-black ease-linear ">
        Welcome to Library
      </p>
    </div>
    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
    <div className="mt-4">
        <label
          className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          htmlFor="LoggingAdminName"
        >
          Admin Name
        </label>
        <input
          id="LoggingAdminName"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 invalid:text-red-600"
          type="text"          
          value={Data.Name}
          onInput={(e:React.ChangeEvent<HTMLInputElement>)=>{
            SetData((data)=>{
              return {...data,Name:e.target.value};
            });
          }}
          required
        />
      </div>

      <div className="mt-4">
        <label
          className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          htmlFor="LoggingEmailAddress"
        >
          Email Address
        </label>
        <input
          id="LoggingEmailAddress"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 invalid:text-red-600"
          value={Data.Email}
          onInput={(e:React.ChangeEvent<HTMLInputElement>)=>{
            SetData((data)=>{
              return {...data,Email:e.target.value};
            });
          }}
          type="email"          
          required
        />
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            htmlFor="loggingPassword"
          >
            Password
          </label>
        </div>

        <input
          id="loggingPassword"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 invalid:text-red-600"
          type="password"
          placeholder="double-click to see"
          value={Data.Password}
          pattern={"^[\x21-\x7E]{8,}$"}
          autoComplete="current-password"
          onInput={(e:React.ChangeEvent<HTMLInputElement>)=>{
            SetData((data)=>{
              return {...data,Password:e.target.value};
            });
          }}
          required
          onDoubleClick={(e:React.MouseEvent<HTMLInputElement,MouseEvent>)=>{
            e.currentTarget.type = (e.currentTarget.type=="password")?("text"):("password"); 
          }}
        />
      </div>

      <div className="mt-6">
        <button
          className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          type="submit"
        >
          {'login as admin'}
        </button>
      </div>  
    </div>
  </form>
  );
}
export default AdminAuthentication;