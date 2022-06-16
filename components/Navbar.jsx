import Image from "next/image";
import React from "react";
import lofty from "../public/svgs/Icon_lofty_b.svg";
import "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center text-heading font-avenir ">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
              onClick={() => router.push("/")}
            >
              <Image src={lofty} width={50} height={50} alt="lofty" />
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
          <div className="items-center lg:flex align-middle">
            <div className="flex flex-col lg:flex-row lg:mx-6 align-middle">
              <a
                className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-heading/90 dark:hover:text-blue-400 lg:mx-4 lg:my-0"
                href="#"
              >
                Support
              </a>
              <a
                className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-heading/90dark:hover:text-blue-400 lg:mx-4 lg:my-0"
                href="#"
              >
                Contact
              </a>
              <a
                className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-heading/90dark:hover:text-blue-400 lg:mx-4 lg:my-0"
                href="#"
              >
                EN
              </a>

              <a
                className="block w-1/2 lg:-my-2  px-3 py-2 lg:mx-1 text-sm font-medium font-avenir leading-5 text-center text-background transition-colors duration-200 transform bg-heading rounded-md hover:bg-heading/75 md:mx-0 md:w-auto"
                href="#"
                onClick={() => router.push("/register")}
              >
                Join free
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
