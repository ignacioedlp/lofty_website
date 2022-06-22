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
  {
    title: "Excelent cleaning",
    description: "Lorem ipsum dolor sit amet",
    image:
      "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGhvdGVsJ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Excelent cleaning",
    description: "Lorem ipsum dolor sit amet",
    image:
      "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGhvdGVsJ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

function TopBannerCarousel() {
  const [imagesData, setImagesData] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  useEffect(() => {
    setImagesData(images);
  }, []);

  return (
    <div className="flex flex-col w-full lg:justify-between  items-center  lg:mx-0 py-8">
      <div className="flex flex-row items-center mb-10">
        <h2 className="font-avenir text-heading font-semibold text-5xl ">
          Process tagline
        </h2>
      </div>
      <div className="lg:flex lg:flex-row  flex-col items-center w-full ">
        <div className="w-full  justify-center flex-row ">
          <div style={{ padding: `0 ${chevronWidth}px` }}>
            {imagesData.length > 0 && (
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={4}
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
                {imagesData.map((image, index) => (
                  <div key={index} className="">
                    <Image
                      src={image.image}
                      alt={image.title}
                      width={300}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </ItemsCarousel>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBannerCarousel;
