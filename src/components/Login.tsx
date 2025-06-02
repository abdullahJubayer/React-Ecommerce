import React, { useRef } from "react";
import { useNavigate } from "react-router";

export const LoginForm: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const login = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "john@mail.com",
        password: "changeme",
      }),
    });

    if (response.ok) {
      const success = await response.json();
      navigate("/home");
    }
  };

  return (
    <div>
      <div>
        <span className="bg-gray-700 text-white ps-2 pe-1 py-2">DA</span>{" "}
        <span>WN</span>
      </div>
      <div className="flex flex-col justify-center items-center mt-24">
        <h2 className="text-3xl text-gray-700">Create Account</h2>
        <div className="mt-16 relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            ref={emailRef}
            className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 mt-4 group">
          <input
            type="password"
            name="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            placeholder=" "
            ref={passRef}
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="w-full mt-4">
          <button
            className="w-full bg-black text-white py-3 rounded-sm"
            onClick={login}
          >
            SignUp
          </button>
        </div>
        <div className="mt-3">
          <span className="text-gray-400 text-sm">
            Already have an account?
          </span>
          <span className="text-gray-600 text-sm font-bold ms-1 underline">
            Log in hare
          </span>
        </div>
      </div>
    </div>
  );
};
