import React from "react";
import { useRouter } from "next/router";

function AboutProperties() {
  const router = useRouter();
  return (
    <header className="dark:bg-gray-800">
      <div className="flex flex-col w-full lg:justify-between  items-center  lg:mx-0 py-8">
        <h1 className="font-avenir text-heading font-semibold text-5xl text-center  ">
          About properties
        </h1>
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-96"
              ></iframe>
            </div>
            <div className="w-full lg:w-1/2 sm:ml-0 md:ml-9 flex-col ">
              <div className="lg:max-w-lg ">
                <div className="flex  mt-6">
                  <button
                    className="px-6 py-2 leading-5 text-background transition-colors duration-200 transform bg-icon rounded-md hover:bg-heading/80 focus:outline-none  font-avenir focus:bg-gray-600"
                    onClick={() => router.push("/selection")}
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AboutProperties;
