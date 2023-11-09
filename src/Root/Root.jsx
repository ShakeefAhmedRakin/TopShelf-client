import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from "sonner";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Root = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <Toaster richColors />
      <div className="font-inter bg-white dark:bg-[#111827]">
        <ScrollRestoration></ScrollRestoration>
        <Navbar toggleTheme={toggleTheme}></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Root;
