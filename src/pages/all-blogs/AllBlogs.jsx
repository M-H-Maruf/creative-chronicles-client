import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { Box, Skeleton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Swal from "sweetalert2";
import useAuthContext from "../../hooks/useAuthContext";
import Particle from "./../../components/shared/Particle";
import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const AllBlogs = () => {
  const { user } = useAuthContext();
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [displayData, setDisplayData] = useState([]);
  const fetchAllBlogs = async () => {
    const response = await axios.get(
      `http://localhost:5000/blogs?category=${selectedCategory}`
    );
    return response.data;
  };

  const handleCategoryChange = (e) => {
    const newValue = e.target.value;
    console.log("Selected Category:", newValue);
    setSelectedCategory(newValue);
    queryClient.invalidateQueries("allBlogs");
  };

  const { isLoading, error, data } = useQuery("allBlogs", fetchAllBlogs, {
    onSuccess: (data) => {
      setDisplayData(data);
    },
  });

  useEffect(() => {
    if (data) {
      setDisplayData(data);
    }
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:5000/blogs?category=${selectedCategory}`
      );
      setDisplayData(response.data);
    };

    fetchData();
  }, [selectedCategory, searchTerm]);

  const handleSearch = () => {
    setDisplayData(data);
    const filteredData = displayData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayData(filteredData);
  };

  if (isLoading) {
    return (
      <div className=" bg-black/80 bg-[url('https://i.postimg.cc/sgNF6ptt/retrosupply-j-Lw-VAUt-LOAQ-unsplash.jpg')] bg-cover bg-center bg-blend-darken p-8 md:p-16 py-24">
        <h1
          data-aos="fade-right"
          className="aos-init aos-animate z-20 font-teko font-bold text-blog-primary text-center pb-10 text-5xl aos-init aos-animate"
        >
          ALL BLOGS
        </h1>
        <div className=" w-full flex justify-center items-center p-10 gap-6 flex-col-reverse md:flex-row ">
          <div className="z-20">
            <select
              className="select select-success w-full max-w-xs text-white font-bold bg-blog-primary"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">ALL</option>
              <option value="ART">ART</option>
              <option value="DESIGN">DESIGN</option>
              <option value="LITERATURE">LITERATURE</option>
              <option value="TECHNOLOGY">TECHNOLOGY</option>
              <option value="INNOVATION">INNOVATION</option>
              <option value="TRAVEL">TRAVEL</option>
            </select>
          </div>

          <div className="form-control z-20">
            <div className="input-group">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by Title"
                className="input input-bordered text-blog-primary placeholder:text-blog-primary"
              />
              <button className="btn btn-square">
                <BiSearchAlt className="text-blog-primary font-bold text-2xl"></BiSearchAlt>
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
      title,
      image,
      shortDescription,
      category,
      description,
      userEmail,
    };

    axios
      .post("http://localhost:5000/wishlist", JSON.stringify(newBlog), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data?.insertedId) {
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
        console.error("Error:", error);
      });
  };

  return (
    <div className=" bg-black/80 bg-[url('https://i.postimg.cc/sgNF6ptt/retrosupply-j-Lw-VAUt-LOAQ-unsplash.jpg')] bg-cover bg-center bg-blend-darken  p-8 md:p-16 flex flex-col justify-center items-center py-24">
      <h1
        data-aos="fade-right"
        className="aos-init aos-animate z-20 font-teko font-bold text-blog-primary text-center pb-10 text-5xl aos-init aos-animate"
      >
        All BLOGS
      </h1>
      <div className=" w-full flex justify-center items-center p-10 gap-6 flex-col-reverse md:flex-row ">
        <div className="z-20">
          <select
            className="select select-success w-full max-w-xs text-white font-bold bg-blog-primary"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="ALL">ALL</option>
            <option value="ART">ART</option>
            <option value="DESIGN">DESIGN</option>
            <option value="LITERATURE">LITERATURE</option>
            <option value="TECHNOLOGY">TECHNOLOGY</option>
            <option value="INNOVATION">INNOVATION</option>
            <option value="TRAVEL">TRAVEL</option>
          </select>
        </div>

        <div className="form-control z-20">
          <div className="input-group">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Title"
              className="input input-bordered text-blog-primary placeholder:text-blog-primary"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <BiSearchAlt className="text-blog-primary font-bold text-2xl"></BiSearchAlt>
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 z-20">
        {displayData.map((blog) => (
          <div className="h-full" key={blog?._id}>
            <Tilt className="h-full" tiltEnable={false} scale={1.1} transitionSpeed={2500}>
              <div data-aos="flip-left" className="bg-white/50 rounded-lg h-full">
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
                    <span>
                      {new Date(blog?.timestamp).toLocaleDateString("en-GB")}
                    </span>
                  </div>
                  <div className="mt-4">
                    <Link to={`/blogs/${blog?._id}`}>
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
                      Add To Wishlist
                    </motion.button>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
      <Particle></Particle>
    </div>
  );
};

export default AllBlogs;
