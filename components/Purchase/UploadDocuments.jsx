import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function UploadDocuments() {
  const [other, setOther] = useState([]);
  const [deposit, setDeposit] = useState([]);
  const [files, setFiles] = useState([]);
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
          Upload Documents
        </h2>
        <h4 className="mx-4 mb-5 text-lg font-normal  text-body1 font-avenir dark:text-white lg:text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quod ea in
        </h4>
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          <div className="flex flex-col w-full max-w-sm p-2 space-y-8 text-center bg-white border-2 border-body2 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700 h-96 justify-center">
            <div className="flex-shrink-0 ">
              <h3 className="mb-4 text-4xl font-bold text-icon/50  dark:text-gray-100">
                APS
              </h3>
              <FilePond
                files={files}
                allowReorder={true}
                allowMultiple={false}
                onupdatefiles={setFiles}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </div>
          </div>

          <div className="flex flex-col w-full max-w-sm p-2 space-y-8 text-center bg-white border-2 border-body2 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700 h-96 justify-center">
            <div className="flex-shrink-0 ">
              <h3 className="mb-4 text-4xl font-bold text-icon/50  dark:text-gray-100">
                Deposit
              </h3>
              <FilePond
                files={deposit}
                allowReorder={true}
                allowMultiple={false}
                onupdatefiles={setDeposit}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </div>
          </div>

          <div className="flex flex-col w-full max-w-sm p-2 space-y-8 text-center bg-white border-2 border-body2 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700 h-96 justify-center">
            <div className="flex-shrink-0 ">
              <h3 className="mb-4 text-4xl font-bold text-icon/50  dark:text-gray-100">
                Other
              </h3>
              <FilePond
                files={other}
                allowReorder={true}
                allowMultiple={false}
                onupdatefiles={setOther}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default UploadDocuments;
