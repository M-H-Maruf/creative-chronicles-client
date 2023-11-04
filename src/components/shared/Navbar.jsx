import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // active route styling
  const activeLink =
    "text-blog-primary font-bold underline decoration-2 underline-offset-4";

  // navbar routes
  const navLinks = (
    <div className="text-white/60 flex flex-col lg:flex-row gap-5">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : "text-white/60")}
      >
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          HOME
        </motion.p>
      </NavLink>
      <NavLink
        to="/all-blogs"
        className={({ isActive }) => (isActive ? activeLink : "text-white/60")}
      >
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          ALL BLOGS
        </motion.p>
      </NavLink>
      <NavLink
        to="/featured-blogs"
        className={({ isActive }) => (isActive ? activeLink : "text-white/60")}
      >
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          FEATURED BLOGS
        </motion.p>
      </NavLink>
      <NavLink
        to="/add-blogs"
        className={({ isActive }) => (isActive ? activeLink : "text-white/60")}
      >
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          ADD BLOGS
        </motion.p>
      </NavLink>
      <NavLink
        to="/wishlist"
        className={({ isActive }) => (isActive ? activeLink : "text-white/60")}
      >
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          WISHLIST
        </motion.p>
      </NavLink>
    </div>
  );
  return (
    <div className="w-full h-20 flex p-4 justify-between items-center">
      {/* navbar start */}
      <div className="h-full flex gap-5 justify-center items-center">
        <img
          className="h-full"
          src="src/assets/icons/creative-chronicles-logo-transparent.png"
          alt="creative chronicles logo"
        />
        <span className="h-full w-1 bg-blog-primary/50 rounded-full"></span>
        <Link
          to="/"
          className="normal-case text-xl font-orbitron tracking-widest px-2"
        >
          CREATIVE CHRONICLES
        </Link>
      </div>
      {/* navbar end */}
      <div className="flex gap-4">
        {/* navbar links */}
        <div className="xl:flex hidden justify-center items-center">{navLinks}</div>
        {/* navbar auth */}
        <div className="">
          <Link className="group" to="/auth">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-blog-primary group-hover:text-white/90 group-hover:bg-blog-primary px-4 py-2 border-2 border-blog-primary rounded"
            >
              LOG IN / REGISTER
            </motion.div>
          </Link>
        </div>
        {/* navbar drawer */}
        <div className="xl:hidden"></div>
      </div>
    </div>
  );
};

export default Navbar;
