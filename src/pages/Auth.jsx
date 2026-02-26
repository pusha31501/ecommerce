import React from "react";

const Auth = () => {
  return (
    <div className="mx-auto max-w-2xl mt-4 bg-white/50 shadow-sm shadow-gray-900 p-4">
      <div className="w-md flex flex-col">
        <h1 className="font-bold text-xl">Sign Up</h1>
        <form>
          <div className="flex flex-col space-y-2 mt-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="bg-gray-300 p-2 focus:outline-0 rounded-sm"
            />
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="bg-gray-300 p-2 focus:outline-0 rounded-sm"
            />
          </div>
          <button className="bg-blue-800 text-white rounded-sm w-full py-2 mt-4 hover:bg-blue-900 transition-all duration-300">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
