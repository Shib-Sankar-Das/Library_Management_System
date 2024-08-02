import React from "react";
import { z } from "zod";
import BooksView from "../Components/BooksView";
import { BookCopyModel } from "../Validator/BookCopy";
import UserValidator from "../Validator/UserValidator";
import { ToastContainer, toast } from 'react-toastify';
import BottomToastOption from "../Options/BottomToastOption";
const UserDashBoard: React.FC = () => {
  const [Image,SetImage] = React.useState<string>('./avatar.svg');
  const [UserData,SetUserData] = React.useState<z.infer<typeof UserValidator>|null>(null);
  React.useEffect(()=>{
    const FetchData = async ()=>{
      const data = await fetch('/api/user').then(res=>res.json());
      try{
        UserValidator.parse(data);
        SetUserData(data);
      }catch(e){
        toast.success(JSON.stringify(e),BottomToastOption);
      }
      SetImage(prev=>{
        return data?.Image??prev;
      });
    }
    FetchData();
  },[]);
  const [BookData,SetBookData]  = React.useState<z.infer<typeof BookCopyModel>>([]);
  React.useEffect(()=>{
    fetch("api/books")
      .then((res) => res.json())
      .then((data) => {
        const DATA = BookCopyModel.safeParse(data);
        (DATA.success)?SetBookData(DATA.data):console.log(DATA.error.message);
      });
  },[]); 
  const focusHandler = (id:string)=>{
    const ID_List = ['BooksView' ,'Borrow' ,'Settings'];
    ID_List.forEach(item=>{document.getElementById(item)!.className = (id!=item)?('hidden'):('');}); 
  }
  window.addEventListener('hashchange', ()=>{
    switch(location.hash){
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
  });

  return (
    <>
      <ToastContainer />
      <div className="flex flex-row">
      <aside className="flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
        <nav className="flex flex-col flex-1 space-y-6">
          <a href="#" className="flex justify-center">
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
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#030303" strokeWidth="0.9600000000000002"> <path fillRule="evenodd" clipRule="evenodd" d="M9.94531 1.25H14.0551C15.4227 1.24998 16.525 1.24996 17.3919 1.36652C18.292 1.48754 19.0499 1.74643 19.6518 2.34835C20.2538 2.95027 20.5126 3.70814 20.6337 4.60825C20.7502 5.47522 20.7502 6.57754 20.7502 7.94513V16.0549C20.7502 17.4225 20.7502 18.5248 20.6337 19.3918C20.5126 20.2919 20.2538 21.0497 19.6518 21.6517C19.0499 22.2536 18.292 22.5125 17.3919 22.6335C16.525 22.75 15.4226 22.75 14.0551 22.75H9.94532C8.57773 22.75 7.4754 22.75 6.60844 22.6335C5.70833 22.5125 4.95045 22.2536 4.34854 21.6517C3.74662 21.0497 3.48773 20.2919 3.36671 19.3918C3.32801 19.1039 3.30216 18.7902 3.2849 18.4494C3.24582 18.326 3.23821 18.1912 3.26895 18.0568C3.25016 17.4649 3.25017 16.7991 3.25019 16.0549V7.94513C3.25017 6.57754 3.25015 5.47522 3.36671 4.60825C3.48773 3.70814 3.74662 2.95027 4.34854 2.34835C4.95045 1.74643 5.70833 1.48754 6.60843 1.36652C7.4754 1.24996 8.57772 1.24998 9.94531 1.25ZM4.77694 18.2491C4.79214 18.6029 4.81597 18.914 4.85333 19.1919C4.95199 19.9257 5.13243 20.3142 5.4092 20.591C5.68596 20.8678 6.07453 21.0482 6.80831 21.1469C7.56366 21.2484 8.56477 21.25 10.0002 21.25H14.0002C15.4356 21.25 16.4367 21.2484 17.1921 21.1469C17.9258 21.0482 18.3144 20.8678 18.5912 20.591C18.8679 20.3142 19.0484 19.9257 19.147 19.1919C19.2299 18.5756 19.2462 17.7958 19.2494 16.75H7.89796C6.91971 16.75 6.5777 16.7564 6.31562 16.8267C5.5963 17.0194 5.02286 17.5541 4.77694 18.2491ZM19.2502 15.25V8C19.2502 6.56458 19.2486 5.56347 19.147 4.80812C19.0484 4.07435 18.8679 3.68577 18.5912 3.40901C18.3144 3.13225 17.9258 2.9518 17.1921 2.85315C16.4367 2.75159 15.4356 2.75 14.0002 2.75H10.0002C9.09237 2.75 8.35827 2.75064 7.75019 2.7768V15.25C7.7608 15.25 7.77146 15.25 7.78217 15.25C7.8202 15.25 7.85879 15.25 7.89796 15.25H19.2502ZM6.25019 15.3114C6.13768 15.3284 6.03068 15.3501 5.92739 15.3778C5.49941 15.4925 5.10242 15.6798 4.75019 15.9259V8C4.75019 6.56458 4.75178 5.56347 4.85333 4.80812C4.95199 4.07435 5.13243 3.68577 5.4092 3.40901C5.60551 3.2127 5.85807 3.06485 6.25019 2.96027V15.3114Z" fill="#ffffff"></path> </g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M9.94531 1.25H14.0551C15.4227 1.24998 16.525 1.24996 17.3919 1.36652C18.292 1.48754 19.0499 1.74643 19.6518 2.34835C20.2538 2.95027 20.5126 3.70814 20.6337 4.60825C20.7502 5.47522 20.7502 6.57754 20.7502 7.94513V16.0549C20.7502 17.4225 20.7502 18.5248 20.6337 19.3918C20.5126 20.2919 20.2538 21.0497 19.6518 21.6517C19.0499 22.2536 18.292 22.5125 17.3919 22.6335C16.525 22.75 15.4226 22.75 14.0551 22.75H9.94532C8.57773 22.75 7.4754 22.75 6.60844 22.6335C5.70833 22.5125 4.95045 22.2536 4.34854 21.6517C3.74662 21.0497 3.48773 20.2919 3.36671 19.3918C3.32801 19.1039 3.30216 18.7902 3.2849 18.4494C3.24582 18.326 3.23821 18.1912 3.26895 18.0568C3.25016 17.4649 3.25017 16.7991 3.25019 16.0549V7.94513C3.25017 6.57754 3.25015 5.47522 3.36671 4.60825C3.48773 3.70814 3.74662 2.95027 4.34854 2.34835C4.95045 1.74643 5.70833 1.48754 6.60843 1.36652C7.4754 1.24996 8.57772 1.24998 9.94531 1.25ZM4.77694 18.2491C4.79214 18.6029 4.81597 18.914 4.85333 19.1919C4.95199 19.9257 5.13243 20.3142 5.4092 20.591C5.68596 20.8678 6.07453 21.0482 6.80831 21.1469C7.56366 21.2484 8.56477 21.25 10.0002 21.25H14.0002C15.4356 21.25 16.4367 21.2484 17.1921 21.1469C17.9258 21.0482 18.3144 20.8678 18.5912 20.591C18.8679 20.3142 19.0484 19.9257 19.147 19.1919C19.2299 18.5756 19.2462 17.7958 19.2494 16.75H7.89796C6.91971 16.75 6.5777 16.7564 6.31562 16.8267C5.5963 17.0194 5.02286 17.5541 4.77694 18.2491ZM19.2502 15.25V8C19.2502 6.56458 19.2486 5.56347 19.147 4.80812C19.0484 4.07435 18.8679 3.68577 18.5912 3.40901C18.3144 3.13225 17.9258 2.9518 17.1921 2.85315C16.4367 2.75159 15.4356 2.75 14.0002 2.75H10.0002C9.09237 2.75 8.35827 2.75064 7.75019 2.7768V15.25C7.7608 15.25 7.77146 15.25 7.78217 15.25C7.8202 15.25 7.85879 15.25 7.89796 15.25H19.2502ZM6.25019 15.3114C6.13768 15.3284 6.03068 15.3501 5.92739 15.3778C5.49941 15.4925 5.10242 15.6798 4.75019 15.9259V8C4.75019 6.56458 4.75178 5.56347 4.85333 4.80812C4.95199 4.07435 5.13243 3.68577 5.4092 3.40901C5.60551 3.2127 5.85807 3.06485 6.25019 2.96027V15.3114Z" fill="#ffffff"></path> </g></svg>
          </a>

          <a
            href="#Borrow"
            className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <svg viewBox="-102.4 -102.4 1228.80 1228.80" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#030303" strokeWidth="40.96"><path d="M182.99 146.2h585.14v402.29h73.14V73.06H109.84v877.71H512v-73.14H182.99z" fill="#ffffff"></path><path d="M256.13 219.34h438.86v73.14H256.13zM256.13 365.63h365.71v73.14H256.13zM256.13 511.91h219.43v73.14H256.13zM731.55 585.06c-100.99 0-182.86 81.87-182.86 182.86s81.87 182.86 182.86 182.86c100.99 0 182.86-81.87 182.86-182.86s-81.86-182.86-182.86-182.86z m0 292.57c-60.5 0-109.71-49.22-109.71-109.71 0-60.5 49.22-109.71 109.71-109.71 60.5 0 109.71 49.22 109.71 109.71 0.01 60.49-49.21 109.71-109.71 109.71z" fill="#ffffff"></path><path d="M758.99 692.08h-54.86v87.27l69.39 68.76 38.61-38.96-53.14-52.66z" fill="#ffffff"></path></g><g id="SVGRepo_iconCarrier"><path d="M182.99 146.2h585.14v402.29h73.14V73.06H109.84v877.71H512v-73.14H182.99z" fill="#ffffff"></path><path d="M256.13 219.34h438.86v73.14H256.13zM256.13 365.63h365.71v73.14H256.13zM256.13 511.91h219.43v73.14H256.13zM731.55 585.06c-100.99 0-182.86 81.87-182.86 182.86s81.87 182.86 182.86 182.86c100.99 0 182.86-81.87 182.86-182.86s-81.86-182.86-182.86-182.86z m0 292.57c-60.5 0-109.71-49.22-109.71-109.71 0-60.5 49.22-109.71 109.71-109.71 60.5 0 109.71 49.22 109.71 109.71 0.01 60.49-49.21 109.71-109.71 109.71z" fill="#ffffff"></path><path d="M758.99 692.08h-54.86v87.27l69.39 68.76 38.61-38.96-53.14-52.66z" fill="#ffffff"></path></g></svg>
          </a>

          <a
            href="#"
            className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              />
            </svg>
          </a>

         
        </nav>

        <div className="flex flex-col space-y-6">
         

          <a
            href="#Settings"
            className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:bg-gray-800 bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>

          <a href="#">
            <img
              className="object-cover w-8 h-8 rounded-full"
              src={Image}
              alt=""
            />
          </a>
        </div>
      </aside>
      <div id="BooksView" style={{width:'calc(100% - 64px)'}}>
        {(BookData.length!=0 && UserData!=null)?(<BooksView data={BookData} user={UserData}/>):(<>Loading....</>)}
      </div>
      <div id="Borrow" className="hidden" style={{width:'calc(100% - 64px)'}}>{"borrow Component"}</div>
      <div id="Settings" className="hidden" style={{width:'calc(100% - 64px)'}}>{"Search Component"}</div>
      </div>
    </>
  );
};
export default UserDashBoard;