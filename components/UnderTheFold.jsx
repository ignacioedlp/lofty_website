import React from "react";
import Image from "next/image";

function UnderTheFold({ title, description, data }) {
  return (
    (data.length > 0 && (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col items-center ">
            <h1 className="sm:w-2/5 text-heading font-avenir font-bold uppercase title-font text-4xl mb-2 sm:mb-0 text-center">
              {title}
            </h1>
            <p className="sm:w-3/5 text-body1 font-avenir leading-relaxed text-base  pl-0 text-center my-8">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            {data.map((item, index) => (
              <div
                key={index}
                className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col items-center"
              >
                <div className="rounded-lg h-64 overflow-hidden ">
                  <Image
                    alt="content"
                    height={200}
                    width={200}
                    className="object-cover object-center rounded-full items-center"
                    src={item.image}
                  />
                </div>
                <h2 className="text-xl  title-font text-heading font-avenir font-bold mt-5">
                  {item.title}
                </h2>
                <p className="text-base leading-relaxed mt-2 text-body1 font-avenir text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )) ||
    null
  );
}

export default UnderTheFold;
