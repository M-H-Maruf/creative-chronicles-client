import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Particle from "./Particle";
import { AiOutlineEdit } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import axios from "axios";

const BlogDetails = () => {
  const { _id } = useParams();
  // retrieving blog data
  const { data, isLoading, isError, error } = useQuery(
    ["blogDetails", _id],
    async () => {
      const response = await axios.get(`http://localhost:5000/blogs/${_id}`);
      return response.data;
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  console.log(data);
  console.log(data);
  return (
    <div className=" bg-black/80 bg-[url('https://i.postimg.cc/sgNF6ptt/retrosupply-j-Lw-VAUt-LOAQ-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center tracking-normal text-justify">
      <div className="py-32 p-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
          <h1
            data-aos="fade-down"
            className="text-6xl text-blog-primary font-black font-orbitron mb-20 text-center mx-auto"
          >
            BLOG DETAILS
          </h1>

          <div
            data-aos="zoom-in"
            className="bg-black/50 max-w-6xl m-8 md:m-24 p-6"
          >
            <div key={data._id}>
              <Tilt scale={1.05}>
                <div
                  data-aos="flip-left"
                  className="grid lg:grid-cols-2 justify-between bg-black/50 shadow-2xl rounded-lg tracking-tight cursor-pointer"
                >
                  <div className="flex justify-center items-center lg:rounded-l-lg rounded-t-lg lg:rounded-r-none rounded-b-none h-full">
                    <img
                      className="h-full lg:rounded-l-lg rounded-t-lg lg:rounded-r-none rounded-b-none object-cover object-center"
                      src={data.image}
                      alt="service"
                    />
                  </div>
                  <div className="items-center w-full justify-end px-5 py-2">
                    <h2 className="font-bold text-sm text-white/60 tracking-wide mb-4">
                      Blog: {data.title}
                    </h2>
                    <h2 className="font-bold text-sm text-white/60 tracking-wide mb-3">
                      Category: {data.category}
                    </h2>
                    <h2 className="font-bold text-sm text-white/60 tracking-wide mb-1">
                      Short Description: {data.shortDescription}
                    </h2>
                    <h2 className="font-bold text-sm text-white/60 tracking-wide">
                      Details: {data.description}
                    </h2>
                    <div className="flex gap-4">
                      <Link
                        to={`/blogs/update/${data._id}`}
                        className="font-bold"
                      >
                        <button className="btn border-2 bg-transparent font-bold my-4 border-blog-primary text-blog-primary hover:bg-blog-primary hover:border-blog-primary hover:text-white">
                          <AiOutlineEdit className="text-3xl"></AiOutlineEdit>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <Particle></Particle>
    </div>
  );
};

export default BlogDetails;
