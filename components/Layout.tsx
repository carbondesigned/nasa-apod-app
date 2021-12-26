import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <main className="bg-gray-900 min-h-screen text-white grid place-items-center">
      {props.children}
    </main>
  );
};

export default Layout;
