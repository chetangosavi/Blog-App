import { useState } from "react";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import Modal from "./modal/Modal";
import BlogForm from "./BlogForm";

const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOnClick = ()=>{
        setModalOpen(true)
    }
  return (
    <div className=" shadow-md bg-white py-4">
      <div className="w-4/5 m-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-extrabold text-3xl uppercase tracking-wide ">
        TechTales.
        </div>


        {/* Buttons & Cart */}
        <div className="flex items-center gap-5">
          <button className="px-5 py-2 bg-[#074D51] text-white transition-all duration-200 hover:bg-blue-900 shadow-md" onClick={handleOnClick}>
            Add Blog
          </button>
        </div>
      </div>
      <div>
        <Modal open={modalOpen} setOpen={setModalOpen}>
            <BlogForm setOpen={setModalOpen}/>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
