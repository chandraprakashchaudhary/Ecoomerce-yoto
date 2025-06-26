import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Auth from "../Pages/Auth/Auth";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Error from "../Pages/Error/Error";
import AuthCheck from "../AuthCheck/AuthCheck";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto bg-white dark:bg-gray-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
