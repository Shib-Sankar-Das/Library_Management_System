import React from "react";
import { z } from "zod";
import { UploadBook } from "../../Validator/UploadBookValidator";
import { toast } from "react-toastify";
import BottomToastOption from "../../Options/BottomToastOption";
const AddBooks: React.FC = () => {

  const [Data, SetData] = React.useState<z.infer<typeof UploadBook>>({
    Name: "",
    Author: "",
    Subject: "",
    ISBN: "",
    Publisher: "",
    PublishingDate: "",
    Copies: 0
  });
  const [CoverPage, SetCoverPage] = React.useState<File | null>(null);


  const handleCoverPageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {

    const Image: HTMLImageElement = document.querySelector<HTMLImageElement>("img#cover-update")!;
    SetCoverPage((prevCover) => {
      try {
        if (
          e.target.files &&
          (e.target.files as FileList)[0].size <= 40 * 1024
        ) {
          Image.src = URL.createObjectURL(e.target.files![0]);
          return e.target.files[0];
        } else {
          toast.error("image must be under 40KB retaining previous image", BottomToastOption);
          return prevCover;
        }
      } catch (e) {
        Image.src = "./invalid.svg";
        toast.error("please select a file", BottomToastOption);
        return null;
      }
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(Data,CoverPage);
    const form_data = new FormData();
    if (CoverPage) form_data.set("CoverPage", CoverPage);
    for (const key of Object.entries(Data)) {
      form_data.set(key[0], key[1]?.toString());
    }
    // console.group('form_data');
    // for (const key of form_data.entries())
    //   console.log(key);
    // console.groupEnd();
    const response = fetch('/api/books/admin/',{
      method:"POST",
      body:form_data
    }).then(res=>{
      if(res.status==200){
        toast.success(res.statusText,BottomToastOption);
      }else{
        toast.error(res.statusText,BottomToastOption);
      }
      return res.json()
    });
    response.then(console.log);
  }

  return (
    <form className="flex flex-col md:flex-row items-center justify-center min-h-screen  p-4 overflow-auto max-h-screen"
      onSubmit={handleSubmit}
    >
      <div className="w-[60%] md:w-1/2 lg:w-1/3 p-4">
        <label htmlFor="CoverPage">
          <img
            src={"./add-books.svg"}
            alt="Placeholder"
            style={{ transform: "scale(0.75)" }}
            className="w-full rounded-xl shadow-lg"
            id="cover-update"
          />
        </label>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4  rounded-md shadow-lg mt-4 md:mt-0">
        <h2 className="text-2xl font-semibold mb-4">{"Add a new book"}</h2>
        <div>
          <div className="mb-4">
            <input
              type="file"
              id="CoverPage"
              className="hidden"
              onChange={handleCoverPageChange}
            />
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="Name"
            >
              Name
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="Name"
              type="text"
              placeholder="Book Name"
              value={Data.Name}
              onChange={(e) => {
                SetData(prev => {
                  return { ...prev, Name: e.target.value }
                });
              }}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="Author"
            >
              Author
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="Author"
              type="text"
              placeholder="Author"
              value={Data.Author}
              onChange={(e) => {
                SetData(prev => {
                  return { ...prev, Author: e.target.value }
                });
              }}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="PublishingDate"
            >
              publishing date
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="PublishingDate"
              type="date"
              value={Data.PublishingDate}
              onChange={(e) => {
                SetData(prev => {
                  return { ...prev, PublishingDate: e.target.value }
                });
              }}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="Publisher"
            >
              publisher name
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="Publisher"
              type="text"
              placeholder="publisher name"
              value={Data.Publisher}
              onChange={(e) => {
                SetData(prev => {
                  return { ...prev, Publisher: e.target.value }
                });
              }}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="Subject"
            >
              Subject
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="Subject"
              type="text"
              placeholder="subject"
              value={Data.Subject}
              onChange={(e) => {
                SetData(prev => {
                  return { ...prev, Subject: e.target.value }
                });
              }}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="Copies"
            >
              Copies
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="Copies"
              type="number"
              min={1}
              placeholder="Copies"
              value={Data.Copies}
              onChange={(e) => {
                SetData(prev => {
                  return { ...prev, Copies: parseInt(e.target.value) }
                });
              }}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-left mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="ISBN"
            >
              ISBN
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="ISBN"
              type="number"
              minLength={10}
              maxLength={13}
              placeholder="ISBN number"
              value={Data.ISBN}
              onChange={(e) => {
                SetData(prev => {
                  return { ...prev, ISBN: e.target.value }
                });
              }}
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