import React from "react";
import { z } from "zod";
import UV from "../Validator/UserValidator";
interface SettingProps {
  data:z.infer<typeof UV>
}
const Settings:React.FC<SettingProps>=({data}:SettingProps)=>{
  React.useEffect(()=>{
    
  })
  return(
  <form className="flex flex-col md:flex-row items-center justify-center min-h-screen  p-4">
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <label htmlFor="userAvatar">
        <img
          src={"./vite.svg"}
          alt="Placeholder"
          style={{transform:"scale(0.75)"}}
          className="w-full rounded-xl shadow-lg"
        />
      </label>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3 p-4  rounded-md shadow-lg mt-4 md:mt-0">
      <h2 className="text-2xl font-semibold mb-4">{"Update"}</h2>
      <div>
        <div className="mb-4">
          <input type="file" id="userAvatar" className="hidden"/>
          <label className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="username">
            Username
          </label>
          <input
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            id="username"
            type="text"
            value={data.Name}
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="email">
            Email
          </label>
          <input
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            id="email"
            type="email"
            value={data.Email}
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="password">
            Password
          </label>
          <input
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            id="password"
            type="password"
            value={"******"}
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            {"save"}
          </button>
        </div>
      </div>
    </div>
  </form>
  );
}
export default Settings;