import React from "react";

function RegisterForm() {
  return (
    <header className="dark:bg-gray-800  ">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center  lg:flex">
          <div className="flex flex-col items-center justify-start w-full mt-6 lg:mt-0 lg:w-1/2 mx-auto my-4">
            <h2 className="font-avenir text-body1 font-semibold text-5xl">
              Sign up to Lofty
            </h2>
            <p className="flex lg:w-1/2 text-2xl text-center font-avenir text-body1 mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis exercitationem explicabo at adipisci eveniet est.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg ">
              <h1 className="text-2xl mb-5 mx-4 font-semibold uppercase text-heading font-avenir dark:text-white lg:text-3xl ">
                Register
              </h1>
              <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <form>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="text-body1 font-avenir  dark:text-gray-200"
                        htmlFor="firstName"
                      >
                        First name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-body1 font-avenir  dark:text-gray-200"
                        htmlFor="lastName"
                      >
                        Last name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-body1 font-avenir  dark:text-gray-200"
                        htmlFor="postalCode"
                      >
                        Postal code
                      </label>
                      <input
                        id="postalCode"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-body1 font-avenir   dark:text-gray-200"
                        htmlFor="phone"
                      >
                        Phone number
                      </label>
                      <input
                        id="phone"
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      className="text-body1 font-avenir dark:text-gray-200"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="text-body1 font-avenir  dark:text-gray-200"
                        htmlFor="firstName"
                      >
                        Password
                      </label>
                      <input
                        id="firstName"
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="text-body1 font-avenir  dark:text-gray-200"
                        htmlFor="firstName"
                      >
                        Confirm Password
                      </label>
                      <input
                        id="firstName"
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="flex justify-end mt-6">
                      <button className="px-6 py-2 leading-5 text-background transition-colors duration-200 transform bg-icon rounded-md hover:bg-heading/80 focus:outline-none  font-avenir focus:bg-gray-600">
                        Register now
                      </button>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default RegisterForm;
