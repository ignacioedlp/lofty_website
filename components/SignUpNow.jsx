import React, { useEffect, useState } from "react";
import Image from "next/image";
import ItemsCarousel from "react-items-carousel";

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

function SignUpNow() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <div className="flex flex-col w-full lg:justify-between  items-center  lg:mx-0 py-5">
      <div className="flex flex-row items-center mb-10">
        <h2 className="font-avenir text-heading font-semibold text-5xl">
          Process tagline
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col items-center w-full">
        <div className="flex flex-row justify-between items-center lg:w-[700px] ">
          <div className="flex flex-col lg:ml-5 py-4 items-center">
            <h3 className="font-avenir mx-4 lg:mx-0 text-body1 font-normal lg:w-1/2 text-2xl text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              cum quaerat omnis impedit enim fuga sint saepe et fugit dolorum,
              quasi quod porro expedita voluptatibus nobis amet at, modi
              exercitationem!
            </h3>
            <div className="flex justify-center lg:justify-start mt-6 ">
              <button className="px-6 py-2 leading-5 text-background transition-colors duration-200 transform bg-icon rounded-md hover:bg-heading/80 focus:outline-none  font-avenir focus:bg-gray-600 ">
                Sign up now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex-row justify-center ">
          <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={3}
              gutter={20}
              rightChevron={
                <button className="p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-icon"
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
              }
              leftChevron={
                <button className="p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-icon"
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
              }
              outsideChevron
              chevronWidth={chevronWidth}
            >
              {images.map((image, index) => (
                <div key={index} className="">
                  <Image
                    src={image.image}
                    alt={image.title}
                    width={200}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </ItemsCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpNow;
