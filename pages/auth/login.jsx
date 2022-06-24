import { motion, useAnimation } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

import Cookie from 'js-cookie';
import { FirebaseError } from '@firebase/util';
import { Formik } from 'formik';
import Head from 'next/head';
import Navbar from '../../components/Navigation/Navbar';
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from '../../lib/firebase/firebaseAuth';
import { loginFB } from '../../lib/context/slices/sessionSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  const performEmailSignIn = async (email, password) => {
    try {
      const userCredential = await doSignInWithEmailAndPassword(
        email,
        password
      );

      Cookie.set('session', userCredential.user.accessToken);

      dispatch(
        loginFB({
          token: userCredential.user.accessToken,
          email: userCredential.user.email,
        })
      );
      toast.success('Successfully');
      router.push('/');
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.error(e.code);
        switch (e.code) {
          case 'auth/too-many-requests':
            toast.error('Too many requests, try again later');
            break;
          case 'auth/user-not-found':
            toast.error('User not exist, please sign up');
            break;
          case 'auth/wrong-password':
            toast.error('Wrong password, try again later');
            break;
          default:
            toast.error('Unknown error, please try again later');
        }
      }
    }
  };

  const handleSignIn = async ({ email, password }) => {
    if (email != '' && password != '') {
      await performEmailSignIn(email, password);
    } else {
      toast.error('Please fill all fields');
    }
  };

  const handleSubmitWithGoogle = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await doSignInWithGoogle();

      Cookie.set('session', userCredential.user.accessToken);

      dispatch(
        loginFB({
          token: userCredential.user.accessToken,
          email: userCredential.user.email,
        })
      );
      toast.success('Successfully');
      router.push('/');
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.error(e.code);
        switch (e.code) {
          case 'auth/too-many-requests':
            toast.error('Too many requests, try again later');
            break;
          case 'auth/user-not-found':
            toast.error('User not exist, please sign up');
            break;
          case 'auth/wrong-password':
            toast.error('Wrong password, try again later');
            break;
          default:
            toast.error('Unknown error, please try again later');
        }
      }
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <motion.header
        className="dark:bg-gray-800 "
        ref={ref}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
          transition: { duration: 0.5 },
        }}
        initial="hidden"
        animate={control}
      >
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="flex flex-col items-center justify-start w-full mx-auto my-4 mt-6 lg:mt-0 lg:w-1/2">
              <h2 className="text-5xl font-semibold font-avenir text-body1">
                Sign in to Lofty
              </h2>
              <p className="flex mt-6 text-2xl text-center lg:w-1/2 font-avenir text-body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis exercitationem explicabo at adipisci eveniet est.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg ">
                <h1 className="mx-4 mb-5 text-2xl font-semibold uppercase text-heading font-avenir dark:text-white lg:text-3xl ">
                  Login
                </h1>
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                  <Formik
                    onSubmit={(values) => handleSignIn(values)}
                    initialValues={{
                      email: '',
                      password: '',
                    }}
                  >
                    {({ handleSubmit, values, handleChange, handleBlur }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                          <div>
                            <label
                              className="text-body1 font-avenir dark:text-gray-200"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder={'email@gmail.com'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-body1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                          </div>
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
                              placeholder={'password'}
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-body1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                          </div>
                        </div>

                        <div className="flex flex-row mt-6">
                          <div className="mx-1 ">
                            <button
                              onClick={handleSubmitWithGoogle}
                              className="px-6 py-2 leading-5 transition-colors duration-200 transform rounded-md text-background bg-icon hover:bg-heading/80 focus:outline-none font-avenir focus:bg-gray-600 "
                            >
                              Sign in with Google
                            </button>
                          </div>
                          <div className="mx-1 ">
                            <button
                              onClick={handleSubmit}
                              className="px-6 py-2 leading-5 transition-colors duration-200 transform rounded-md text-background bg-icon hover:bg-heading/80 focus:outline-none font-avenir focus:bg-gray-600 "
                            >
                              Sign in
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </section>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}

export default Login;

export async function getServerSideProps({ req, res }) {
  //Quiero obtener el token de las cookies para saber si tengo permiso o redirijo a login

  const token = req.cookies.session;

  if (token) {
    res.writeHead(302, { Location: '/' });
    res.end();
  }

  return {
    props: {},
  };
}
