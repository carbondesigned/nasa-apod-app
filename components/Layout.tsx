import React from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
  max?: boolean;
}

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <main
        className={`bg-gray-900 min-h-screen text-white grid place-items-center ${
          props.max ? "overflow-y-auto" : " overflow-y-hidden"
        }`}
      >
        {props.children}
      </main>
    </>
  );
};

export default Layout;
