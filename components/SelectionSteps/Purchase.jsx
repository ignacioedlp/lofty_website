import React from "react";
import Image from "next/image";

function Purchase() {
  return (
    <header className="dark:bg-gray-800">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg ">
              <h1 className="text-2xl mb-5 mx-4 font-semibold uppercase text-heading font-avenir dark:text-white lg:text-3xl ">
                Stay informed
              </h1>
              <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <form>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="text-body1 font-avenir  dark:text-gray-200"
                        htmlFor="lotNumber"
                      >
                        Lot number
                      </label>
                      <input
                        id="lotNumber"
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-body1 font-avenir  dark:text-gray-200"
                        htmlFor="colour"
                      >
                        Colour pallete
                      </label>
                      <input
                        id="colour"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-body1 font-avenir  dark:text-gray-200"
                        htmlFor="price"
                      >
                        Price
                      </label>
                      <input
                        id="price"
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-body1 font-avenir   dark:text-gray-200"
                        htmlFor="deposit"
                      >
                        Deposit
                      </label>
                      <input
                        id="deposit"
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <button className="px-6 py-2 leading-5 text-background transition-colors duration-200 transform bg-icon rounded-md hover:bg-heading/80 focus:outline-none  font-avenir focus:bg-gray-600">
                      Reserve your unit
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image
              className=" lg:max-w-2xl"
              src="https://wcs.smartdraw.com/floor-plan/img/office-site-plan-example.png?bn=15100111830"
              alt=""
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Purchase;
