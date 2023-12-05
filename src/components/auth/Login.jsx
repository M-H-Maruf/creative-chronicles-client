import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthContext from "../../hooks/useAuthContext";

const Login = () => {
  const { signInWithEmail } = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    // Password Verification
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2500,
        text: "Password must be at least 6 characters long",
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2500,
        text: "Password must contain at least one capital letter",
      });
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Swal.fire({
        icon: "error",
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2500,
        text: "Password must contain at least one special character",
      });
      return;
    }

    signInWithEmail(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Sign In Succeeded",
          showConfirmButton: false,
          timer: 2500,
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        let errorSignIn = "";
        if (error.code == "auth/invalid-login-credentials") {
          errorSignIn = "Email or password doesn't match";
        } else {
          errorSignIn = error.code;
        }
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Oops! Something went wrong.\n" + errorSignIn,
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };
  return (
    <div>
      <form onSubmit={handleLogIn} className="flex flex-col gap-8">
        <div className="grid justify-center grid-cols-1 items-center gap-6 my-6">
          <div className="form-control">
            <label className="input-group">
              <span className="bg-blog-primary w-44">Email</span>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered text-blog-primary w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group">
              <span className="bg-blog-primary w-44">Password</span>
              <input
                name="password"
                type="password"
                placeholder="Your Password"
                className="input input-bordered text-blog-primary w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control -mt-6">
          <button className="btn glass text-white hover:text-blog-primary">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
