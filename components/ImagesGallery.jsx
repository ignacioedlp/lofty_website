import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  {
    title: "Bedrooms",
    description: "Lorem ipsum dolor sit amet",
    image:
      "https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Relax",
    description: "Lorem ipsum dolor sit amet",
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Good food",
    description: "Lorem ipsum dolor sit amet",
    image:
      "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsJ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Excelent cleaning",
    description: "Lorem ipsum dolor sit amet",
    image:
      "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGhvdGVsJ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

let count = 0;
function ImagesGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    count = (count + 1) % images.length;
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const imagesLength = images.length;
    count = (currentIndex + imagesLength - 1) % imagesLength;
    setCurrentIndex(count);
  };

  return (
    <div className="flex flex-col  items-center mx-auto lg:mx-0 py-5">
      <div className="w-full select-none flex justify-center">
        <Image
          src={images[currentIndex].image}
          alt="carousel"
          height={400}
          width={700}
        />
      </div>
      <div className="flex  justify-between items-center lg:w-[700px] w-full">
        <div className="flex flex-col ml-5 py-4">
          <h3 className="font-avenir text-heading font-semibold text-lg">
            {images[currentIndex].title}
          </h3>
          <p className="font-avenir text-body1 font-normal text-sm">
            {images[currentIndex].description}
          </p>
        </div>
        <div className="mr-5 p-4 flex ">
          <div className="p-1 bg-icon rounded-full flex items-center justify-center mx-1 hover:bg-icon/60">
            <button onClick={handleOnPrevClick} className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-background"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div className="p-1 bg-icon rounded-full flex items-center justify-center mx-1 hover:bg-icon/60">
            <button onClick={handleOnNextClick} className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-background"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagesGallery;
