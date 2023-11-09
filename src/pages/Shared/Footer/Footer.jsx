import { BsGoogle, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { ImBooks } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-secondary py-20">
      <footer className="py-10 px-8 max-w-7xl mx-auto text-base-content">
        <aside className="flex flex-col items-center w-full gap-y-4">
          <div className="flex gap-2 items-center text-primaryLight">
            <ImBooks className="text-5xl"></ImBooks>
            <h1 className="font-bold text-2xl">
              <span className="text-white">Top</span>Shelf
            </h1>
          </div>
          <p className="max-w-xl text-center text-white">
            {
              "Our mission is to provide access to a world of information, offer a diverse collection of books and resources, and create an environment where individuals of all ages can explore, discover, and connect."
            }
          </p>
          <div className="flex justify-center">
            <button className="btn btn-sm rounded-full bg-transparent border-none">
              <BsGoogle className="text-white"></BsGoogle>
            </button>
            <button className="btn btn-sm rounded-full bg-transparent border-none">
              <BsTwitter className="text-white"></BsTwitter>
            </button>
            <button className="btn btn-sm rounded-full bg-transparent border-none">
              <BsInstagram className="text-white"></BsInstagram>
            </button>
            <button className="btn btn-sm rounded-full bg-transparent border-none">
              <BsLinkedin className="text-white"></BsLinkedin>
            </button>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
