import React from "react";
import Link from "next/link";
import { useAppContext } from "../contexts/appContext";

interface Props {}

const Navbar = (props: Props) => {
  const { setSelectedDate } = useAppContext();
  return (
    <ul className="flex gap-6 fixed top-0 z-10 text-white p-2 bg-gradient-to-b from-black to-transparent w-full">
      <li>
        <Link href={"/"}>
          <a onClick={() => setSelectedDate("")}>Home</a>
        </Link>
      </li>
      <li>
        <Link href={"/today"}>
          <a onClick={() => setSelectedDate("")}>Today</a>
        </Link>
      </li>
      <li>
        <Link href={"/all"}>
          <a onClick={() => setSelectedDate("")}>Browse</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
