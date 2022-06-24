import { motion, useAnimation } from 'framer-motion';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const colours = [
  {
    title: 'Red',
  },
  {
    title: 'Yellow',
  },
  {
    title: 'White',
  },
];

function Colour() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Colour selections
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
          magni libero consequuntur voluptatum velit amet id repudiandae ea,
          deleniti laborum in neque eveniet.
        </p>

        <motion.div
          ref={ref}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
            transition: { duration: 0.5 },
          }}
          initial="hidden"
          animate={control}
          className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {colours.map((color, index) => (
            <div
              key={index}
              className="w-full p-8 flex-col shadow-body1 shadow-md space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700 "
            >
              <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
                {color.title}
              </p>

              <p className="font-medium text-gray-500 dark:text-gray-300">
                Life time
              </p>

              <p className="font-medium text-gray-500 dark:text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                cum velit molestiae rerum consequatur sit repellendus
                praesentium voluptas nobis amet, quidem delectus eaque
                perferendis voluptates, enim dolores corrupti. Corporis, neque!
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Colour;
