import React from "react";
import { LoginForm } from "../components/Login";
import { Carousel } from "../components/Carousel";

export const AuthPage: React.FC = () => {
  return (
    <div className="p-16 md:flex h-screen gap-16">
      <div className="flex-1">
        <LoginForm />
      </div>
      <div className="flex-1 relativ md:mt-8">
        <Carousel />
      </div>
    </div>
  );
};
