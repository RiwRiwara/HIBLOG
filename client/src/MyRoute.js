import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/pages/Mainpage";
import Footer from "./components/base/footer/footer";
import Navbar from "./components/base/navbar/navbar";
import FromComponent from "./components/pages/FromComponent";
import Blogs from "./components/pages/Blogs";
import SingleComponent from "./components/components/blogCard/SingleComponent";

const MyRoute = () => {
  return (
    <div>
        <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create" element={<FromComponent />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<SingleComponent />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default MyRoute;
