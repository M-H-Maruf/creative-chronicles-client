import Register from "./Register";
import { useState } from "react";
import Login from "./Login";
import { BsGoogle } from "react-icons/bs";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import Particle from "../shared/Particle";
import useAuthContext from "../../hooks/useAuthContext";

const Auth = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const tabLogInStyle = tabIndex ? "bg-blog-primary" : "text-blog-primary";
  const tabRegisterStyle = tabIndex ? "text-blog-primary" : "bg-blog-primary";
  const { signInWithGoogle } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Sign Up Succeeded With Google",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Oops! Something went wrong",
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  return (
    <div className=" bg-black/80 bg-[url('https://i.ibb.co/qWNH5fN/Alexandre-debieve-FO7-JIlwj-Ot-U-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center tracking-normal text-justify">
      <div className="py-32 z-10">
        <div className="max-w-6xl mx-auto">
          <h1
            data-aos="fade-down"
            className="text-6xl text-blog-primary font-black font-orbitron mb-20 text-center mx-auto"
          >
            Log IN / REGISTER
          </h1>
          <div
            data-aos="zoom-in"
            className="bg-black/50 max-w-5xl m-8 md:m-24 p-6 md:p-10 min-h-[650px]"
          >
            <div className="w-full grid grid-cols-2 border-b-2 border-blog-primary">
              <div
                onClick={() => setTabIndex(1)}
                className={`p-4 w-full flex justify-center items-center text-3xl font-teko tracking-wide ${tabLogInStyle}`}
              >
                Log in
              </div>
              <div
                onClick={() => setTabIndex(0)}
                className={`p-4 w-full flex justify-center items-center text-3xl font-teko tracking-wide ${tabRegisterStyle}`}
              >
                Register
              </div>
            </div>
            {tabIndex ? (
              <Login></Login>
            ) : (
              <Register setTabIndex={setTabIndex}></Register>
            )}
            <div className="divider before:bg-white after:bg-white">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn w-full glass group text-white hover:text-blog-primary"
            >
              Continue With Google
              <BsGoogle className="px-1 group-hover:text-blog-primary text-white w-10"></BsGoogle>
            </button>
          </div>
        </div>
      </div>
      <Particle></Particle>
    </div>
  );
};

export default Auth;
