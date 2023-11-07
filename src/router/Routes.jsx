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
import ErrorPage from "./../components/shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs/all",
        element: (
          <PrivateRoute>
            <AllBlogs></AllBlogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs/:_id",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs/featured",
        element: (
          <PrivateRoute>
            <FeaturedBlogs></FeaturedBlogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs/add",
        element: (
          <PrivateRoute>
            <AddBlogs></AddBlogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs/update/:_id",
        element: (
          <PrivateRoute>
            <UpdateBlogs></UpdateBlogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist></Wishlist>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth",
        element: <Auth></Auth>,
      },
    ],
  },
]);

export default routes;
