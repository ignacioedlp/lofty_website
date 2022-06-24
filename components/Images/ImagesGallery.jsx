import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const images = [
  {
    title: 'Bedrooms',
    description: 'Lorem ipsum dolor sit amet',
    image:
      'https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Relax',
    description: 'Lorem ipsum dolor sit amet',
    image:
      'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Good food',
    description: 'Lorem ipsum dolor sit amet',
    image:
      'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsJ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Excelent cleaning',
    description: 'Lorem ipsum dolor sit amet',
    image:
      'https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGhvdGVsJ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
];

let count = 0;
function ImagesGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

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
    <motion.div
      className="flex flex-col items-center py-5 mx-auto lg:mx-0"
      ref={ref}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
        transition: { duration: 0.5 },
      }}
      initial="hidden"
      animate={control}
    >
      <div className="flex justify-center w-full select-none">
        <Image
          src={images[currentIndex].image}
          alt="carousel"
          height={400}
          width={700}
        />
      </div>

      <div className="flex  justify-between items-center lg:w-[700px] w-full">
        <div className="flex flex-col py-4 ml-5">
          <h3 className="text-lg font-semibold font-avenir text-heading">
            {images[currentIndex].title}
          </h3>
          <p className="text-sm font-normal font-avenir text-body1">
            {images[currentIndex].description}
          </p>
        </div>
        <div className="flex p-4 mr-5 ">
          <div className="flex items-center justify-center p-1 mx-1 rounded-full bg-icon hover:bg-icon/60">
            <button onClick={handleOnPrevClick} className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-background"
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
          <div className="flex items-center justify-center p-1 mx-1 rounded-full bg-icon hover:bg-icon/60">
            <button onClick={handleOnNextClick} className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-background"
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
    </motion.div>
  );
}

export default ImagesGallery;
