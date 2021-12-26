import Image from "next/image";
import React from "react";
import { useAppContext } from "../contexts/appContext";
import { titleToSlug } from "../util/titleToSlug";
import Button from "./Button";

interface Props {
  date: any;
}

const Photo = ({ date }: Props) => {
  const { setSelectedDate } = useAppContext();
  return (
    <div className="w-full overflow-hidden rounded-3xl relative">
      <div className="z-10 bg-gradient-to-t from-black to-transparent absolute inset-0 flex flex-col-reverse p-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl">{date.title}</h2>
          <p className="truncate">{date.explanation}</p>
          <Button
            max
            secondary
            link
            href={`/apod/${titleToSlug(date.title)}`}
            action={setSelectedDate(date.date)}
          >
            View
          </Button>
        </div>
      </div>
      <Image
        src={date.url}
        alt={date.title}
        layout="fixed"
        width={1000}
        height={800}
      />
    </div>
  );
};

export default Photo;