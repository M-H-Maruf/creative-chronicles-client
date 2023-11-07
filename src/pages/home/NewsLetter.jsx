import axios from "axios";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const NewsLetter = () => {

  const handleNewsletter = async (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;

    const newEmail = {
      email
    };

    try {
      const response = await axios.post("http://localhost:5000/newsletters/subscribe", {withCredentials: true}, 
        JSON.stringify(newEmail), 
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
    
      if (response.data.insertedId) {
        form.email.value = '';
        Swal.fire({
          title: "Success!",
          text: "Thank you for subscribing to our newsletter!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed To subscribe to news letter!",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed To subscribe to news letter!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
    
  };

  return (
    <div className="py-24 px-4 md:px-28 flex justify-center items-center z-20">
      <div
        data-aos="flip-right"
        className=" bg-black/80 bg-[url('https://i.postimg.cc/sgNF6ptt/retrosupply-j-Lw-VAUt-LOAQ-unsplash.jpg')] bg-cover bg-center bg-blend-darken shadow-2xl py-24 px-4 md:px-28 gap-4 rounded-lg w-full h-full flex flex-col justify-center items-center"
      >
        <h1
          data-aos="fade-right"
          className="aos-init aos-animate font-teko mb-6 font-bold text-blog-primary text-5xl aos-init aos-animate"
        >
          NEWSLETTER
        </h1>
        <h2
          data-aos="fade-up"
          className="font-teko tracking-wider text-center text-xl font-semibold uppercase"
        >
          Sign up to our newsletter today and get the latest updates on amazing
          blogs.
        </h2>
        <form onSubmit={handleNewsletter} data-aos="fade-up" className="w-3/4 flex justify-center">
          <input
            name="email"
            className="h-12 placeholder:text-blog-primary bg-black/60 flex-1 rounded-l-lg px-4 focus:outline-blog-primary"
            placeholder="Please enter your email address"
            type="email"
            required
          />
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="hover:text-blog-primary h-12 hover:bg-black/60 text-white/90 bg-blog-primary px-4 py-2 border-2 border-blog-primary rounded-r-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
