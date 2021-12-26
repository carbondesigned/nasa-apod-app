import React from "react";

interface Props {}

const LoadingSpinner = (props: Props) => {
  return (
    <div className="w-full h-full fixed block m-auto inset-0 bg-black opacity-75 z-50">
      <span className="text-indigo-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
        <i className="fas fa-circle-notch fa-spin fa-5x"></i>
      </span>
    </div>
  );
};

export default LoadingSpinner;
