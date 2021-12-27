import React from "react";

interface Props {}

const LoadingSpinner = (props: Props) => {
  return (
    <div className="fixed grid place-items-center inset-0 bg-black z-50">
      <span className="text-indigo-500">
        <i className="fas fa-circle-notch fa-spin fa-5x"></i>
      </span>
    </div>
  );
};

export default LoadingSpinner;
