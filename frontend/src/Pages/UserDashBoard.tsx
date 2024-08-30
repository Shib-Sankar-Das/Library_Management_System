import React from "react";
import { z } from "zod";
import * as Router from "react-router-dom";
import BooksView from "../Components/User/BooksView";
import { BookCopyModel } from "../Validator/BookCopy";
import UserValidator from "../Validator/UserValidator";
import { ToastContainer, toast } from 'react-toastify';
import BottomToastOption from "../Options/BottomToastOption";
import { BorrowResponses } from "../Validator/BorrowResponseValidator";
import Settings from "../Components/User/Settings";
import BorrowView from "../Components/User/BorrowView";
import BooksViewIcon from "../Components/Icon/BooksViewIcon";
import BorrowIcon from "../Components/Icon/BorrowIcon";
import ReturnIcon from "../Components/Icon/ReturnIcon";
import NoDataFound from "../Components/NoDataFound";
import ReloadIcon from "../Components/Icon/ReloadIcon";
const UserDashBoard: React.FC = () => {

  const navigate = Router.useNavigate();
  const [Image, SetImage] = React.useState<string>('./avatar.svg');
  const [UserData, SetUserData] = React.useState<z.infer<typeof UserValidator> | null>(null);
  const [BorrowData, SetBorrowData] = React.useState<z.infer<typeof BorrowResponses> | null>(null);
  const [BookData, SetBookData] = React.useState<z.infer<typeof BookCopyModel> | null>(null);
  const FetchUserhData = async () => {
    const data = await fetch('/api/user')
      .then((res) => {
        if (res.status != 200) {
          toast.error(res.statusText, BottomToastOption);
          (res.status < 500) ? navigate("/user-auth") : (() => {/* do nothing */ });
        }
        return res.json();
      });
    try {
      UserValidator.parse(data);
      SetUserData(data);
    } catch (e) {
      console.log(e);
      toast.error(JSON.stringify(e), BottomToastOption);
    }
    SetImage(prev => {
      return data?.Image ?? prev;
    });
  }
  const FetchBorrowData = async () => {
    const data = await fetch('/api/borrow-book').then((res) => {
      if (res.status != 200)
        toast.error(res.statusText, BottomToastOption);
      return res.json();
    });
    try {
      BorrowResponses.parse(data);
      SetBorrowData(data);
    } catch (e) {
      toast.success(JSON.stringify(e), BottomToastOption);
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
    location.hash = "";
    window.setTimeout(() => {
      FetchUserhData();
      FetchBorrowData();
      FetchBooks();
    }, 0);
  }, []);

  React.useLayoutEffect(() => {
    const focusHandler = (id: string) => {
      const ID_List = ['BooksView', 'Borrow', 'Settings'];
      ID_List.forEach(item => { document.getElementById(item)!.className = (id != item) ? ('hidden') : (''); });
    }
    const focusChanger = () => {
      switch (location.hash) {
        case "#BooksView":
          focusHandler('BooksView')
          break;
        case "#Borrow":
          focusHandler('Borrow')
          break;
        case "#Settings":
          focusHandler('Settings')
          break;
        default:
          focusHandler('BooksView')
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
              <BooksViewIcon />
            </a>

            <a
              href="#Borrow"
              className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <BorrowIcon />
            </a>

            <a
              href="#"
              className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <ReturnIcon />
            </a>

            <a
              href=""
              className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                SetBorrowData(null);
                SetBookData(null);
                SetUserData(null);
                FetchBooks();
                FetchBorrowData();
                FetchUserhData();
              }}
            >
              <ReloadIcon />
            </a>

          </nav>

          <div className="flex flex-col space-y-6">
            <a href="#Settings">
              <img
                className="object-cover w-8 h-8 rounded-full"
                src={Image}
                alt="user profile image"
              />
            </a>
          </div>
        </aside>

        <div id="BooksView" style={{
          width: 'calc(100% - 64px)',
          animation: "opacityTransition linear 0.4s 1"
        }}
        >
          {
            (BookData != null) ?
              (
                (BookData.length != 0 && UserData != null) ?
                  (<BooksView data={BookData} user={UserData} />) :
                  (<NoDataFound />)
              ) :
              (<span className="loading loading-infinity loading-lg" />)
          }
        </div>
        <div id="Borrow" className="hidden" style={{
          width: 'calc(100% - 64px)',
          animation: "opacityTransition linear 0.4s 1"
        }}>
          {
            (BorrowData != null) ?
              (
                (BorrowData.length != 0 && UserData != null) ?
                  (<BorrowView data={BorrowData} user={UserData} />) :
                  (<NoDataFound />)
              ) :
              (<span className="loading loading-infinity loading-lg" />)

          }
        </div>
        <div id="Settings" className="hidden" style={{
          width: 'calc(100% - 64px)',
          animation: "opacityTransition linear 0.4s 1"
        }}>
          {(UserData != null) ?
            (<Settings data={UserData} />) :
            (<span className="loading loading-infinity loading-lg" />)
          }
        </div>
      </div>
    </>
  );
};
export default UserDashBoard;