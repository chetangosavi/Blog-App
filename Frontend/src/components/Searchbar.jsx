import React from "react";

const Searchbar = () => {
  return (
    <div className="">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search blogs..."
          className="bg-transparent border py-2 w-[400px] pl-2"
        />
        <button className="bg-[#074D51] text-white px-4">Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
