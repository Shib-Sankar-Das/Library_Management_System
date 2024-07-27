import React from "react";
import { z } from "zod";
import { bookCopySchema } from "../Validator/BookCopy";
type props = z.infer<typeof bookCopySchema>;
const Book: React.FC<props> = (data: props) => {
  return (
    <>
      <div className="max-w-[280px] max-h-[200px] min-h-[200px] overflow-hidden rounded-xl hover:scale-[90%]" data-name={data.Name} data-author={data.Author} data-publisher={data.Publisher} data-subject={data.Subject} data-isbn={data.ISBN} data-publishing-date={data.PublishingDate} >
        <a href="#" className="group relative block bg-black min-h-[inherit]">
          <img
            alt=""
            src={data.ImageLink}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            onError={(err) => {
              err.currentTarget.src = "./fall_back_cover.jpg";
            }}
            style={{filter:'brightness(1.5)'}}
          />

          <div className="relative p-1 sm:p-2 lg:p-2">
            <p className="text-2xl font-bold uppercase overflow-hidden text-ellipsis  tracking-widest text-white" style={{textShadow:'4px 4px 1px rgba(0,0,0, 0.9)'}} >
              {data.Name}
            </p>

            <p className="text-base font-bold text-green-600 sm:text-base">
              Author:{data.Author}
            </p>

            <div className="mt-5 sm:mt-2 lg:mt-10">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white overflow-hidden max-h-[20px] overflow-ellipsis">
                  Published by: {data.Publisher.slice(0,20)}
                </p>
                <p className="text-sm text-white overflow-hidden overflow-ellipsis">Subject: {data.Subject}</p>
                <p className="text-sm text-white">ISBN: {data.ISBN}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
export default Book;