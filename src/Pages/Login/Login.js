import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { providerLogin, login, setLoading } = useContext(AuthContext);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  //google login
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("Your email is not verified yet.");
        }
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="text-center text-xl bg-gradient-to-r from-sky-300 to-indigo-600 mx-64 my-14 rounded-lg ">
      <div className="p-32">
        <form onSubmit={handleSubmit}>
          <label className="text-black">
            Email:
            <input
              className="mb-10 mx-6 ms-10 px-5 py-2"
              type="email"
              placeholder="Enter Your Email"
              name="email"
              required
            />
          </label>
          <br />
          <label className="text-black">
            Password:
            <input
              className="mb-10 mx-5 px-3 py-2"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
            />
          </label>
          <br />
          <p className="mb-2">
            Don't have an account yet?
            <Link className="text-white mx-3" to="/signup">
              Create an account.
            </Link>
          </p>
          <br />
          <button
            className="px-40 py-4 mb-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:bg-gradient-to-l"
            type="submit"
          >
            Submit
          </button>
          <br />
          <button
            onClick={handleGoogleLogin}
            className="px-28 py-4 bg-gradient-to-r from-sky-600 to-indigo-900 rounded-lg text-white hover:bg-gradient-to-l"
          >
            Sign In with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
