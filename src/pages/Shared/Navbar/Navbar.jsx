import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { ImBooks } from "react-icons/im";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "sonner";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";

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
    </>
  );

  return (
    <>
      <div className="navbar my-5 max-w-7xl mx-auto px-2 border-b-secondary border-2 border-t-0 border-l-0 border-r-0">
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
          <div className="hidden md:flex gap-2 items-center text-primaryLight">
            <ImBooks className="text-5xl"></ImBooks>
            <h1 className="font-bold text-2xl">
              <span className="text-secondary">Top</span>Shelf
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex text-lg font-medium gap-9">{links}</ul>
        </div>
        <div className="navbar-end gap-x-1">
          <div className="flex ml-2 md:ml-4 gap-x-4">
            {user ? (
              <div className="flex items-center gap-2 rounded-md">
                <div className="w-full">
                  <p className="text-primaryLight font-semibold text-lg">
                    {user?.displayName}
                  </p>
                </div>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-circle p-[2px] bg-transparent hover:scale-[1.02] duration-300 border-primaryLight hover:bg-transparent hover:border-primaryLight"
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
                    <div className="flex flex-col justify-between items-start gap-y-2">
                      <div>
                        <a
                          className="btn btn-primary bg-transparent text-primaryLight text-base font-semibold px-5  normal-case hover:text-white hover:bg-primaryLight flex items-center border-none whitespace-nowrap flex-nowrap w-full"
                          onClick={handleLogOut}
                        >
                          Log out
                          <span className="text-2xl">
                            <IoIosLogOut></IoIosLogOut>
                          </span>
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn btn-primary bg-transparent text-primaryLight text-base font-semibold px-5  normal-case hover:text-white hover:bg-primaryLight ml-2 md:ml-4 flex items-center border-none"
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

export default Navbar;
