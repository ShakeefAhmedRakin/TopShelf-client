import { BsGoogle, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-base-200 py-20">
      <footer className="footer py-10 px-8 max-w-7xl mx-auto text-base-content">
        <aside className="flex flex-col items-center w-full md:items-start gap-y-4">
          <img src="/src/assets/logo.svg" className="w-20" />
          <p className="max-w-xs text-center md:text-left">
            {
              " Your Source for Expert Auto Care. Diagnose, Repair, and Drive with Confidence. Your Car's Best Friend on the Road."
            }
          </p>
          <div className="flex justify-center">
            <button className="btn btn-sm rounded-full bg-transparent border-none">
              <BsGoogle></BsGoogle>
            </button>
            <button className="btn btn-sm rounded-full bg-transparent border-none">
              <BsTwitter></BsTwitter>
            </button>
            <button className="btn btn-sm rounded-full bg-transparent border-none">
              <BsInstagram></BsInstagram>
            </button>
            <button className="btn btn-sm rounded-full bg-transparent border-none">
              <BsLinkedin></BsLinkedin>
            </button>
          </div>
        </aside>
        <nav className="flex flex-col gap-y-2 items-center w-full md:items-start md:w-fit">
          <header className="footer-title">About</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="flex flex-col gap-y-2 items-center w-full md:items-start md:w-fit">
          <header className="footer-title">Company</header>
          <a className="link link-hover">Why Car Doctor</a>
          <a className="link link-hover">About</a>
        </nav>
        <nav className="flex flex-col gap-y-2 items-center w-full md:items-start md:w-fit">
          <header className="footer-title">Support</header>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accessibility</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
