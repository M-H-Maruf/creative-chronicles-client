import Swal from "sweetalert2";
import Particle from "../../components/shared/Particle";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateBlogs = () => {
  const { _id } = useParams();
  const [blog, setBlog] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { image, title, shortDescription, description } = blog;
  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${_id}`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setBlog(data));
    setSelectedCategory(blog.category);
  }, [_id, blog.category]);

  const handleCategoryChange = (e) => {
    const newValue = e.target.value;
    setSelectedCategory(newValue);
  };

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);
  const handleUpdateBlog = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const title = form.title.value;
    const category = selectedCategory;
    const shortDescription = form.shortDescription.value;
    const description = form.description.value;
    const userEmail = blog.userEmail;
    const timestamp = blog.timestamp;

    const updatedBlog = {
      image,
      title,
      category,
      shortDescription,
      description,
      userEmail,
      timestamp,
    };

    fetch(`http://localhost:5000/blogs/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(updatedBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          form.image.value = "";
          form.title.value = "";
          form.shortDescription.value = "";
          form.description.value = "";
          setSelectedCategory("NONE");
          Swal.fire({
            title: "Success!",
            text: "Blog Updated Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed To Update Blog!",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className=" bg-black/80 bg-[url('https://i.postimg.cc/sgNF6ptt/retrosupply-j-Lw-VAUt-LOAQ-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center tracking-normal text-justify">
      <div className="py-32 p-6 z-10">
        <div className="max-w-6xl mx-auto">
          <h1
            data-aos="fade-down"
            className="text-6xl text-blog-primary font-black font-orbitron mb-20 text-center mx-auto"
          >
            UPDATE BLOG
          </h1>
          <div
            data-aos="zoom-in"
            className="bg-black/50 max-w-5xl m-8 md:m-24 p-6 md:p-10"
          >
            <form onSubmit={handleUpdateBlog} className="flex flex-col gap-8">
              <div className="grid justify-center grid-cols-1 lg:grid-cols-2 items-center gap-6 my-6">
                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-blog-primary w-44">Image</span>
                    <input
                      defaultValue={image}
                      name="image"
                      type="text"
                      placeholder="Blog Image URL"
                      className="input input-bordered text-black font-semibold w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-blog-primary w-44">Title</span>
                    <input
                      defaultValue={title}
                      name="title"
                      type="text"
                      placeholder="Blog Title"
                      className="input input-bordered text-black font-semibold w-full"
                    />
                  </label>
                </div>

                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-blog-primary w-44">Category</span>
                    <select
                      className="select select-success w-full max-w-xs text-black font-semibold"
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                    >
                      <option value="ALL">NONE</option>
                      <option value="ART">ART</option>
                      <option value="DESIGN">DESIGN</option>
                      <option value="LITERATURE">LITERATURE</option>
                      <option value="TECHNOLOGY">TECHNOLOGY</option>
                      <option value="INNOVATION">INNOVATION</option>
                      <option value="TRAVEL">TRAVEL</option>
                    </select>
                  </label>
                </div>

                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-blog-primary w-44">Description</span>
                    <input
                      defaultValue={shortDescription}
                      name="shortDescription"
                      type="text"
                      placeholder="Blog Short Description"
                      className="input input-bordered text-black font-semibold w-full"
                    />
                  </label>
                </div>

                <div className="form-control lg:col-span-2">
                  <label className="input-group">
                    <span className="bg-blog-primary w-44">Details</span>
                    <input
                      defaultValue={description}
                      name="description"
                      type="text"
                      placeholder="Blog Details"
                      className="input input-bordered text-black font-semibold w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="form-control -mt-6">
                <button className="btn glass text-white hover:text-blog-primary">
                  Update Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Particle></Particle>
    </div>
  );
};

export default UpdateBlogs;
