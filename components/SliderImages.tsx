import React from "react";
import { DateImageType } from "../hooks/fetchDate";
import { useDates } from "../hooks/fetchDates";
import LoadingSpinner from "./LoadingSpinner";
import Photo from "./Photo";

interface Props {}

const SliderImages = (props: Props) => {
  const { data: dates, isLoading, error } = useDates();
  console.log(dates);
  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {error && <p>Error: {error.message}</p>}
      <div className="snap-x gap-10 overflow-x-scroll w-full inline-flex snap-mandatory">
        {dates &&
          dates.map((img: DateImageType) => (
            <Photo date={img} key={img.title} />
          ))}
      </div>
    </div>
  );
};

export default SliderImages;
