import Swal from "sweetalert2";
import useAuthContext from "../../hooks/useAuthContext";

const Register = ({ setTabIndex }) => {
  const { createUserWithEmail, updateNameAndPhotoUrl } = useAuthContext();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

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

    createUserWithEmail(email, password)
      .then(() => {
        updateNameAndPhotoUrl(name, photo);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Sign Up Succeeded",
          showConfirmButton: false,
          timer: 2500,
        });
        setTabIndex(1);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Oops! Something went wrong\n" + error.message,
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-8">
      <div className="grid justify-center grid-cols-1 items-center gap-6 my-6">
        <div className="form-control">
          <label className="input-group">
            <span className="bg-blog-primary w-44">Image</span>
            <input
              name="photo"
              type="text"
              placeholder="Your Image URL"
              className="input input-bordered text-blog-primary w-full"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <span className="bg-blog-primary w-44">Name</span>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered text-blog-primary w-full"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <span className="bg-blog-primary w-44">email</span>
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
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
