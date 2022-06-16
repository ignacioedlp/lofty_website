import React from "react";
import Image from "next/image";

function Products() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center ">
          <h1 className="sm:w-2/5 text-heading font-avenir font-bold uppercase title-font text-4xl mb-2 sm:mb-0 text-center">
            Our products
          </h1>
          <p className="sm:w-3/5 text-body1 font-avenir leading-relaxed text-base sm:pl-10 pl-0 text-center my-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          </p>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col items-center">
            <div className="rounded-lg h-64 overflow-hidden ">
              <Image
                alt="content"
                height={200}
                width={200}
                className="object-cover object-center rounded-full items-center"
                src="https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtzcGFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <h2 className="text-xl  title-font text-heading font-avenir font-bold mt-5">
              Workspaces
            </h2>
            <p className="text-base leading-relaxed mt-2 text-body1 font-avenir text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              error officia earum dolor voluptatum delectus corporis,
              recusandae!
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col items-center">
            <div className="rounded-lg h-64 overflow-hidden ">
              <Image
                alt="content"
                height={200}
                width={200}
                className="object-cover object-center rounded-full items-center"
                src="https://images.unsplash.com/photo-1565895405127-481853366cf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <h2 className="text-xl  title-font text-heading font-avenir font-bold mt-5">
              Restaurants
            </h2>
            <p className="text-base leading-relaxed mt-2 text-body1 font-avenir text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              error officia earum dolor voluptatum delectus corporis,
              recusandae!
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col items-center">
            <div className="rounded-lg h-64 overflow-hidden ">
              <Image
                alt="content"
                height={200}
                width={200}
                className="object-cover object-center rounded-full items-center"
                src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <h2 className="text-xl  title-font text-heading font-avenir font-bold mt-5">
              Units
            </h2>
            <p className="text-base leading-relaxed mt-2 text-body1 font-avenir text-center ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              error officia earum dolor voluptatum delectus corporis,
              recusandae!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
