import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header className="w-full h-[50px] flex justify-center items-center bg-gray-200">
        header
      </header>
      <Outlet />
      <footer className="w-full h-[50px] flex justify-center items-center bg-gray-200">
        Footer
      </footer>
    </>
  );
};

export default Root;
