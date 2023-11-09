import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const Gallery = () => {
  const slides = (
    <>
      <SwiperSlide>
        <img
          className="w-full object-cover h-full object-center rounded-lg"
          src="https://images.pexels.com/photos/7244561/pexels-photo-7244561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full object-cover h-full object-center rounded-lg"
          src="https://images.pexels.com/photos/7244559/pexels-photo-7244559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full object-cover h-full object-center rounded-lg"
          src="https://images.pexels.com/photos/7244563/pexels-photo-7244563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </SwiperSlide>
    </>
  );

  return (
    <>
      <div className="px-2">
        <div className="max-w-7xl mx-auto my-12 relative flex justify-center items-end">
          <div className="absolute bg-black bottom-0 z-10 w-full bg-opacity-60 rounded-b-lg py-2 px-2">
            <h1 className="text-white text-center font-bold text-base md:text-xl mb-2">
              Gallery
            </h1>
            <h1 className="text-white text-center max-w-lg mx-auto text-xs md:text-lg">{`Take a visual journey through our vibrant community, our beautiful reading spaces, and the many engaging events that have brought smiles to our visitors' faces.`}</h1>
          </div>
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
            className="mySwiper h-[240px] md:h-[550px] z-0"
          >
            {slides}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Gallery;
