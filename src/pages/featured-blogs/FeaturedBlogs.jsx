import { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import Particle from "../../components/shared/Particle";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState();
  const columns = [
    {
      name: "SERIAL NO.",
      selector: (row) => row.serial,
    },
    {
      name: "TITLE",
      selector: (row) => row.title,
    },
    {
      name: "OWNER",
      selector: (row) => row.userName,
    },
    {
      name: "AVATAR",
      cell: (row) => (
        <div className="avatar">
          <div className="w-8 mask mask-squircle">
            <img src={row.userImage} />
          </div>
        </div>
      ),
    },
  ];
  createTheme('solarized', {
    text: {
      primary: '#338323',
      secondary: '#2aa198',
    },
    background: {
      default: '#00000050',
    },
    divider: {
      default: '#fff',
    },
  }, 'dark');

  useEffect(() => {
    fetch("http://localhost:5000/blogsFeatured", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  blogs?.forEach((blog, index) => {
    blog.serial = index + 1;
  });
  return (
    <div className=" bg-black/80 bg-[url('https://i.postimg.cc/sgNF6ptt/retrosupply-j-Lw-VAUt-LOAQ-unsplash.jpg')] bg-cover bg-center bg-blend-darken  p-8 md:p-16 flex flex-col justify-center items-center py-24">
      <h1
        data-aos="fade-right"
        className="aos-init aos-animate z-20 font-teko font-bold text-blog-primary text-center pb-10 text-5xl aos-init aos-animate"
      >
        FEATURED BLOGS
      </h1>
      <div className=" w-full flex justify-center items-center p-10 gap-6 flex-col-reverse md:flex-row ">
        <div className="z-20">
      <DataTable columns={columns} data={blogs} theme="solarized"/></div></div>
      <Particle></Particle>
    </div>
  );
};

export default FeaturedBlogs;
