import { Link, useParams } from "react-router-dom";
import Particle from "./Particle";
import { AiOutlineEdit } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import useAuthContext from "./../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const BlogDetails = () => {
  const { _id } = useParams();
  const { user } = useAuthContext();
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);

  const handleComment = (e) => {
    e.preventDefault();
    const { _id: blogId } = data;
    const userEmail = user.email;
    const userImage = user.photoURL;
    const userName = user.displayName;
    const comment = e.target.comment.value;
    const timestamp = new Date().getTime().toString();
    const newComment = {
      blogId,
      userImage,
      userEmail,
      comment,
      timestamp,
      userName,
    };

    axios
      .post("http://localhost:5000/comments", {withCredentials: true}, JSON.stringify(newComment), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data?.insertedId) {
          e.target.comment.value = "";
          Swal.fire({
            title: "Success!",
            text: "Comment Added Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed To Comment!",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${_id}`,{ credentials: 'include',})
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [_id]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/comments/${_id}`, {withCredentials: true},)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [_id]);

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
            <div key={data?._id}>
              <Tilt tiltEnable={false} scale={1.04} transitionSpeed={500}>
                <div
                  data-aos="flip-left"
                  className="grid lg:grid-cols-2 justify-between bg-black/50 shadow-2xl rounded-lg tracking-tight cursor-pointer"
                >
                  <div className="flex justify-center items-center lg:rounded-l-lg rounded-t-lg lg:rounded-r-none rounded-b-none h-full">
                    <img
                      className="h-full lg:rounded-l-lg rounded-t-lg lg:rounded-r-none rounded-b-none object-cover object-center"
                      src={data?.image}
                      alt="service"
                    />
                  </div>
                  <div className="items-center w-full justify-end px-5 py-2">
                    <h2 className="font-bold text-sm text-white/60 tracking-wide mb-4">
                      Blog: {data?.title}
                    </h2>
                    <h2 className="font-bold text-sm text-white/60 tracking-wide mb-3">
                      Category: {data?.category}
                    </h2>
                    <h2 className="font-bold text-sm text-white/60 tracking-wide mb-1">
                      Short Description: {data?.shortDescription}
                    </h2>
                    <h2 className="font-bold text-sm text-white/60 tracking-wide ">
                      Details: {data?.description}
                    </h2>
                    <div className="flex flex-col gap-4">
                      {user?.email == data?.userEmail ?  (
                        <Link
                          to={`/blogs/update/${data?._id}`}
                          className="font-bold w-fit"
                        >
                          <button className="btn border-2 bg-transparent font-bold my-4 border-blog-primary text-blog-primary hover:bg-blog-primary hover:border-blog-primary hover:text-white">
                            <AiOutlineEdit className="text-3xl"></AiOutlineEdit>
                          </button>
                        </Link>
                      ):(
                        <div className="my-4"></div>
                      )}

                      <form onSubmit={handleComment} className="flex flex-col">
                        {user?.email == data?.userEmail ? (
                          <textarea
                            className="textarea textarea-success"
                            placeholder="You can not comment in your own blog."
                            disabled
                          ></textarea>
                        ) : (<div className="flex flex-col">
                          <textarea
                            name="comment"
                            className="textarea text-black focus:border-blog-primary focus:outline-blog-primary"
                            placeholder="Write your comment..."
                          ></textarea>
                          <input
                          className="btn border-2 bg-transparent font-bold my-4 border-blog-primary text-blog-primary hover:bg-blog-primary hover:border-blog-primary hover:text-white"
                          type="submit"
                        /></div>
                        )}
                        
                      </form>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-8 lg:p-16">
          <h1
            data-aos="fade-down"
            className="text-2xl text-blog-primary font-black font-orbitron mb-8 text-left mx-auto"
          >
            COMMENTS
          </h1>
          <div data-aos="fade-down" className="mb-20">
            {comments.map((comment, idx) => (
              <div key={idx} className="chat chat-start">
                {" "}
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src={`${comment.userImage}`} />
                  </div>
                </div>
                <div className="chat-header flex flex-col">
                  <h6>{comment.userName}</h6>
                  <time className="text-xs opacity-50">
                    {new Date(parseInt(comment?.timestamp)).toLocaleDateString(
                      "en-GB"
                    )}
                  </time>
                </div>
                <div className="chat-bubble chat-bubble-success bg-blog-primary">
                  {comment.comment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Particle></Particle>
    </div>
  );
};

export default BlogDetails;
