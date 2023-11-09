import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "sonner";
import { useContext } from "react";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully logged in. Redirecting...");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Successfully logged in. Redirecting...");
        e.target.reset();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 md:px-8 my-12">
        <div className="flex gap-5 lg:gap-10 items-start justify-between">
          {/* FORM */}
          <div className="flex-1">
            <div className="w-full py-16 px-8 md:px-12 lg:px-20 rounded-xl">
              <form className="flex flex-col" onSubmit={handleLogin}>
                <h1 className="dark:text-white text-center text-2xl lg:text-4xl font-semibold mb-0">
                  Login
                </h1>
                <label className="dark:text-white text-base lg:text-lg font-semibold mt-6 mb-3">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="py-3 px-4 border-[1px] rounded-xl text-sm dark:text-white dark:bg-gray-700"
                />
                <label className="dark:text-white text-base lg:text-lg font-semibold mt-6 mb-3">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  required
                  className="py-3 px-4 border-[1px] rounded-xl text-sm dark:text-white dark:bg-gray-700"
                />
                <button className="dark:bg-primaryDark border-none btn mt-8 btn-primaryLight bg-primaryLight hover:bg-primaryLight text-white text-base px-5 border-primaryLight normal-case hover:border-primaryLight hover:text-white">
                  Log In
                </button>
                <p className="my-7 font-medium text-center dark:text-white">
                  Or Login With
                </p>
              </form>
              <div className="flex justify-center items-center gap-4">
                <button className="btn btn-circle" onClick={handleGoogleSignIn}>
                  <FcGoogle className="text-xl"></FcGoogle>
                </button>
              </div>
              <p className="mt-12 dark:text-white text-center font-medium text-sm lg:text-base">
                {"Don't have an account? "}
                <Link to="/register">
                  <span className="link link-hover text-primaryLight dark:text-primaryDark">
                    Sign Up
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
