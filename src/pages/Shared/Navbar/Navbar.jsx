import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { ImBooks } from "react-icons/im";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "sonner";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import PropTypes from "prop-types";
import { BsBookHalf } from "react-icons/bs";

const Navbar = ({ toggleTheme }) => {
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
      <li className="navigation-link dark:text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <>
          <li className="navigation-link dark:text-white">
            <NavLink to="/borrowed">Borrowed</NavLink>
          </li>
          <li className="navigation-link dark:text-white">
            <NavLink to="/AllBooks">All Books</NavLink>
          </li>
          <li className="navigation-link dark:text-white">
            <NavLink to="/addbook">Add Book</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar py-5 max-w-7xl mx-auto px-2 border-b-secondary border-2 border-t-0 border-l-0 border-r-0 dark:border-b-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-black dark:text-white"
            >
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
              className="dropdown-content mt-3 z-[50] py-5 pl-8 w-screen -ml-2  bg-white space-y-4 font-semibold lg:w-0 dark:bg-[#111827] dark:border-b-white border-t-2 border-b-2"
            >
              {user ? (
                <>
                  <div className="flex items-center gap-2 rounded-md">
                    <div className="w-full flex gap-2 items-center">
                      <div className="flex items-center gap-2 bg-primaryLight dark:bg-primaryDark rounded-lg px-2 p-[4px] w-1/2">
                        <p className="text-white font-semibold text-lg">
                          {user?.displayName}
                        </p>
                        <img
                          src={user?.photoURL}
                          className="rounded-full aspect-square h-10 border-white border-[2px]"
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {links}
            </ul>
          </div>
          <div className="hidden md:flex gap-2 items-center text-primaryLight dark:text-primaryDark">
            <ImBooks className="text-5xl"></ImBooks>
            <h1 className="font-bold text-2xl">
              <span className="text-secondary dark:text-white">Top</span>Shelf
            </h1>
          </div>
          <button
            className="btn btn-circle btn-sm md:btn-md bg-transparent hover:bg-transparent hover:border-white border-[1px] duration-300 rounded-none ml-6"
            onClick={toggleTheme}
          >
            <BsBookHalf className="text-xl md:text-3xl text-primaryLight dark:text-primaryDark"></BsBookHalf>
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex text-lg font-medium gap-9">{links}</ul>
        </div>
        <div className="navbar-end gap-x-1">
          <div className="flex ml-2 md:ml-4 gap-x-4">
            {user ? (
              <div className="flex items-center gap-2 rounded-md">
                <div className="w-full flex gap-2 items-center">
                  <div className="items-center gap-2 bg-primaryLight dark:bg-primaryDark rounded-lg px-2 p-[4px] hidden md:flex">
                    <p className="text-white font-semibold text-lg">
                      {user?.displayName}
                    </p>
                    <img
                      src={user?.photoURL}
                      className="rounded-full aspect-square h-10 border-white border-[2px]"
                    />
                  </div>
                  <a
                    className="btn btn-primary bg-transparent text-primaryLight text-base font-semibold normal-case hover:text-white hover:bg-primaryLight flex items-center border-none whitespace-nowrap dark:bg-primaryDark dark:text-white"
                    onClick={handleLogOut}
                  >
                    Log out
                    <span className="text-2xl">
                      <IoIosLogOut></IoIosLogOut>
                    </span>
                  </a>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn btn-primary bg-transparent text-primaryLight text-base font-semibold px-5  normal-case hover:text-white hover:bg-primaryLight ml-2 md:ml-4 flex items-center border-none dark:bg-primaryDark dark:text-white"
              >
                Login
                <span className="text-2xl">
                  <IoIosLogIn></IoIosLogIn>
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func,
};

export default Navbar;
