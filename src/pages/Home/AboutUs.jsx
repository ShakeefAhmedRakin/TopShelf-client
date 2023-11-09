import { PiBooksFill } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 mt-12">
      <section className="py-10 lg:py-20 bg-primaryLight font-poppins dark:bg-primaryDark dark:bg-opacity-70 rounded-lg shadow-lg px-2">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-gray-300">
                  <h1 className="text-sm text-white dark:text-primaryDark font-extrabold uppercase bg-secondary dark:bg-gray-900 p-2 rounded-lg">
                    Who we are?
                  </h1>
                  <h1 className="mt-2 text-3xl font-black text-white md:text-5xl dark:text-gray-300">
                    About Us
                  </h1>
                </div>
                <hr className="mb-2" />
                <p className="px-4 mb-10 text-base leading-7 text-gray-200 dark:text-gray-300">
                  Welcome to TopShelf, a place where knowledge, community, and
                  culture converge. Established 2022, we have been a cornerstone
                  of our community, fostering a love for reading and lifelong
                  learning.
                </p>
                <div className="flex flex-wrap items-center">
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-secondary dark:bg-gray-900 rounded-lg">
                      <p className="mb-2 text-3xl font-bold text-white dark:text-gray-400">
                        <PiBooksFill className="text-3xl"></PiBooksFill>
                        3,526,206
                      </p>
                      <h2 className="text-lg text-white dark:text-gray-400">
                        Ebooks Borrowed
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-secondary dark:bg-gray-900 rounded-lg">
                      <span className="text-blue-500 dark:text-blue-400"></span>
                      <p className="mb-2 text-3xl font-bold text-white dark:text-gray-400">
                        <BsPeopleFill className="text-3xl"></BsPeopleFill>
                        3,952,102
                      </p>
                      <h2 className="flex items-center gap-2 text-lg text-white dark:text-gray-400">
                        Unique Visitors
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[400px] mb-10 lg:w-1/2 lg:mb-0 border-2">
              <img
                src="https://i.ibb.co/bzHDm1k/pexels-abby-chung-1106468.jpg"
                alt=""
                className="relative z-40 object-cover w-full h-full rounded"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
