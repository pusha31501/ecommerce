import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
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
        {!user ? (
          <>
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
          </>
        ) : (
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-gray-800">Hello, {user.email}</span>
            <button
              className="bg-gray-800 text-white py-2 px-6 rounded-sm hover:bg-gray-700 cursor-pointer"
              onClick={logout}
            >
              logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
