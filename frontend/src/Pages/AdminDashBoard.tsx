import React from "react";
import { z } from "zod";
import { AdminLoginReponse } from "./../Validator/AdminLoginValidator";
import { BorrowDetailsArray } from "../Validator/BorrowDetailsValidator";
import AdminSettings from "../Components/Admin/AdminSettings";
import BooksViewIcon from "../Components/Icon/BooksViewIcon";
import UserIcon from "../Components/Icon/UserIcon";
import BooksView from "../Components/Admin/BookView";
import { BookCopyModel } from "../Validator/BookCopy";
import AddBookIcon from "../Components/Icon/AddBookIcon";
import NoDataFound from "../Components/NoDataFound";
import ReloadIcon from "../Components/Icon/ReloadIcon";
import BorrowApproval from "../Components/Admin/BorrowApproval";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BottomToastOption from "../Options/BottomToastOption";
import AddBooks from "../Components/Admin/AddBooks";
const AdminDashBoard: React.FC = () => {
  const [Admin, SetAdmin] = React.useState<z.infer<typeof AdminLoginReponse> | null>();
  const [AdminImage, SetAdminImage] = React.useState<string>('./member.jpeg');
  const [Borrow, SetBorrow] = React.useState<z.infer<typeof BorrowDetailsArray> | null>(null);
  const [BookData,SetBookData] = React.useState<z.infer<typeof BookCopyModel>| null>(null);
  const FetchAdminData = async () => {
    const response = await fetch('api/admin/').then(res => {
      if (res.status == 200) {
        // toast.success(res.statusText,BottomToastOption);
      } else {
        toast.error(res.statusText, BottomToastOption);
      }
      return res.json();
    });
    AdminLoginReponse.parse(response);
    SetAdminImage(response["Image"]);
    SetAdmin(response);
  }
  const FetchBorrowModelData = async () => {
    const response = await fetch('/api/borrow-book/admin').then(res => {
      if (res.status == 200) {
        // toast.success(res.statusText,BottomToastOption);
      } else {
        toast.error(res.statusText, BottomToastOption);
      }
      return res.json();
    });
    try {
      BorrowDetailsArray.parse(response);
      SetBorrow(response);
    } catch (e) {
      console.log(e);
      toast.error('parsing error', BottomToastOption);
    }

  }

  const FetchBooks = async () => {
    fetch("api/books")
      .then((res) => {
        if (res.status != 200)
          toast.error(res.statusText, BottomToastOption);
        return res.json();
      })
      .then((data) => {
        const DATA = BookCopyModel.safeParse(data);
        (DATA.success) ? SetBookData(DATA.data) : console.log(DATA.error.message);
      });
  }
  React.useEffect(() => {
    try {
      FetchAdminData();
      FetchBorrowModelData();
      FetchBooks();
    } catch (e) {
      toast.error(JSON.stringify(e), BottomToastOption);
    }
  }, []);

  React.useLayoutEffect(() => {
    const focusHandler = (id: string) => {
      const ID_List = ['UserView','AddBooks', 'BooksView', 'Settings'];
      ID_List.forEach(item => { 
        (document.getElementById(item))!.className = (id != item) ? ('hidden') : (''); 
      });
    }
    const focusChanger = () => {
      switch (location.hash) {
        case "#BooksView":
          focusHandler('BooksView')
          break;
        case "#UserView":
          focusHandler('UserView')
          // break;
          break;
        case "#Settings":
          focusHandler('Settings')
          break;
        case "#AddBooks":
          focusHandler('AddBooks')
          break;
        default:
          focusHandler('UserView')
          break;
      }
    }
    window.addEventListener("load", focusChanger);
    window.addEventListener("hashchange", focusChanger);

    return () => {
      window.document.removeEventListener("DOMContentLoaded", focusChanger);
      window.removeEventListener("hashchange", focusChanger);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="flex flex-row">
        <aside className="flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
          <nav className="flex flex-col flex-1 space-y-6 w-[55%]">
            <a href="/home" className="flex justify-center">
              <img
                className="w-auto h-6 "
                src="./vite.svg"
                alt=""
              />
            </a>

            <a
              href="#UserView"
              className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <UserIcon />
            </a>
            
            <a
              href="#BooksView"
              className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <BooksViewIcon />
            </a>

            <a
              href="#AddBooks"
              className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <AddBookIcon />
            </a>

            <a
              href=""
              className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"

            >
              <ReloadIcon />
            </a>

          </nav>

          <div className="flex flex-col space-y-6">
            <a href="#Settings">
              <img
                className="object-cover w-8 h-8 rounded-full"
                alt="user profile image"
                src={AdminImage}
              />
            </a>
          </div>
        </aside>

        <div id="UserView"
          style={{
            width:'calc(100% - 64px)',
            animation:'opacityTransition linear 0.4s 1'
          }}
        >
          {
            (Borrow != null) ?
              (
                (Borrow.length) ?
                  (<BorrowApproval data={Borrow} />) :
                  (<NoDataFound />)
              ) :
              (<span className="loading loading-infinity loading-lg" />)
          }
        </div>
        <div id="BooksView" style={{
          width: 'calc(100% - 64px)',
          animation: "opacityTransition linear 0.4s 1"
        }}
        >
          {
            (BookData != null) ?
              (
                (BookData.length != 0) ?
                  (<BooksView data={BookData} />) :
                  (<NoDataFound />)
              ) :
              (<span className="loading loading-infinity loading-lg" />)
          }
        </div>
        <div id="AddBooks" style={{
          width: 'calc(100% - 64px)',
          animation: "opacityTransition linear 0.4s 1"
        }}>
          <AddBooks/>
        </div>

        <div id="Settings" className="hidden" style={{
          width: 'calc(100% - 64px)',
          animation: "opacityTransition linear 0.4s 1"
        }}>
          {
            (Admin != null) ?
              (<AdminSettings data={Admin} />) :
              (<span className="loading loading-infinity loading-lg" />)
          }
        </div>
      </div>
    </>
  );
};
export default AdminDashBoard;