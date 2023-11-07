import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Swal from "sweetalert2";
import useAuthContext from "../../hooks/useAuthContext";
import { useEffect } from "react";
import { useState } from "react";

const Wishlist = () => {
  const { user } = useAuthContext();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/wishlist?email=${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [user?.email, data]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/wishlist/${_id}`, {
          method: "DELETE",
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Item Deleted Successfully!",
                icon: "success",
                confirmButtonText: "OK",
              });
              const remaining = data.filter(blog => blog._id != _id);
              setData(remaining);
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed To Delete Item!",
                icon: "error",
                confirmButtonText: "OK",
              });
            }
          });
      }
    });
  };

  return (
    <div
      id="recent-blogs"
      className="bg-black/80 bg-[url('https://i.postimg.cc/sgNF6ptt/retrosupply-j-Lw-VAUt-LOAQ-unsplash.jpg')] bg-cover bg-center bg-blend-darken p-8 md:p-16 flex flex-col justify-center items-center py-24"
    >
      <h1
        data-aos="flip-up"
        className="aos-init aos-animate font-teko font-bold text-blog-primary text-center pb-10 text-5xl aos-init aos-animate"
      >
        WISHLIST
      </h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {data?.map((blog) => (
          <div className="h-full" key={blog?._id}>
            <Tilt className="h-full" scale={1.05}>
              <div
                data-aos="flip-left"
                className="bg-white/50 h-full rounded-lg"
              >
                <img
                  src={blog?.image}
                  alt={blog?.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6 pt-0">
                  {" "}
                  <h2 className="text-2xl min-h-16 text-white font-extrabold mb-2">
                    {blog?.title}
                  </h2>
                  <p className="text-black mb-4">{blog?.shortDescription}</p>
                  <div className="flex justify-between">
                    <span className="text-green-900 text-sm border rounded-lg p-1 px-2 border-green-900">
                      {blog?.category}
                    </span>
                  </div>
                  <div className="mt-4">
                  <Link to={`/blogs/${blog?.blogId}`}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-2 bg-blue-800 text-white rounded mr-2"
                      >
                        Details
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(blog._id)}
                      className="px-4 py-2 bg-red-800 text-white rounded"
                    >
                      Remove From Wishlist
                    </motion.button>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
