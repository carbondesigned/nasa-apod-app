import Image from "next/image";
import React from "react";
import { useAppContext } from "../contexts/appContext";
import { titleToSlug } from "../util/titleToSlug";
import Button from "./Button";

interface Props {
  date: any;
  grid?: boolean;
}

const Photo = ({ date, grid }: Props) => {
  const { setSelectedDate } = useAppContext();
  return (
    <div className="w-full relative rounded-3xl">
      <div className="z-10 bg-gradient-to-t from-black to-transparent absolute inset-0 flex flex-col-reverse p-12">
        <div className="flex flex-col gap-2">
          <span>{date.date}</span>
          <h2
            className={`${!grid ? "text-4xl whitespace-normal" : "text-2xl"}`}
          >
            {date.title}
          </h2>
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
      <div
        className={`rounded-3xl overflow-hidden ${
          !grid
            ? "h-[25rem] w-[25rem] lg:h-[50rem] lg:w-[50rem] "
            : "h-[25rem] w-[25rem] lg:h-[20rem] lg:w-[20rem]"
        }`}
      >
        {date.media_type === "video" ? (
          <iframe
            className="w-full h-full"
            src={date.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Image
            src={date.url}
            alt={date.title}
            layout="responsive"
            width={1200}
            height={1000}
            objectFit="cover"
          />
        )}
      </div>
    </div>
  );
};

export default Photo;
