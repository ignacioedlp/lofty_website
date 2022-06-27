import React from 'react';
import ReactLoading from 'react-loading';

function SpinnerLoading() {
  return (
    <div className="w-full flex justify-center ">
      <ReactLoading
        type={'spinningBubbles'}
        color={'#486581'}
        height={100}
        width={100}
      />
    </div>
  );
}

export default SpinnerLoading;
