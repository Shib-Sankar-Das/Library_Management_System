import React from "react";
import { z } from "zod";
import { bookCopySchema } from "../Validator/BookCopy";
type props = z.infer<typeof bookCopySchema>;
const BookView: React.FC<props> = (data: props) => {
  return (
    <>
      <div className="max-w-md bg-white shadow-lg rounded-2xl overflow-hidden ">
        <div className="flex">
          <div className="w-1/2">
            <img
              className=" p-[2px] object-cover object-center rounded-2xl w-max h-max max-w-[100%] min-h-[300px] max-h-[300px] transition-transform duration-500 hover:scale-[90%] hover:shadow-slate-900 shadow-md"
              src={data.ImageLink}
              alt="Book cover"
              onError={(err)=>{
                err.currentTarget.src = './fall_back_cover.jpg';
              }}
            />
          </div>
          <div className="w-1/2 p-4 text-left">
            <h2 className="text-xl font-semibold mb-2 text-ellipsis text-nowrap">
              {data.Name}
            </h2>
            <p className="text-black mb-1 bg-[#c0c0c0]">
              <span className="font-bold text-red-500">Author:</span> {data.Author}
            </p>
            <p className="text-black mb-1 bg-[#c0c0c0]">
              <span className="font-bold text-red-500">Publisher:</span> {data.Publisher}
            </p>
            <p className="text-black mb-1 bg-[#c0c0c0]">
              <span className="font-bold text-red-500">Subject:</span> {data.Subject}
            </p>
            <p className="text-black bg-[#c0c0c0]">
              <span className="font-bold text-red-500">ISBN:</span> {data.ISBN}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookView;
