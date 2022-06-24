import { useRouter } from 'next/router';

function AboutProperties() {
  const router = useRouter();
  return (
    <header className="dark:bg-gray-800">
      <div className="flex flex-col items-center w-full py-8 lg:justify-between lg:mx-0">
        <h1 className="text-5xl font-semibold text-center font-avenir text-heading ">
          About properties
        </h1>
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="flex items-center h-96 justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <video
                autoPlay={true}
                loop
                muted
                id="video"
                className="w-full h-96"
              >
                <source src={'../videoIndexPage.mp4'} type="video/mp4" />
              </video>
            </div>
            <div className="flex-col w-full lg:w-1/2 sm:ml-0 lg:ml-9 ">
              <div className="lg:max-w-lg ">
                <div className="flex mt-6 justify-center lg:justify-start">
                  <button
                    className="px-6 py-2 leading-5 transition-colors duration-200 transform rounded-md text-background bg-icon hover:bg-heading/80 focus:outline-none font-avenir focus:bg-gray-600"
                    onClick={() => router.push('/member/selection')}
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AboutProperties;
