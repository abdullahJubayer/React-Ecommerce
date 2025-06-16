import React from "react";
import { LoginForm } from "../components/Login";
import { Carousel } from "../components/Carousel";

export const AuthPage: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-4 md:p-16 md:flex md:gap-16 w-4/5 md:w-3/4 rounded-md shadow-md bg-gray-100">
        <div className="flex-1">
          <LoginForm />
        </div>
        <div className="flex-1 mt-4 md:mt-0">
          <Carousel />
        </div>
      </div>
    </div>
  );
};
