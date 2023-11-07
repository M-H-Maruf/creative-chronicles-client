import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) {
    return (
        <div className="flex justify-center items-center z-50 h-screen w-screen top-0 left-0 right-0 overflow-hidden bg-black"><span className=" loading loading-infinity loading-lg text-success"></span></div>
      
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth"></Navigate>;
};


export default PrivateRoute;
