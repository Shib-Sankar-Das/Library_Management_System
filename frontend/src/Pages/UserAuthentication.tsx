import React from "react";
import { z } from "zod";
import { clientSignUpSchema } from "../Validator/ClientSignup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BottomtoastOption from "../Options/BottomToastOption";
const UserAuthentication: React.FC = () => {
  
  const [Data, SetData] = React.useState<z.infer<typeof clientSignUpSchema>>({
    Name: "",
    Password: "",
    Email: "",
  });
  const [Avatar,SetAvatar] = React.useState<File>(); 
  const [Meaasge,SetMessage] = React.useState<string>("upload your picture under 40KB");
  
  const handleSubmit = async ()=> {
    try{
      clientSignUpSchema.parse(Data);
      const UPLOAD = new FormData();
      UPLOAD.append("Name",Data.Name);
      UPLOAD.append("Password",Data.Password);
      UPLOAD.append("Email",Data.Email);
      if(!Avatar) throw new Error('Avatar not selected');
      UPLOAD.append("Avatar",Avatar as File);
      toast.success("successfully signed up",BottomtoastOption);
      const response = await fetch('/api/client-registration',{method:'POST',body:UPLOAD}).then(res=>res.json());
      toast.success(JSON.stringify(response),BottomtoastOption);
    }catch(e){
      toast.error((e as {message:string}).message.substring(0,47)+"...",BottomtoastOption);
    }
  }
  
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Image: HTMLImageElement = document.querySelector<HTMLImageElement>("img#upload-avatar")!;
    SetAvatar(()=>{
      try{
        if(e.target.files && (e.target.files as FileList)[0].size <= (40*1024)){
          Image.src = URL.createObjectURL(e.target.files![0]);
          SetMessage("set another");
          return e.target.files[0];
        }else{
          Image.src = "./invalid.svg";
          SetMessage("file must be under 40KB");
          toast.error("file must be under 40KB",BottomtoastOption);
          return undefined;
        } 
      }catch(e){
        Image.src = "./invalid.svg";
        SetMessage("file must be under 40KB");
        toast.error("please select a file",BottomtoastOption);
        return undefined;
      }
    });
  }


  return (
    <>
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
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
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-20 sm:h-20"
              src="./avatar.svg"
              alt=""
              id="upload-avatar"
            />
          </div>

          <div className="mt-4">
            <label
              className="block text-center mb-2 text-sm font-medium text-blue-300 hover:cursor-pointer hover:text-cyan-500"
              htmlFor="UserAvatar"
            >
              {"*"+Meaasge}
            </label>
            <input
              id="UserAvatar"
              className="hidden w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="file"
              onInput={handleAvatarChange}
            />
          </div>

          <div className="mt-4">
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="LoggingUserName"
            >
              User Name
            </label>
            <input
              id="LoggingUserName"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              value={Data.Name}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                SetData((prev) => {
                  return { ...prev, Name: e.target?.value||"" };
                });
              }}
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
              type="email"
              value={Data.Email}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                SetData((prev) => {
                  return { ...prev, Email: e.target?.value||"" };
                });
              }}
              
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
              <a
                href="#"
                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >
                Forget Password?
              </a>
            </div>

            <input
              id="loggingPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 invalid:text-red-600"
              type="password"
              placeholder="double-click to see"
              value={Data.Password}
              pattern={"^[\x21-\x7E]{8,}$"}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                SetData((prev) => {
                  return { ...prev, Password: e.target?.value||"" };
                });
              }}
              onDoubleClick={(e:React.MouseEvent<HTMLInputElement,MouseEvent>)=>{
                e.currentTarget.type = (e.currentTarget.type=="password")?("text"):("password"); 
              }}
            />
          </div>

          <div className="mt-6">
            <button
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign in
            </a>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAuthentication;