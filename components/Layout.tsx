import React from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-900 min-h-screen text-white grid place-items-center overflow-y-hidden">
        {props.children}
      </main>
    </>
  );
};

export default Layout;
