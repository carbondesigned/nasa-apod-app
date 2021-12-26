import React from "react";
import { useDate } from "../hooks/fetchDate";
import Image from "next/image";
import Button from "./Button";

import { titleToSlug } from "../util/titleToSlug";
import { useAppContext } from "../contexts/appContext";

interface Props {}

const Photo = (props: Props) => {
  const { selectedDate } = useAppContext();
  const { data: date, isLoading, error } = useDate(selectedDate);
  console.log(date);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {date && (
        <div className="fixed inset-0">
          <div className="z-10 bg-gradient-to-t from-black to-transparent absolute inset-0 flex flex-col-reverse p-12">
            <div className="flex flex-col gap-2 text-white">
              <h2 className="text-4xl">{date.title}</h2>
              <p>{date.explanation}</p>
            </div>
          </div>
          <Image src={date.url} alt={date.title} layout="fill" />
        </div>
      )}
    </>
  );
};

export default Photo;
