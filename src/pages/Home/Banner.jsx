import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-2">
      <section className="bg-white dark:bg-gray-900 max-w-7xl mx-auto px-2 mt-12 relative flex justify-center items-center">
        <img
          src="https://i.ibb.co/10z9SPK/bg-bggenerator-com.png"
          className="px-2 absolute object-cover h-full w-full opacity-100 object-top"
        />
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-28 lg:px-12 z-10 flex flex-col  justify-center items-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Welcome to the World of Knowledge.
          </h1>
          <p className="mb-8 text-lg font-medium text-gray-700 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 bg-white bg-opacity-40 p-3 rounded-lg shadow-lg">
            Step into a world of books, a treasure trove of knowledge that
            awaits your curiosity. Our library is your gateway to boundless
            adventures, a place where stories come to life, and learning knows
            no bounds.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to={"/register"}>
              <button className="btn bg-primaryLight text-white font-bold hover:bg-primaryLight">
                Sign Up Now
              </button>
            </Link>
          </div>
        </div>

        <hr />
      </section>
    </div>
  );
};

export default Banner;
