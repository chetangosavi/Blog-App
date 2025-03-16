import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const {isAuthenticated} = useAuth();

  return (
    <div className="flex flex-col">
      {isAuthenticated && <Navbar />}
      
      <div className="w-4/5 m-auto mt-8 flex flex-col">
        <Routes>
          {/* Public Route: Auth Page */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Auth />} />

          {/* Protected Routes (Only for Authenticated Users) */}
          {isAuthenticated ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/blog/:id" element={<Blog />} />
            </>
          ) : (
            // Redirect unauthenticated users
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </div>
    </div>
  );
};

export default App;
