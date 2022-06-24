import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

function DownloadDocuments() {
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
    <motion.div
      className="bg-white dark:bg-gray-800"
      ref={ref}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
        transition: { backInOut: [0.17, 0.67, 0.83, 0.67] },
      }}
      initial="hidden"
      animate={control}
    >
      <div className="container px-6 py-8 mx-auto">
        <h2 className="mx-4 mb-5 text-2xl font-semibold uppercase text-heading font-avenir dark:text-white lg:text-3xl text-center">
          Download Documents
        </h2>
        <h4 className="mx-4 mb-5 text-lg font-normal  text-body1 font-avenir dark:text-white lg:text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quod ea in
        </h4>
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          <div className="flex flex-col w-full max-w-sm p-2 space-y-8 text-center bg-white border-2 border-body2 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700 h-96 justify-center">
            <div className="flex-shrink-0 ">
              <a
                className="mb-4 text-4xl font-bold text-icon/50  dark:text-gray-100"
                href="warrantly.pdf"
                download="warrantly"
              >
                APS
              </a>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-sm p-2 space-y-8 text-center bg-white border-2 border-body2 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700 h-96 justify-center">
            <div className="flex-shrink-0 ">
              <a
                className="mb-4 text-4xl font-bold text-icon/50  dark:text-gray-100"
                href="warrantly.pdf"
                download="warrantly"
              >
                Warrantly
              </a>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-sm p-2 space-y-8 text-center bg-white border-2 border-body2 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700 h-96 justify-center">
            <div className="flex-shrink-0 ">
              <a
                className="mb-4 text-4xl font-bold text-icon/50  dark:text-gray-100"
                href="warrantly.pdf"
                download="warrantly"
              >
                Specifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DownloadDocuments;
