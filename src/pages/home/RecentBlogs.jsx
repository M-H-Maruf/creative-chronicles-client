import { useQuery } from "react-query";
import axios from "axios";
import { Box, Skeleton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Swal from "sweetalert2";
import useAuthContext from "../../hooks/useAuthContext";

const RecentBlogs = () => {
  const {user} = useAuthContext();
  const fetchRecentBlogs = async () => {
    const response = await axios.get("http://localhost:5000/blogs/recent");
    return response.data;
  };

  const { data, isLoading, error } = useQuery("recentBlogs", fetchRecentBlogs);

  if (isLoading) {
    return (
      <div className="p-8 md:p-16 py-24">
        <h1
          data-aos="fade-right"
          className="aos-init aos-animate font-teko font-bold text-blog-primary text-center pb-10 text-5xl aos-init aos-animate"
        >
          RECENT BLOGS
        </h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Box key={index}>
              <Skeleton height="200px" />
              <Box py={2}>
                <Skeleton height="20px" mb={2} />
                <Skeleton height="20px" mb={2} />
                <Skeleton height="20px" mb={2} />
                <Skeleton height="20px" w="50%" />
              </Box>
            </Box>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  
  const handleAddToWishlist = (blog) => {
    const { title, image, shortDescription, category, description } = blog;
    const userEmail = user.email;
    const newBlog = {
      title, image, shortDescription, category, description, userEmail
    };

    axios.post(
      "http://localhost:5000/wishlist",
      JSON.stringify(newBlog),
      {
        headers: {
          "Content-Type": "application/json",
        }
      }
    )
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Blog Added To Wishlist Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed To Add Blog To Wishlist!",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    
  };

  return (
    <div className="bg-black p-8 md:p-16 flex flex-col justify-center items-center py-24">
      <h1
        data-aos="fade-up"
        className="aos-init aos-animate font-teko font-bold text-blog-primary text-center pb-10 text-5xl aos-init aos-animate"
      >
        RECENT BLOGS
      </h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((blog) => (
          <div key={blog._id}>
            <Tilt scale={1.05}>
              <div data-aos="flip-left" className="bg-white/50 rounded-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6 pt-0">
                  {" "}
                  <h2 className="text-2xl min-h-16 text-white font-extrabold mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-black mb-4">{blog.shortDescription}</p>
                  <div className="flex justify-between">
                    <span className="text-green-900 text-sm border rounded-lg p-1 px-2 border-green-900">
                      {blog.category}
                    </span>
                    <span>
                      {new Date(blog.timestamp).toLocaleDateString("en-GB")}
                    </span>
                  </div>
                  <div className="mt-4">
                    <Link to={`/blogs/${blog._id}`}>
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
                      onClick={() => handleAddToWishlist(blog)}
                      className="px-4 py-2 bg-green-800 text-white rounded"
                    >
                      Add to Wishlist
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

export default RecentBlogs;
