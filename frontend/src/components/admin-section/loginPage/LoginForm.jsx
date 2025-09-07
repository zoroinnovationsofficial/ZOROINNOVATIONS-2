import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "An error occurred during login.");
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-white/10 shadow-xl rounded-2xl p-10 w-[350px] text-white flex flex-col gap-4 backdrop-blur-md">
        <div className="mb-2">
          <span className="text-sm text-gray-300 tracking-wider">
            WELCOME BACK
          </span>
          <h2 className="mt-2 text-lg font-semibold">
            Log In to access admin panel
          </h2>
        </div>
        {error && (
          <div className="bg-red-500 text-white p-2 rounded">{error}</div>
        )}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email" className="mt-3 text-sm text-white text-left">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="User Email"
            className="w-full px-3 py-2 mt-1 mb-2 rounded-lg border border-blue-400 bg-white/20 text-white placeholder-black focus:outline-none"
            style={{ "::placeholder": { color: "black" } }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label
            htmlFor="password"
            className="mt-2 text-sm text-white text-left"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="************"
              autoComplete="new-password"
              className="w-full px-3 py-2 mt-1 mb-2 rounded-lg border border-blue-400 bg-white/20 text-white placeholder-black focus:outline-none pr-10"
              style={{ "::placeholder": { color: "black" } }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-800 z-10"
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={-1}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1.5 12s4-7 10.5-7 10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center my-2">
            <label className="flex items-center text-sm text-black">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-black text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-[#FD7401] text-white rounded-lg font-semibold text-base hover:bg-orange-500 transition"
          >
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
