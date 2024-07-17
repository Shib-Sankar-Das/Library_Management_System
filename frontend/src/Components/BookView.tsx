import React from "react";
import { z } from "zod";
import { bookCopySchema } from "../zod_schemas/BookCopy";
type props = z.infer<typeof bookCopySchema>;
const BookView: React.FC<props> = (data: props) => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-1 mx-2">
        <div className="flex">
          <div className="w-1/2">
            <img
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-[90%] hover:shadow-slate-900 shadow-md"
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
            <p className="text-gray-600 mb-1 ">
              <span className="font-bold text-blue-400">Author:</span> {data.Author}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-bold text-blue-400">Publisher:</span> {data.Publisher}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-bold text-blue-400">Subject:</span> {data.Subject}
            </p>
            <p className="text-gray-600">
              <span className="font-bold text-blue-400">ISBN:</span> {data.ISBN}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookView;
