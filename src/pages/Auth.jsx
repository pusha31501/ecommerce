import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [mode, setMode] = useState("login");
  const { signup, login } = useAuth();
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  function onSubmit(data) {
    setError(null);
    let result;

    if (mode === "signup") {
      result = signup(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }
    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  }
  return (
    <div className="mx-auto max-w-xl mt-10 bg-white/50 shadow-sm shadow-gray-900 p-4">
      <div className="w-full sm:w-sm flex flex-col">
        <h1 className="font-bold text-xl">
          {mode === "signup" ? "Sign Up" : "Login"}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-2 mt-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="bg-gray-300 p-2 focus:outline-0 rounded-sm"
            />
            {errors.email && (
              <span className="text-red-600 text-sm">
                {errors.email.message}
              </span>
            )}
            {error && <p className="text-red-600">{error}</p>}
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password atleast 6 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Password must be less than 12 characters",
                },
              })}
              className="bg-gray-300 p-2 focus:outline-0 rounded-sm"
            />
            {errors.password && (
              <span className="text-red-600 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-800 cursor-pointer text-white rounded-sm w-full py-2 mt-4 hover:bg-blue-900 transition-all duration-300"
          >
            {mode === "signup" ? "Sign Up" : "Login"}
          </button>
        </form>
        <div className="mx-auto mt-4">
          {mode === "signup" ? (
            <p>
              Already have an account?{" "}
              <span
                className="text-blue-800 underline cursor-pointer"
                onClick={() => setMode("login")}
              >
                Login
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span
                className="text-blue-800 underline cursor-pointer"
                onClick={() => setMode("signup")}
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
