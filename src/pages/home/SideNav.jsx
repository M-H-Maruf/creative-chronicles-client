import { Link } from "react-scroll";
import { AiTwotoneHome } from "react-icons/ai";
import { RiServiceFill } from "react-icons/ri";
import { FaNoteSticky } from "react-icons/fa6";
import { TbBrandStrava } from "react-icons/tb";
import DarkModeToggle from "react-dark-mode-toggle";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SideNav = () => {
  const {isDarkMode, setIsDarkMode} = useContext(AuthContext);
  return (
    <div className="fixed top-1/2 z-100 right-0 -translate-y-1/2 m-2 bg-black/50 flex flex-col justify-center items-center p-2 py-6 pt-11 rounded-full gap-6">
      <div
        className="tooltip rotate-90 mb-3 tooltip-left tooltip-warning flex justify-center items-center"
        data-tip="MODE-TOGGLE"
        onClick={()=>setIsDarkMode(!isDarkMode)}
      >
        <DarkModeToggle
            checked={isDarkMode}
            size={60}
          />
      </div>
      <div className="tooltip tooltip-left tooltip-warning" data-tip="HOME">
        <Link spy={true} smooth={true} to="Banner">
          <AiTwotoneHome className="text-2xl text-white/40 hover:text-blog-primary"></AiTwotoneHome>
        </Link>
      </div>
      <div className="tooltip tooltip-left tooltip-warning" data-tip="BRANDS">
        <Link spy={true} smooth={true} to="Brands">
          <TbBrandStrava className="text-2xl text-white/40 hover:text-blog-primary"></TbBrandStrava>
        </Link>
      </div>
      <div
        className="tooltip tooltip-left tooltip-warning"
        data-tip="TESTIMONIALS"
      >
        <Link spy={true} smooth={true} to="Testimonials">
          <FaNoteSticky className="text-2xl text-white/40 hover:text-blog-primary"></FaNoteSticky>
        </Link>
      </div>
      <div className="tooltip tooltip-left tooltip-warning" data-tip="DEALS">
        <Link spy={true} smooth={true} to="Deals">
          <RiServiceFill className="text-2xl text-white/40 hover:text-blog-primary"></RiServiceFill>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
