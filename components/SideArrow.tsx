import React from "react";

interface Props {}

const SideArrow = (props: Props) => {
  return (
    <div className="fixed left-0 inset-0 z-20 flex bg-gradient-to-r from-transparent to-black opacity-50 justify-end items-center pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 lg:h-32 lg:w-32"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

export default SideArrow;
