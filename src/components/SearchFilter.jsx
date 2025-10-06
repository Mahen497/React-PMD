import React from "react";

const SearchFilter = ({ searchTerm, setSearchTerm, category, setCategory }) => {
  return (
    <div className="card bg-white p-4 rounded-xl shadow-md mb-6 grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
      <input
        className="w-full border p-2 rounded flex-1"
        placeholder="🔍 Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded flex-1"
        placeholder="📂 Filter by category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
