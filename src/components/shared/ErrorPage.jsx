import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import Particle from './Particle';

const ErrorPage = () => {
    useEffect(() => {
        Aos.init({
          easing: "ease-out-quart",
          delay: 0,
          duration: 750,
        });
      }, []);
  return (
    <div data-aos="fade-down" className=" bg-black/80 bg-[url('https://i.postimg.cc/sgNF6ptt/retrosupply-j-Lw-VAUt-LOAQ-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center min-h-screen pt-28 tracking-normal text-justify">
      <div className="z-10"><h1
        data-aos="fade-down"
        className="text-9xl text-blog-primary font-black font-orbitron mb-20 text-center"
      >
        404
      </h1>

      <div data-aos="zoom-in" className="bg-black/50 m-10 md:p-24 p-14 rounded shadow flex-col flex justify-center items-center">
        <h2 className="text-4xl font-teko font-bold mb-2 text-left">PAGE NOT FOUND</h2>
        <Link to="/" className="font-bold">
          <button className="btn border-2 bg-transparent font-bold my-4 border-blog-primary text-blog-primary hover:bg-blog-primary hover:border-blog-primary hover:text-white">
            GO HOME
          </button>
        </Link>
      </div>
      </div>
      <Particle></Particle>
    </div>
  );
};

export default ErrorPage;
