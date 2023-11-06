import { Link } from "react-scroll";
import { BsTwitter, BsYoutube, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div  data-aos="fade-up">
      <footer className="leading-5 font-semibold flex gap-10 justify-around items-center p-10 bg-[#0c0c0c] text-white/70">
        <aside className="flex flex-col gap-5 items-center justify-center">
          <Link spy={true} smooth={true} to="Banner"><img className="h-24 cursor-pointer w-24 bg-blog-primary rounded-full" src="https://i.postimg.cc/7LwBS69V/creative-chronicles-logo-transparent.png" alt="logo" /></Link>
          <p>
            CREATIVE CHRONICLES
            <br />
            A blog for creative minds.
          </p>
        </aside>
        <nav>
          <header className="mb-4 font-bold opacity-50 uppercase">Social</header>
          <div className="flex mb-2 gap-4">
            <a>
            <BsTwitter className="text-2xl cursor-pointer"></BsTwitter>
            </a>
            <a>
            <BsYoutube className="text-2xl cursor-pointer"></BsYoutube>
            </a>
            <a>
            <BsFacebook className="text-2xl cursor-pointer"></BsFacebook>
            </a>
          </div>
          <p>Copyright © 2023 - All right reserved</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
