import React from "react";
import Image from "next/image";

function ProyectVideos() {
  return (
    <div className="py-5 ">
      <div className="flex flex-col lg:flex-row w-full items-center  lg:justify-between my-2 p-1">
        <div className="flex flex-col lg:hidden">
          <h2 className="font-avenir text-heading text-2xl lg:text-5xl">
            Project tagline
          </h2>
          <div className="flex lg:w-[600px]">
            <p className="font-avenir text-body1 font-normal text-sm  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              distinctio, accusamus laborum nesciunt quia rem veniam consectetur
            </p>
          </div>
        </div>
        <div className="">
          <Image
            src="https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGhvdGVsJ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            width={500}
            height={400}
            alt="image1"
          />
        </div>
        <div className="lg:flex flex-col hidden ">
          <h2 className="font-avenir text-heading text-2xl lg:text-5xl">
            Project tagline
          </h2>
          <div className="flex lg:w-[600px]">
            <p className="font-avenir text-body1 font-normal text-sm  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              distinctio, accusamus laborum nesciunt quia rem veniam consectetur
            </p>
          </div>
        </div>
      </div>
      <div className="flex p-1 flex-col lg:flex-row w-full items-center  lg:justify-between my-2">
        <div className="flex flex-col">
          <h2 className="font-avenir text-heading  text-2xl lg:text-5xl">
            Building tagline
          </h2>
          <div className="flex lg:w-[600px]">
            <p className="font-avenir text-body1 font-normal text-sm text-start ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              distinctio, accusamus laborum nesciunt quia rem veniam consectetur
            </p>
          </div>
        </div>
        <div className="">
          <Image
            src="https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGhvdGVsJ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            width={500}
            height={400}
            alt="image1"
          />
        </div>
      </div>
    </div>
  );
}

export default ProyectVideos;
