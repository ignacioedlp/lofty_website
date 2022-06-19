import React, { useState } from "react";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/firebaseAuth";
import { useDispatch } from "react-redux";
import { loginFB } from "../context/slices/sessionSlice";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const performEmailSignIn = async (email, password) => {
    try {
      const userCredential = await doSignInWithEmailAndPassword(
        email,
        password
      );

      Cookie.set("session", userCredential.user.accessToken);

      dispatch(
        loginFB({
          token: userCredential.user.accessToken,
          email: userCredential.user.email,
        })
      );
      console.log(userCredential);

      router.push("/");
    } catch {
      console.log("error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email != "" && password != "") {
      await performEmailSignIn(email, password);
      router.push("/");
    } else {
      console.log("Please fill all fields");
    }
  };

  const handleSubmitWithGoogle = async (e) => {
    e.preventDefault();

    const res = await doSignInWithGoogle(email, password);
    console.log(res);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Navbar />
      <header className="dark:bg-gray-800  ">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center  lg:flex">
            <div className="flex flex-col items-center justify-start w-full mt-6 lg:mt-0 lg:w-1/2 mx-auto my-4">
              <h2 className="font-avenir text-body1 font-semibold text-5xl">
                Sign in to Lofty
              </h2>
              <p className="flex lg:w-1/2 text-2xl text-center font-avenir text-body1 mt-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis exercitationem explicabo at adipisci eveniet est.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg ">
                <h1 className="text-2xl mb-5 mx-4 font-semibold uppercase text-heading font-avenir dark:text-white lg:text-3xl ">
                  Login
                </h1>
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                  <form>
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
                          value={email}
                          onChange={handleChangeEmail}
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </div>
                      <div>
                        <label
                          className="text-body1 font-avenir  dark:text-gray-200"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          id="password"
                          type="password"
                          value={password}
                          onChange={handleChangePassword}
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </div>
                    </div>

                    <div className="flex flex-row mt-6">
                      <div className="mx-1 ">
                        <button
                          onClick={handleSubmitWithGoogle}
                          className="px-6 py-2 leading-5 text-background transition-colors duration-200 transform bg-icon rounded-md hover:bg-heading/80 focus:outline-none  font-avenir focus:bg-gray-600 "
                        >
                          Sign in with Google
                        </button>
                      </div>
                      <div className="mx-1 ">
                        <button
                          onClick={handleSubmit}
                          className="px-6 py-2 leading-5 text-background transition-colors duration-200 transform bg-icon rounded-md hover:bg-heading/80 focus:outline-none  font-avenir focus:bg-gray-600 "
                        >
                          Sign in
                        </button>
                      </div>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Login;

export async function getServerSideProps({ req, res }) {
  //Quiero obtener el token de las cookies para saber si tengo permiso o redirijo a login

  const token = req.cookies.session;

  if (token) {
    res.writeHead(302, { Location: "/" });
    res.end();
  }

  return {
    props: {},
  };
}
