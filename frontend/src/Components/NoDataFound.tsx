import React from "react";
const NoDataFound: React.FC = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto text-center">
          <div className="pb-6">
            <img src="./notFile.svg" width={150} className="mx-auto" />
          </div>
          <h3 className="text-gray-100 text-4xl font-semibold sm:text-5xl">
           No data found
          </h3>
          <p className="text-gray-600 mt-3">
            We found no data on the server
          </p>
        </div>
      </div>
    </>
  );
}
export default NoDataFound;