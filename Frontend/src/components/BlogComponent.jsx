import { MdOutlineExpandMore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import { useContext } from "react";

const BlogComponent = ({ id, title, description }) => {
  const Navigate = useNavigate();

  const {blogsData,setBlogsData} = useContext(BlogContext)

  const handleOnClick = () => {
    Navigate(`/blog/${id}`);
  };

  const handleRemove = ()=>{
    const updatedBlogs = blogsData.filter((elm,idx)=>idx!=id);
    setBlogsData(updatedBlogs); 
    localStorage.setItem("blogsData", JSON.stringify(updatedBlogs)); 
  }

  return (
    <div className="mt-3 shadow-lg p-8 flex justify-between relative">
      <div className="w-[90%]">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="flex gap-2 justify-center items-center w-[10%]">
        <button className="text-sm" onClick={handleOnClick}>
          See More
        </button>
        <MdOutlineExpandMore />
      </div>
      <div className="absolute top-4 right-4 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer hover:bg-gray-300"
      onClick={handleRemove}>
        &times;
      </div>
    </div>
  );
};

export default BlogComponent;
