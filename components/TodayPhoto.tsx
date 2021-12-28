import React from "react";
import { useToday } from "../hooks/fetchToday";
import Image from "next/image";
import Button from "./Button";

import { titleToSlug } from "../util/titleToSlug";
import { useAppContext } from "../contexts/appContext";
import LoadingSpinner from "./LoadingSpinner";

interface Props {
  menu?: boolean;
  focus?: boolean;
}

const Photo = (props: Props) => {
  const { setSelectedDate } = useAppContext();
  const { data: today, isLoading, error } = useToday();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {today && !isLoading && (
        <div
          className={`${
            props.menu
              ? "fixed inset-0 opacity-25"
              : props.focus
              ? "fixed inset-0"
              : "absolute m-auto inset-0 rounded-3xl h-5/6 w-5/6 overflow-hidden"
          }`}
        >
          {!props.menu && (
            <div className="z-10 bg-gradient-to-t from-black to-transparent absolute inset-0 flex flex-col-reverse p-12">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl">{today.title}</h2>
                <p className={`${!props.focus && "truncate"}`}>
                  {today.explanation}
                </p>
                <Button
                  max
                  secondary
                  link
                  href={`/apod/${titleToSlug(today.title)}`}
                  onClick={() => setSelectedDate(today.date)}
                >
                  View
                </Button>
              </div>
            </div>
          )}
          <div className="w-full h-full">
            {today.media_type === "video" ? (
              <iframe
                className="w-full h-full"
                src={today.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : today.media_type === "image" ? (
              <Image
                src={today.url}
                alt={today.title}
                layout="responsive"
                width={1200}
                height={1000}
                objectFit="cover"
              />
            ) : (
              <LoadingSpinner />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Photo;
