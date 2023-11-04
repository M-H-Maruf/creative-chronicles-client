import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const App = () => {
  const location = useLocation();
  // initializing aos
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div className="font-mukta text-white/60">
      <Navbar></Navbar>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75 }}
      >
        <Outlet></Outlet>
      </motion.div>
      <Footer></Footer>
    </div>
  );
};

export default App;
