import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import AllBlogs from "../pages/all-blogs/AllBlogs";
import FeaturedBlogs from "../pages/featured-blogs/FeaturedBlogs";
import AddBlogs from "../pages/add-blogs/AddBlogs";
import Wishlist from "../pages/wishlist/WishList";
import Auth from "../components/auth/Auth";
import BlogDetails from "../components/shared/BlogDetails";
import UpdateBlogs from "../components/shared/UpdateBlogs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs/all",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/blogs/:_id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/blogs/featured",
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/blogs/add",
        element: <AddBlogs></AddBlogs>,
      },
      {
        path: "/blogs/update/:_id",
        element: <UpdateBlogs></UpdateBlogs>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/auth",
        element: <Auth></Auth>,
      },
    ],
  },
]);

export default routes;
