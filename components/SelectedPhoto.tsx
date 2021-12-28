import React from "react";
import { useDate } from "../hooks/fetchDate";
import Image from "next/image";
import Button from "./Button";

import { titleToSlug } from "../util/titleToSlug";
import { useAppContext } from "../contexts/appContext";
import Layout from "./Layout";
import LoadingSpinner from "./LoadingSpinner";
import Link from "next/link";

interface Props {}

const Photo = (props: Props) => {
  const { selectedDate } = useAppContext();
  const { data: date, isLoading, error } = useDate(selectedDate);
  return (
    <Layout max>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {date && (
        <div className="fixed inset-0 mt-10">
          <div className="z-10 bg-gradient-to-t from-black to-transparent absolute inset-0 flex flex-col-reverse p-12 pointer-events-none">
            <div className="flex flex-col gap-2 text-white">
              <Link href="/today">
                <a className="text-white max-w-max">
                  <Button primary>back</Button>
                </a>
              </Link>
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                {date.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-2xl lg:text-2xl">
                {date.explanation}
              </p>
            </div>
          </div>
          <div className="w-full h-full">
            {date.media_type === "video" ? (
              <iframe
                className="w-full h-full"
                src={date.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : date.media_type === "image" ? (
              <Image
                src={date.url}
                alt={date.title}
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
    </Layout>
  );
};

export default Photo;
