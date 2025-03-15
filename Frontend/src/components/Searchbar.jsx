import React, { useState } from "react";
import Modal from "./ui/Modal";

const Searchbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search blogs..."
          className="bg-transparent border py-2 w-[400px] pl-2"
        />
        <button className="bg-[#074D51] text-white px-4">Search</button>
      </div>
      <div>
        <button
          className="bg-[#074D51] text-white px-4 py-2"
          onClick={() => setModalOpen(true)}
        >
          Add Blog
        </button>
      </div>
      <Modal open={modalOpen} setOpen={setModalOpen}>
        <div className="">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Create New Blog
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter Title"
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Enter Description"
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="px-4 py-2 bg-[#074D51] text-white hover:bg-blue-700 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Searchbar;
