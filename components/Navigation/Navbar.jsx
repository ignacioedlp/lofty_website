import Avvvatars from 'avvvatars-react';
import Image from 'next/image';
import lofty from '../../public/svgs/Icon_lofty_b.svg';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = () => {};

  const isLogged = useSelector((state) => state.session.isLogged);
  const email = useSelector((state) => state.session.email);

  return (
    <nav className="">
      <div className="container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center text-heading font-avenir ">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
              onClick={() => router.push('/')}
            >
              <Image
                src={lofty}
                width={50}
                height={50}
                alt="lofty"
                loading="lazy"
              />
            </a>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
              onClick={() => toggle()}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        {isOpen && (
          <div className="items-center align-middle lg:flex">
            <div className="flex flex-col align-middle lg:flex-row lg:mx-6">
              <a
                className=" my-2 md:my-auto text-sm  font-medium text-gray-700 dark:text-gray-200 hover:text-heading/90 dark:hover:text-blue-400 lg:mx-4 "
                href="#"
              >
                Support
              </a>
              <a
                className="my-2 md:my-auto text-sm font-medium  text-gray-700 dark:text-gray-200 hover:text-heading/90 dark:hover:text-blue-400 lg:mx-4 "
                href="#"
                onClick={() => router.push('/member/pre_membership')}
              >
                Membership
              </a>

              <select
                onChange={changeLanguage}
                className="block mx-0 my-2 py-2 text-gray-700 bg-white border border-none rounded-md md:mx-2 md:my-0 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
              </select>

              {!isLogged ? (
                <div className="flex flex-col lg:flex-row">
                  <div className="mx-0 my-1 lg:mx-2 lg:my-0">
                    <a
                      className="block w-1/2 px-2 py-2 text-sm font-medium leading-5 text-center transition-colors duration-200 transform rounded-md lg:-my-2 lg:mx-1 font-avenir text-background bg-heading hover:bg-heading/75 md:mx-0 md:w-auto"
                      href="#"
                      onClick={() => router.push('/auth/register')}
                    >
                      Join free
                    </a>
                  </div>
                  <div className="mx-0 my-1 lg:mx-1 lg:my-0">
                    <a
                      className="block w-1/2 px-3 py-2 text-sm font-medium leading-5 text-center transition-colors duration-200 transform rounded-md lg:-my-2 lg:mx-1 font-avenir text-background bg-heading hover:bg-heading/75 md:mx-0 md:w-auto"
                      href="#"
                      onClick={() => router.push('/auth/login')}
                    >
                      Login
                    </a>
                  </div>
                </div>
              ) : (
                <div className="">
                  <a
                    className="block w-1/2 lg:px-3 py-2 leading-5 lg:-my-2 lg:mx-1 md:mx-0 md:w-auto"
                    href="#"
                    onClick={() => router.push('/member/profile')}
                  >
                    <Avvvatars value={email} />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
