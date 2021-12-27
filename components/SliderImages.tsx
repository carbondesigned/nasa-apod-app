import React from "react";
import { DateImageType } from "../hooks/fetchDate";
import Photo from "./Photo";
interface Props {
  dates: DateImageType[];
}

const SliderImages = ({ dates }: Props) => {
  return (
    <div className="snap-x">
      {dates && dates.length > 0 && (
        <div className="snap-start whitespace-nowrap no-scrollbar scroll-smooth touch-pan-x gap-10 overflow-x-scroll w-full inline-flex snap-mandatory px-20">
          {dates?.map((img: DateImageType) => (
            <Photo date={img} key={img.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SliderImages;
