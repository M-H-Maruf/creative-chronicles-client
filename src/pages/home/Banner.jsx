
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


const Banner = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="h-full w-full bg-black bg-opacity-70 -z-10"></div>

      <Link to="Brands" spy={true} smooth={true}>
        <motion.span
          className="z-10 absolute bottom-14 left-1/2 -translate-x-1/2 text-white/80 text-4xl hover:text-brand-primary"
          animate={{ y: [0, 10, 0] , x:[-18, -18, -18]}}
          transition={{ repeat: Infinity, duration: 2, type: "elastic" }}
        >
          <BsFillArrowDownCircleFill></BsFillArrowDownCircleFill>
        </motion.span>
      </Link>
      {/* particle effect */}
    </div>
  );
};

export default Banner;
