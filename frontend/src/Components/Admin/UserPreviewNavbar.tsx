import React from "react";
import { useNavigate } from "react-router-dom";
interface prop {
  _id: string,
  Avatar: string,
  Name: string,
  Email: string,
  SetAttribute: (attr: string) => void,
  SearchTable: () => void,
  SetSearch: (word: string) => void
};
const UserPreviewNavbar: React.FC<prop> = ({ _id, Email, Name, Avatar, SearchTable, SetSearch, SetAttribute }) => {
  const navigate = useNavigate();
  const [Key, SetKey] = React.useState("BookName");
  return (<div className="navbar bg-base-100">
    <div className="flex-1">
      <button className="btn btn-ghost text-xl"
        onClick={() => {
          navigate('/admin-dashboard');
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
          width={"40px"}
          height={"40px"}
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 7l-5 5 5 5"
          ></path>
        </svg>
      </button>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input
          type="text"
          placeholder={"Search by " + Key}
          onInput={e => {
            SetSearch(e.currentTarget.value.toLowerCase());
          }}
          className="input input-bordered w-24 md:w-auto"
          onKeyDown={e => {
            if (e.key == "Enter") {
              SearchTable();
            }
          }}
        />
      </div>
      <select
        className="select select-primary w-full max-w-xs"
        value={Key}
        // defaultValue={"BookName"}
        onChange={e => {
          SetKey(e.target.value);
          SetAttribute(e.target.value);
        }}
      >
        <option>BookName</option>
        <option>_id</option>
        <option>ISBN</option>
        <option>BorrowDate</option>
        <option>RenewalDate</option>
      </select>

      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="Button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt={Name}
              src={Avatar}
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-80 p-2 shadow overflow-auto">
          <li>
            <a className="justify-between ">
              {Name}
            </a>
          </li>
          <li>
            <a >
              {Email}
            </a>
          </li>
          <li>
            <a >
              {_id}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>)
}
export default UserPreviewNavbar;