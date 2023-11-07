import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from "sonner";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="font-inter">
      <ScrollRestoration></ScrollRestoration>
      <Toaster richColors />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
