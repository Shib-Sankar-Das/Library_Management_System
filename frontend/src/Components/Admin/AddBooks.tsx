import React from "react";

const AddBooks: React.FC = () => {



  return (
    <form className="flex flex-col md:flex-row items-center justify-center min-h-screen  p-4 overflow-auto max-h-screen" 
      // onSubmit={handleSubmit}
    >
      <div className="w-[60%] md:w-1/2 lg:w-1/3 p-4">
        <label htmlFor="userAvatar">
          <img
            src={"./"}
            alt="Placeholder"
            style={{ transform: "scale(0.75)" }}
            className="w-full rounded-xl shadow-lg"
            id="avatar-update"
          />
        </label>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4  rounded-md shadow-lg mt-4 md:mt-0">
        <h2 className="text-2xl font-semibold mb-4">{"Update Profile"}</h2>
        <div>
          <div className="mb-4">
            <input
              type="file"
              id="userAvatar"
              className="hidden"
            // onChange={handleAvatarChange}
            />
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="username"
              type="text"
              // value={Data.Name}
              placeholder="Username"
            // onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            //   SetData((prev) => {
            //     SetUpdate(prevUpdate => {
            //       prevUpdate.set("Name", e.target?.value || "");
            //       return prevUpdate;
            //     });
            //     return { ...prev, Name: e.target?.value || "" };
            //   });
            // }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="email"
              type="email"
              //value={Data.Email}
              placeholder="Email"
            // onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            //   SetData((prev) => {
            //     SetUpdate(prevUpdate => {
            //       prevUpdate.set("Email", e.target?.value || "");
            //       return prevUpdate;
            //     });
            //     return { ...prev, Email: e.target?.value || "" };
            //   });
            // }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="joining-date"
            >
              Joining date
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="joining-date"
              type="date"
              // defaultValue={
              //   (new Intl.DateTimeFormat('en-CA')).format(new Date(data.JoiningDate))
              // }
              disabled={true}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="password"
              type="password"
              // value={Data.Password}
              placeholder="********"
            // onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            //   SetData((prev) => {
            //     SetUpdate(prevUpdate => {
            //       prevUpdate.set("Password", e.target?.value || "");
            //       return prevUpdate;
            //     });
            //     return { ...prev, Password: e.target?.value || "" };
            //   });
            // }}
            // onDoubleClick={(
            //   e: React.MouseEvent<HTMLInputElement, MouseEvent>
            // ) => {
            //   e.currentTarget.type =
            //     e.currentTarget.type == "password" ? "text" : "password";
            // }}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              children={"SAVE"}
            />
          </div>
        </div>
      </div>

    </form>
  );
};
export default AddBooks;