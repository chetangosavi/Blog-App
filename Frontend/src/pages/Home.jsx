import { useContext } from "react";
import BlogComponent from "../components/BlogComponent";
import Searchbar from "../components/Searchbar";
import { BlogContext } from "../context/BlogContext";
const Home = () => {
  const { blogsData } = useContext(BlogContext);
  return (
    <div>
      <div className="flex flex-col gap-2">
        <Searchbar />
        <div>
          {blogsData.map((elm, idx) => (
            <BlogComponent
              key={idx}
              id={idx}
              title={elm.formData.title}
              description={elm.formData.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
