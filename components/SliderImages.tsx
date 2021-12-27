import React from "react";
import { DateImageType } from "../hooks/fetchDate";
import { useDates } from "../hooks/fetchDates";
import LoadingSpinner from "./LoadingSpinner";
import Photo from "./Photo";

interface Props {}

const SliderImages = (props: Props) => {
  const { data: dates, isLoading, error } = useDates();
  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {error && <p>Error: {error.message}</p>}
      {dates && dates.length > 0 && (
        <div className="snap-x gap-10 overflow-x-scroll w-full inline-flex snap-mandatory px-20">
          {dates?.map((img: DateImageType) => (
            <Photo date={img} key={img.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SliderImages;
