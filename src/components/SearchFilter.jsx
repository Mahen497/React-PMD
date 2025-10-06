import React from "react";

const SearchFilter = ({ searchTerm, setSearchTerm, category, setCategory, show }) => {
  return (
    <div className={`${show ? '': 'hidden opacity-0 w-0 pointer'}`}>
      <div className="card bg-white p-4 rounded-xl shadow-md mb-6 shrink flex flex-col gap-4 fixed md:relative w-1/2 md:w-[250px] z-50 md:z-0 h-[calc(100%-6px)] top-0 left-0 ">
        <input
          className="w-full border p-2 rounded "
          placeholder="🔍 Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          className="w-full border p-2 rounded "
          placeholder="📂 Filter by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchFilter;
