import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const Banner = () => {
  const slides = (
    <>
      <SwiperSlide>
        <img
          className="w-full object-cover h-full object-top  rounded-t-lg"
          src="https://images.pexels.com/photos/8199703/pexels-photo-8199703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full object-cover h-full object-top  rounded-t-lg"
          src="https://images.pexels.com/photos/3431444/pexels-photo-3431444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full object-cover h-full object-center  rounded-t-lg"
          src="https://images.pexels.com/photos/9572625/pexels-photo-9572625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </SwiperSlide>
    </>
  );
  return (
    <div className="px-2">
      <section className="bg-white dark:bg-gray-900 max-w-7xl mx-auto px-2 relative flex justify-center items-center">
        <img
          src="https://i.ibb.co/10z9SPK/bg-bggenerator-com.png"
          className="dark:hidden px-2 absolute object-cover h-full w-full object-bottom"
        />
        <img
          src="https://i.ibb.co/wwZtNWs/bg-bggenerator-com.jpg"
          className="hidden dark:flex px-2 absolute object-cover h-full w-full  object-bottom opacity-70"
        />
        <div className="py-0 px-4 mx-auto w-full text-center lg:pt-28 lg:px-12 z-10 flex flex-col justify-center items-center">
          <div className="w-full">
            <h1 className="my-12 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-300">
              Welcome to the World of Knowledge
            </h1>
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Pagination, Autoplay]}
              className="mySwiper aspect-video  max-h-[450px] w-full z-10 border-t-2 border-primaryLight dark:border-primaryDark rounded-t-lg"
            >
              {slides}
            </Swiper>
            <p className="mb-8 text-lg font-medium text-gray-700 lg:text-xl sm:px-16 xl:px-48 bg-white bg-opacity-30 dark:bg-opacity-20 p-3 rounded-b-lg shadow-lg dark:text-gray-200">
              Step into a world of books, a treasure trove of knowledge that
              awaits your curiosity. Our library is your gateway to boundless
              adventures, a place where stories come to life, and learning knows
              no bounds.
            </p>
          </div>

          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to={"/register"}>
              <button className="btn bg-secondary text-white font-bold hover:bg-secondary border-none">
                Sign Up Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
