import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const notify = () => {
  toast.success("Email verification sent");
};
const SIgnUp = () => {
  const [error, setError] = useState("");
  const { createUser, verifyEmail, updateUserProfile } =
    useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const imageURL = form.imageURL.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        handleUpdateUser(name, imageURL);
        handleEmailVerification();
        toast.success("Please Verify your email.");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleUpdateUser = (name, imageURL) => {
    const profile = {
      displayName: name,
      photoURL: imageURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.log(e));
  };

  // console.log(email, password, name, imageURL);

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {
        console.log("Email verification sent");
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="text-center text-xl bg-gradient-to-r from-sky-300 to-indigo-600 mx-64 my-14 rounded-lg ">
      <div className="p-24">
        <form onSubmit={handleSubmit}>
          <label className="text-black">
            Name:
            <input
              className="mb-10 mx-6 ms-10 px-5 py-2"
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
            />
          </label>
          <br />
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
          <label className="text-black">
            Image URL:
            <input
              className="mb-10 mx-6 ms-10 px-5 py-2"
              type="text"
              placeholder="Enter Image URL"
              name="imageURL"
            />
          </label>
          <br />
          <p className="mb-4 ">
            Already have an account?
            <Link className="text-white mb-5 mx-3" to="/login">
              Login now!
            </Link>
          </p>
          <button
            className="px-40 py-4 mb-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:bg-gradient-to-l"
            type="submit"
            onClick={notify}
          >
            Sign Up
          </button>
          <p className="mt-5 text-red-600">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default SIgnUp;
