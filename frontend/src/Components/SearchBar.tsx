import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="bg-[#00000000] p-2">
      <div className="max-w-7xl mx-auto flex items-center max-h-[10dvh]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-2 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
