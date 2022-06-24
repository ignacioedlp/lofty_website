import { motion, useAnimation } from 'framer-motion';

import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function UnderTheFold({ title, description, data }) {
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
    (data.length > 0 && (
      <motion.section
        ref={ref}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
          transition: { duration: 0.5 },
        }}
        initial="hidden"
        animate={control}
        className="text-gray-600 body-font"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col items-center ">
            <h1 className="mb-2 text-4xl font-bold text-center uppercase sm:w-2/5 text-heading font-avenir title-font sm:mb-0">
              {title}
            </h1>

            <p className="pl-0 my-8 text-base leading-relaxed text-center sm:w-3/5 text-body1 font-avenir">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 mb-6 md:w-1/3 sm:mb-0"
              >
                <div className="h-64 overflow-hidden rounded-lg ">
                  <Image
                    alt="content"
                    height={200}
                    width={200}
                    className="items-center object-cover object-center rounded-full"
                    src={item.image}
                  />
                </div>
                <h2 className="mt-1 text-xl font-bold title-font text-heading font-avenir">
                  {item.title}
                </h2>
                <p className="mt-1 text-md font-bold title-font text-heading font-avenir">
                  {item.rol}
                </p>
                <p className="mt-2 text-base leading-relaxed text-center text-body1 font-avenir ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    )) ||
    null
  );
}

export default UnderTheFold;
