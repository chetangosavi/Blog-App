import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import Modal from "./modal/Modal";
import BlogForm from "./BlogForm";

const Navbar = () => {
    
  return (
    <div className=" shadow-md bg-white py-4">
      <div className="w-4/5 m-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-extrabold text-3xl uppercase tracking-wide ">
        TechTales.
        </div>
      </div>
    </div>
  );
};

export default Navbar;
