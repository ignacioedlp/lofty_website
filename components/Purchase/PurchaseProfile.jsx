import { motion, useAnimation } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function PurchaseProfile() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

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
        <h2 className="mx-4 mb-5 text-2xl font-semibold uppercase text-heading font-avenir dark:text-white lg:text-3xl text-center">
          Stay informed
        </h2>
        <h4 className="mx-4 mb-5 text-lg font-normal  text-body1 font-avenir dark:text-white lg:text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quod ea in
        </h4>
        <div className="items-center lg:flex">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 lg:mr-5">
            <Image
              className="w-full h-full lg:max-w-2xl "
              src=" https://images.unsplash.com/photo-1531877264583-a58acd888a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              height="400"
              width="600"
            />
          </div>
          <div className="w-full lg:w-1/3">
            <div className="lg:max-w-lg ">
              <div className="grid grid-cols-2 gap-9 mt-4  h-full justify-items-start">
                <div>
                  <h3 className="text-body1 font-bold font-avenir dark:text-gray-200">
                    Purchaser Name:
                  </h3>
                  <p className=" text-lg font-normal  text-body1 font-avenir dark:text-white lg:text-lg ">
                    Model 1
                  </p>
                </div>
                <div>
                  <h3 className="text-body1 font-bold font-avenir dark:text-gray-200">
                    Date of Purchase:
                  </h3>
                  <p className=" text-lg font-normal  text-body1 font-avenir dark:text-white lg:text-lg ">
                    January 1, 2022
                  </p>
                </div>
                <div>
                  <h3 className="text-body1 font-bold font-avenir dark:text-gray-200">
                    Model Type:
                  </h3>
                  <p className=" text-lg font-normal  text-body1 font-avenir dark:text-white lg:text-lg ">
                    Model 1
                  </p>
                </div>
                <div>
                  <h3 className="text-body1 font-bold font-avenir dark:text-gray-200">
                    Lot Number:
                  </h3>
                  <p className=" text-lg font-normal  text-body1 font-avenir dark:text-white lg:text-lg ">
                    46
                  </p>
                </div>
                <div className="mt-4 ">
                  <h3 className="text-body1 font-bold font-avenir dark:text-gray-200">
                    Finish Selection:
                  </h3>
                  <p className=" text-lg font-normal  text-body1 font-avenir dark:text-white lg:text-lg ">
                    Green
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default PurchaseProfile;
