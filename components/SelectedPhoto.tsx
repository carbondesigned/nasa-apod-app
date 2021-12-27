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
    <Layout>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {date && (
        <div className="fixed inset-0">
          <div className="z-10 bg-gradient-to-t from-black to-transparent absolute inset-0 flex flex-col-reverse p-12">
            <div className="flex flex-col gap-2 text-white">
              <Link href="/today">
                <a className="text-white max-w-max">
                  <Button primary>back</Button>
                </a>
              </Link>
              <h2 className="text-4xl">{date.title}</h2>
              <p>{date.explanation}</p>
            </div>
          </div>
          {date.url ? (
            <div className="w-full h-full object-contain">
              <Image
                src={date.url}
                alt="Astronomy Picture of the Day"
                layout="responsive"
                width={1200}
                height={1000}
              />
            </div>
          ) : (
            <div>
              <LoadingSpinner />
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default Photo;
