import React from 'react';
import { DateImageType } from '../hooks/fetchDate';
import Photo from './Photo';
interface Props {
  dates: DateImageType[];
}

const SliderImages = ({ dates }: Props) => {
  return (
    <div>
      {dates && dates.length > 0 && (
        <div className='snap-x whitespace-nowrap no-scrollbar scroll-smooth touch-pan-x gap-10 overflow-x-scroll w-full inline-flex px-6 md:px-20'>
          {dates
            .filter((img: DateImageType) => img.media_type === 'image')
            .reverse()
            .map((img: DateImageType) => (
              <Photo date={img} key={img.title} />
            ))}
        </div>
      )}
    </div>
  );
};

export default SliderImages;
