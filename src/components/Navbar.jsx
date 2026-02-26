import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/20 shadow-sm shadow-gray-500 py-4 px-6 md:px-40 flex flex-col gap-4 items-center justify-between md:flex-row backdrop-blur-md relative">
      <div>
        <Link to="/" className="font-bold text-3xl text-orange-600 underline">
          ShopHub
        </Link>
      </div>
      <div className="space-x-4 font-medium text-xl">
        <Link
          to="/"
          className="hover:text-blue-700 transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/checkout"
          className="hover:text-blue-700 transition-all duration-300"
        >
          Cart
        </Link>
      </div>
      <div className="space-x-2  text-md">
        <Link
          to="/auth"
          className="px-4 p-2 bg-gray-600 text-white rounded-sm hover:bg-gray-800 transition-all"
        >
          Login
        </Link>
        <Link
          to="/auth"
          className="px-4 p-2 bg-blue-600 text-white rounded-sm hover:bg-blue-800 transition-all"
        >
          SignUp
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
