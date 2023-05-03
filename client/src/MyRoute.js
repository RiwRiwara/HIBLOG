import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from "./components/pages/Mainpage";
import Footer from "./components/base/footer/footer";
import FromComponent from "./components/pages/FromComponent";
import Blogs from "./components/pages/Blogs";
import SingleComponent from "./components/components/blogCard/SingleComponent";
import Profile from "./components/pages/Profile/Profile";
import Login from "./components/pages/LoginPage/Login";
import Signup from "./components/pages/SignupPage/Signup";

const MyRoute = () => {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create" element={<FromComponent />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<SingleComponent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default MyRoute;
