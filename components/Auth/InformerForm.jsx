import { motion, useAnimation } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { Formik } from 'formik';

import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import heroPage from '../../public/pngs/hero.png';

function InformerForm() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  const handleInformed = ({
    firstName,
    lastName,
    postalCode,
    phone,
    email,
  }) => {
    if (firstName && lastName && postalCode && phone && email) {
      toast.success('User informed');
    } else {
      toast.error('Please fill all required fields');
    }
  };

  return (
    <motion.header
      className="dark:bg-gray-800"
      ref={ref}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
        transition: { backInOut: [0.17, 0.67, 0.83, 0.67] },
      }}
      initial="hidden"
      animate={control}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg ">
              <h1 className="mx-4 mb-5 text-2xl font-semibold uppercase text-heading font-avenir dark:text-white lg:text-3xl ">
                Stay informed
              </h1>
              <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <Formik
                  onSubmit={(values) => handleInformed(values)}
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    postalCode: '',
                    phone: '',
                    email: '',
                  }}
                >
                  {({ handleSubmit, values, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                          <label
                            className="text-body1 font-avenir dark:text-gray-200"
                            htmlFor="firstName"
                          >
                            First name
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            value={values.firstName}
                            onChange={handleChange}
                            placeholder="First name"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-body1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          />
                        </div>

                        <div>
                          <label
                            className="text-body1 font-avenir dark:text-gray-200"
                            htmlFor="lastName"
                          >
                            Last name
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            value={values.lastName}
                            onChange={handleChange}
                            placeholder="Last name"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-body1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          />
                        </div>

                        <div>
                          <label
                            className="text-body1 font-avenir dark:text-gray-200"
                            htmlFor="postalCode"
                          >
                            Postal code
                          </label>
                          <input
                            id="postalCode"
                            type="text"
                            value={values.postalCode}
                            onChange={handleChange}
                            placeholder="Code"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-body1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          />
                        </div>

                        <div>
                          <label
                            className="text-body1 font-avenir dark:text-gray-200"
                            htmlFor="phone"
                          >
                            Phone number
                          </label>
                          <input
                            id="phone"
                            type="number"
                            value={values.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-body1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                          value={values.email}
                          onChange={handleChange}
                          placeholder="Email"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-body1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </div>
                      <div className="flex justify-end mt-6">
                        <button
                          className="px-6 py-2 leading-5 transition-colors duration-200 transform rounded-md text-background bg-icon hover:bg-heading/80 focus:outline-none font-avenir focus:bg-gray-600"
                          onSubmit={handleSubmit}
                        >
                          Register now
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </section>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image
              className="w-full h-full lg:max-w-2xl"
              src={heroPage}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default InformerForm;
