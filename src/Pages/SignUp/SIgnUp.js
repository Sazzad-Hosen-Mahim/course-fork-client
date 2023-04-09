import React from "react";

const SIgnUp = () => {
  return (
    <div className="text-center text-xl bg-gradient-to-r from-sky-300 to-indigo-600 mx-64 my-20 rounded-lg ">
      <div className="p-32">
        <form onSubmit="">
          <label className="text-black">
            Name:
            <input className="mb-10 mx-6 ms-10" type="text" value="" />
          </label>
          <br />
          <label className="text-black">
            Email:
            <input
              className="mb-10 mx-6 ms-10"
              type="email"
              value=""
              required
            />
          </label>
          <br />
          <label className="text-black">
            Password:
            <input className="mb-10 mx-5" type="password" value="" required />
          </label>
          <br />
          <label className="text-black">
            Photo URL:
            <input className="mb-10 mx-6 ms-10" type="text" value="" />
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

export default SIgnUp;
