import React from "react";
import BooksViewIcon from "../Components/BooksViewIcon";
import BorrowIcon from "../Components/BorrowIcon";
import ReturnIcon from "../Components/ReturnIcon";
import NoDataFound from "../Components/NoDataFound";
import ReloadIcon from "../Components/ReloadIcon";
const AdminDashBoard: React.FC = () => {
  
  return (
    <>
      {/* <ToastContainer /> */}
      <div className="flex flex-row">
      <aside className="flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
        <nav className="flex flex-col flex-1 space-y-6">
          <a href="/home" className="flex justify-center">
            <img
              className="w-auto h-6 "
              src="./vite.svg"
              alt=""
            />
          </a>

          <a
            href="#BooksView"
            className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <BooksViewIcon/>
          </a>

          <a
            href="#Borrow"
            className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <BorrowIcon/>
          </a>

          <a
            href="#"
            className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <ReturnIcon/>
          </a>

          <a 
            href=""
            className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            
          >
            <ReloadIcon/>
          </a>
         
        </nav>

        <div className="flex flex-col space-y-6">
          <a href="#Settings">
            <img
              className="object-cover w-8 h-8 rounded-full"
              alt="user profile image"
              src="./member.jpeg"
            />
          </a>
        </div>
      </aside>

      <div id="BooksView" style={{
        width:'calc(100% - 64px)',
        animation:"opacityTransition linear 0.4s 1"
      }}
      >
        <NoDataFound/>
      </div>
      <div id="Borrow" className="hidden" style={{
        width:'calc(100% - 64px)',
        animation:"opacityTransition linear 0.4s 1"
      }}>
        <NoDataFound/>
      </div>
      <div id="Settings" className="hidden" style={{
        width:'calc(100% - 64px)',
        animation:"opacityTransition linear 0.4s 1"
      }}>
        <NoDataFound/>
      </div>
      </div>
    </>
  );
};
export default AdminDashBoard;