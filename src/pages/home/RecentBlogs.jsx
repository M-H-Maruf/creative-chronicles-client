import { useQuery } from "react-query";
import axios from "axios";
import { Box, Skeleton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const RecentBlogs = () => {
  const fetchRecentBlogs = async () => {
    const response = await axios.get("http://localhost:5000/blogs/recent");
    return response.data;
  };

  const { data, isLoading, error } = useQuery("recentBlogs", fetchRecentBlogs);

  if (isLoading) {
    return (<div className="p-8 md:p-16 py-24">
        <h1
        data-aos="fade-right"
        className="aos-init aos-animate font-teko font-bold text-blog-primary text-center pb-10 text-5xl aos-init aos-animate"
      >
        TESTIMONIALS
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

  return (
    <div className="bg-black p-8 md:p-16 flex flex-col justify-center items-center py-24">
      <h1
        data-aos="fade-right"
        className="aos-init aos-animate font-teko font-bold text-blog-primary text-center pb-10 text-5xl aos-init aos-animate"
      >
        TESTIMONIALS
      </h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((blog) => (
          <div
            data-aos="flip-left"
            className="bg-white/50 rounded-lg"
            key={blog._id}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6 pt-0">
              {" "}
              <h2 className="text-2xl text-white font-extrabold mb-2">
                {blog.title}
              </h2>
              <p className="text-black mb-4">{blog.shortDescription}</p>
              <div className="flex justify-between">
                <span className="text-green-900 text-sm border rounded-lg p-1 px-2 border-green-900">{blog.category}</span>
                <span>
                  {new Date(blog.timestamp).toLocaleDateString("en-GB")}
                </span>
              </div>
              <div className="mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 bg-blue-800 text-white rounded mr-2"
                >
                  Details
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 bg-green-800 text-white rounded"
                >
                  Add to Wishlist
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
