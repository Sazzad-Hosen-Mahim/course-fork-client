import React from "react";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
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
          <button
            className="px-7 py-4 bg-orange-400 rounded-lg text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
