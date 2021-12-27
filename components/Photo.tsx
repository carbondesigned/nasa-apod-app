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
    <div className="w-full rounded-3xl relative">
      <div className="z-10 bg-gradient-to-t from-black to-transparent absolute inset-0 flex flex-col-reverse p-12">
        <div className="flex flex-col gap-2">
          <span>{date.date}</span>
          <h2 className="text-4xl">{date.title}</h2>
          <p className="truncate">{date.explanation}</p>
          <Button
            max
            secondary
            link
            href={`/apod/${titleToSlug(date.title)}`}
            onClick={() => setSelectedDate(date.date)}
          >
            View
          </Button>
        </div>
      </div>
      <div className="h-[25rem] w-[25rem] lg:h-[50rem] lg:w-[50rem]">
        <Image
          src={date.url}
          alt={date.title}
          layout="responsive"
          width={1200}
          height={1000}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Photo;
