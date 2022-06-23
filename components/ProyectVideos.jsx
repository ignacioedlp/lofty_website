import { motion, useAnimation } from 'framer-motion';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function ProyectVideos() {
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
    <div className="py-5 ">
      <div className="flex flex-col items-center w-full p-1 my-2 lg:flex-row lg:justify-between">
        <motion.div
          className="flex flex-col px-4 lg:hidden"
          ref={ref}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
            transition: { duration: 0.5 },
          }}
          initial="hidden"
          animate={control}
        >
          <h2 className="text-2xl font-avenir text-heading lg:text-5xl">
            Project tagline
          </h2>
          <div className="flex lg:w-[600px]">
            <p className="text-sm font-normal font-avenir text-body1 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              distinctio, accusamus laborum nesciunt quia rem veniam consectetur
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center w-full p-4 mt-6 lg:mt-0 lg:w-1/2"
          ref={ref}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
            transition: { duration: 0.5 },
          }}
          initial="hidden"
          animate={control}
        >
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-96"
          ></iframe>
        </motion.div>
        <motion.div
          className="flex-col hidden px-4 lg:flex "
          ref={ref}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
            transition: { duration: 0.5 },
          }}
          initial="hidden"
          animate={control}
        >
          <h2 className="text-2xl font-avenir text-heading lg:text-5xl ">
            Project tagline
          </h2>
          <div className="flex lg:w-[600px]">
            <p className="text-sm font-normal font-avenir text-body1 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              distinctio, accusamus laborum nesciunt quia rem veniam consectetur
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center w-full p-1 my-2 lg:flex-row lg:justify-between">
        <motion.div
          className="flex flex-col px-4"
          ref={ref}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
            transition: { duration: 0.5 },
          }}
          initial="hidden"
          animate={control}
        >
          <h2 className="text-2xl font-avenir text-heading lg:text-5xl">
            Building tagline
          </h2>
          <div className="flex lg:w-[600px]">
            <p className="text-sm font-normal font-avenir text-body1 text-start ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              distinctio, accusamus laborum nesciunt quia rem veniam consectetur
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center w-full p-4 mt-6 lg:mt-0 lg:w-1/2"
          ref={ref}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
            transition: { duration: 0.5 },
          }}
          initial="hidden"
          animate={control}
        >
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-96"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}

export default ProyectVideos;
