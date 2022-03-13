import React from 'react';
import { CircleLoader } from 'react-spinners';

interface Props {}

const LoadingSpinner = (props: Props) => {
  return (
    <div className='w-full h-screen grid place-items-center bg-gray-900'>
      <CircleLoader color='#fff' />
    </div>
  );
};

export default LoadingSpinner;
