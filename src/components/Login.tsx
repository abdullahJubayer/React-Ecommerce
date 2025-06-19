import React, { cache, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { GoogleSignInButton } from "./GoogleSignInButton";
import { useAppDispatch } from "../store/ReduxStore";
import { addUser } from "../store/UserSlice";

export const LoginForm: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const login = async () => {
    if (emailRef.current?.value && passRef.current?.value) {
      setErrorMessage("");
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: "john@mail.com",
              password: "changeme",
            }),
          }
        );

        if (response.ok) {
          const success = await response.json();
          navigate("/home");
        }
      } catch (err: any) {
      } finally {
        setLoading(true);
      }
    } else {
      setErrorMessage("Email or Password are wrong!");
    }
  };

  return (
    <div>
      <div>
        <span className="bg-gray-700 text-white ps-2 pe-1">DA</span>{" "}
        <span>WN</span>
      </div>
      <div className="flex flex-col justify-center items-center mt-12 md:mt-24">
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
        <span className="text-red-600">{errorMessage && errorMessage}</span>
        <div className="w-full mt-4">
          <button
            className="w-full bg-black text-white py-3 rounded-sm"
            onClick={login}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline mr-2 w-4 h-4 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="white"
                  />
                </svg>
                Loading...
              </>
            ) : (
              "SignUp"
            )}
          </button>
          <div className="mt-4">
            <GoogleSignInButton
              onSuccess={(e) => {
                dispatch(addUser(e.clientId));
                navigate("/home");
              }}
              onError={() => {}}
            />
          </div>
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
