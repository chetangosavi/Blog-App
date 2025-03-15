import { Link } from "react-router-dom";

const Navbar = () => {
    
  return (
    <div className=" shadow-md bg-white py-4">
      <div className="w-4/5 m-auto flex justify-between items-center">
        {/* Logo */}
        <Link to='/home'><div className="font-extrabold text-3xl uppercase tracking-wide cursor-pointer ">
        TechTales.
        </div></Link>
        <div>
          <button className="bg-[#074D51]  py-2 px-5 text-white cursor-pointer">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
