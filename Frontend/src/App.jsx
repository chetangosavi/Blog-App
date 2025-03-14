import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <>
    <div className="flex flex-col">
    <Navbar />
      <div className="w-4/5 m-auto mt-8 flex flex-col">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/blog/:id" element={<Blog/>
        }/>
      </Routes>
        
      </div>
    </div>
      
    </>
  );
};

export default App;
