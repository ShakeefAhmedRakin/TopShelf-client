import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { BiSolidCarMechanic } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "sonner";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li className="navigation-link">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="navigation-link">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="navigation-link">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li className="navigation-link">
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="navigation-link">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar my-5 max-w-7xl px-2 md:px-8 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 z-[50] py-5 pl-8 w-screen -ml-2 bg-white space-y-4 font-semibold lg:w-0"
            >
              {links}
            </ul>
          </div>
          <img
            src="/src/assets/logo.svg"
            className="hidden md:flex aspect-video w-32"
          />
        </div>
        <div className="navbar-center hidden lg:flex mr-8">
          <ul className="flex text-lg font-medium gap-9">{links}</ul>
        </div>
        <div className="navbar-end gap-x-1">
          <div className="flex ml-2 md:ml-4 gap-x-4">
            {user ? (
              <>
                <Link to="/bookings">
                  <button className="text-2xl btn rounded-full bg-transparent text-gray-800">
                    <BiSolidCarMechanic></BiSolidCarMechanic>
                  </button>
                </Link>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-circle p-[2px] bg-transparent hover:scale-[1.02] duration-300 border-primary hover:bg-transparent hover:border-primary"
                  >
                    <img
                      src={user.photoURL}
                      className="rounded-full aspect-square"
                    />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[50] menu p-4 shadow rounded-md w-fit bg-white"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-x-5 gap-y-2">
                      <div>
                        <p className="text-primary font-semibold">
                          {user?.displayName}
                        </p>
                        <p className="text-primary font-semibold">
                          {user?.email}
                        </p>
                      </div>
                      <div className="w-fit">
                        <a
                          className="btn btn-primary bg-transparent text-primary text-base font-semibold px-5 border-primary normal-case hover:bg-primary hover:border-primary hover:text-white whitespace-nowrap"
                          onClick={handleLogOut}
                        >
                          Log out
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="btn btn-primary bg-transparent text-primary text-base font-semibold px-5 border-primary normal-case hover:bg-primary hover:border-primary hover:text-white ml-2 md:ml-4"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
