import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import AllBlogs from "../pages/all-blogs/AllBlogs";
import FeaturedBlogs from "../pages/featured-blogs/FeaturedBlogs";
import AddBlogs from "../pages/add-blogs/AddBlogs";
import Wishlist from "../pages/wishlist/WishList";

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
        path: "/all-blogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/featured-blogs",
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/add-blogs",
        element: <AddBlogs></AddBlogs>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
    ],
  },
]);

export default routes;
