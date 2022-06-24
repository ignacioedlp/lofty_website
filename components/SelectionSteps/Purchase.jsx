import { motion, useAnimation } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

import { Formik } from 'formik';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';

function Purchase() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const router = useRouter();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  const handleReserveUnit = ({ deposit, price, lotNumber, colour }) => {
    if (deposit && price && colour && lotNumber) {
      toast.success('Success');
      router.push('/member/purchase');
    } else {
      toast.error('Error');
    }
  };

  return (
    <header className="dark:bg-gray-800">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg ">
              <h1 className="text-2xl mb-5 mx-4 font-semibold uppercase text-heading font-avenir dark:text-white lg:text-3xl ">
                Stay informed
              </h1>
              <motion.section
                className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
                ref={ref}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                  transition: { backInOut: [0.17, 0.67, 0.83, 0.67] },
                }}
                initial="hidden"
                animate={control}
              >
                <Formik
                  onSubmit={(values) => handleReserveUnit(values)}
                  initialValues={{
                    lotNumber: '',
                    colour: '',
                    price: '',
                    deposit: '',
                  }}
                >
                  {({ handleSubmit, values, handleChange }) => (
                    <form onSubmit={handleSubmit}>
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
                            onChange={handleChange}
                            value={values.lotNumber}
                            placeholder="Number"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          />
                        </div>

                        <div>
                          <label
                            className="text-body1 font-avenir  dark:text-gray-200"
                            htmlFor="lotNumber"
                          >
                            Colour pallete
                          </label>
                          <select
                            onChange={handleChange}
                            placeholder="Colour pallete"
                            id="colour"
                            value={values.colour}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          >
                            <option>Red</option>
                            <option>Yellow</option>
                            <option>White</option>
                          </select>
                        </div>

                        <div>
                          <label
                            className="text-body1 font-avenir  dark:text-gray-200"
                            htmlFor="price"
                          >
                            Price
                          </label>
                          <input
                            onChange={handleChange}
                            value={values.price}
                            placeholder="Price"
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
                          <select
                            onChange={handleChange}
                            placeholder="Deposit"
                            id="deposit"
                            value={values.deposit}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          >
                            <option>XXXX-XXXX-XXXX-2222</option>
                            <option>XXXX-XXXX-XXXX-2002</option>
                            <option>XXXX-XXXX-XXXX-2112</option>
                            <option>XXXX-XXXX-XXXX-2233</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-background transition-colors duration-200 transform bg-icon rounded-md hover:bg-heading/80 focus:outline-none  font-avenir focus:bg-gray-600">
                          Reserve your unit
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </motion.section>
            </div>
          </div>

          <motion.div
            className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
            ref={ref}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
              transition: { backInOut: [0.17, 0.67, 0.83, 0.67] },
            }}
            initial="hidden"
            animate={control}
          >
            <Image
              className=" lg:max-w-2xl"
              src="https://wcs.smartdraw.com/floor-plan/img/office-site-plan-example.png?bn=15100111830"
              alt=""
              height={500}
              width={500}
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Purchase;
