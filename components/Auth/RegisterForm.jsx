import {
  doCreateUserWithEmailAndPassword,
  doSendEmailVerification,
} from '../../lib/firebase/firebaseAuth';
import { motion, useAnimation } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { FirebaseError } from '@firebase/util';
import { Formik } from 'formik';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';

function RegisterForm() {
  const router = useRouter();
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  const performEmailSignUp = async (email, password) => {
    try {
      console.log('Register..');
      const userCredential = await doCreateUserWithEmailAndPassword(
        email,
        password
      );
      toast.success('Register Success');
      console.log(userCredential);
      await doSendEmailVerification(userCredential.user);
      router.push('/auth/login');
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.error(e.code);
        toast.error(e.code);
      }
    }
  };

  const handleSignUp = async ({
    email,
    password,
    passwordConfirm,
    lastName,
    firstName,
    phone,
    codePostal,
  }) => {
    if (
      email != '' &&
      password != '' &&
      passwordConfirm != '' &&
      firstName != '' &&
      lastName != '' &&
      phone != '' &&
      codePostal != ''
    ) {
      if (passwordConfirm === password) {
        await performEmailSignUp(email, password);
      } else {
        toast.error('Password not match');
      }
    } else {
      toast.error('Please fill all fields');
    }
  };

  return (
    <header className="dark:bg-gray-800 ">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <motion.div
            className="flex flex-col items-center justify-start w-full mx-auto my-4 mt-6 lg:mt-0 lg:w-1/2"
            ref={ref}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
              transition: { duration: 0.5 },
            }}
            initial="hidden"
            animate={control}
          >
            <h2 className="text-5xl font-semibold font-avenir text-body1">
              Sign up to Lofty
            </h2>
            <p className="flex mt-6 text-2xl text-center lg:w-1/2 font-avenir text-body1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis exercitationem explicabo at adipisci eveniet est.
            </p>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2"
            ref={ref}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
              transition: { duration: 0.5 },
            }}
            initial="hidden"
            animate={control}
          >
            <div className="lg:max-w-lg ">
              <h1 className="mx-4 mb-5 text-2xl font-semibold uppercase text-heading font-avenir dark:text-white lg:text-3xl ">
                Register
              </h1>
              <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <Formik
                  onSubmit={(values) => handleSignUp(values)}
                  initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                    lastName: '',
                    firstName: '',
                    codePostal: '',
                    phone: '',
                  }}
                >
                  {({ handleChange, values, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                          <label
                            className="text-body1 font-avenir dark:text-gray-200"
                            htmlFor="firstName"
                          >
                            First name
                          </label>
                          <input
                            id="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            placeholder="First name"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-body1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          />
                        </div>

                        <div>
                          <label
                            className="text-body1 font-avenir dark:text-gray-200"
                            htmlFor="lastName"
                          >
                            Last name
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            value={values.lastName}
                            onChange={handleChange}
                            placeholder="Last name"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-body1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          />
                        </div>

                        <div>
                          <label
                            className="text-body1 font-avenir dark:text-gray-200"
                            htmlFor="codePostal"
                          >
                            Postal code
                          </label>
                          <input
                            id="codePostal"
                            type="text"
                            value={values.codePostal}
                            onChange={handleChange}
                            placeholder="Code"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-body1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          />
                        </div>

                        <div>
                          <label
                            className="text-body1 font-avenir dark:text-gray-200"
                            htmlFor="phone"
                          >
                            Phone number
                          </label>
                          <input
                            id="phone"
                            type="number"
                            value={values.phone}
                            onChange={handleChange}
                            placeholder="Number"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-body1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <label
                          className="text-body1 font-avenir dark:text-gray-200"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="Email"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-body1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                          <label
                            className="text-body1 font-avenir dark:text-gray-200"
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <input
                            id="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-body1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                          <label
                            className="text-body1 font-avenir dark:text-gray-200"
                            htmlFor="passwordConfirm"
                          >
                            Confirm Password
                          </label>
                          <input
                            id="passwordConfirm"
                            type="password"
                            value={values.passwordConfirm}
                            onChange={handleChange}
                            placeholder="Password confirm"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-body1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          />
                        </div>
                        <div className="flex justify-end mt-6">
                          <button
                            onClick={handleSubmit}
                            className="px-6 py-2 leading-5 transition-colors duration-200 transform rounded-md text-background bg-icon hover:bg-heading/80 focus:outline-none font-avenir focus:bg-gray-600"
                          >
                            Register now
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default RegisterForm;
