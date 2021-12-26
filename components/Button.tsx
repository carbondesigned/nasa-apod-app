import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  center?: boolean;
  link?: boolean;
  href?: string;
  max?: boolean;
  action?: () => void;
}

const Button = (props: Props) => {
  return (
    <>
      {props.link ? (
        // @ts-ignore
        <Link href={props.href}>
          <a>
            <div
              onClick={() => props.action}
              className={`font-bold py-2 px-4 rounded cursor-pointer  transition-all duration-200 ${
                props.center ? "text-center" : ""
              } ${props.max && "max-w-max"} ${
                props.primary
                  ? "bg-white hover:bg-gray-200 text-black"
                  : "bg-transparent border-white border-2 text-white hover:bg-white hover:text-black"
              }`}
            >
              {props.children}
            </div>
          </a>
        </Link>
      ) : (
        <div
          onClick={props.action}
          className={`font-bold py-2 px-4 rounded cursor-pointer  transition-all duration-200 ${
            props.center ? "text-center" : ""
          } ${
            props.primary
              ? "bg-white hover:bg-gray-200 text-black"
              : "bg-transparent border-white border-2 text-white hover:bg-white hover:text-black"
          }`}
        >
          {props.children}
        </div>
      )}
    </>
  );
};

export default Button;
