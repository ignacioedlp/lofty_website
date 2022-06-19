import React from "react";
import {
  doCreateUserWithEmailAndPassword,
  doSendEmailVerification,
} from "../firebase/firebaseAuth";

import { useRouter } from "next/router";

function RegisterForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [codePostal, setCodePostal] = React.useState("");
  const router = useRouter();

  const performEmailSignUp = async (email, password, firstName, lastName) => {
    try {
      console.log("Register..");
      const userCredential = await doCreateUserWithEmailAndPassword(
        email,
        password
      );
      console.log("Register Success");
      console.log(userCredential);
      await doSendEmailVerification(userCredential.user);

      router.push("/login");
    } catch {
      console.log("error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      email != "" &&
      password != "" &&
      passwordConfirm != "" &&
      firstName != "" &&
      lastName != "" &&
      phone != "" &&
      codePostal != ""
    ) {
      if (passwordConfirm === password) {
        await performEmailSignUp(email, password, firstName, lastName);
      } else {
        console.log("Password not match");
      }
    } else {
      console.log("Please fill all fields");
    }
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeCodePostal = (e) => {
    setCodePostal(e.target.value);
  };

  return (
    <header className="dark:bg-gray-800  ">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center  lg:flex">
          <div className="flex flex-col items-center justify-start w-full mt-6 lg:mt-0 lg:w-1/2 mx-auto my-4">
            <h2 className="font-avenir text-body1 font-semibold text-5xl">
              Sign up to Lofty
            </h2>
            <p className="flex lg:w-1/2 text-2xl text-center font-avenir text-body1 mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis exercitationem explicabo at adipisci eveniet est.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg ">
              <h1 className="text-2xl mb-5 mx-4 font-semibold uppercase text-heading font-avenir dark:text-white lg:text-3xl ">
                Register
              </h1>
              <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <form>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="text-body1 font-avenir  dark:text-gray-200"
                        htmlFor="firstName"
                      >
                        First name
                      </label>
                      <input
                        id="firstName"
                        value={firstName}
                        onChange={handleChangeFirstName}
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-body1 font-avenir  dark:text-gray-200"
                        htmlFor="lastName"
                      >
                        Last name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={handleChangeLastName}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-body1 font-avenir  dark:text-gray-200"
                        htmlFor="postalCode"
                      >
                        Postal code
                      </label>
                      <input
                        id="postalCode"
                        type="text"
                        value={codePostal}
                        onChange={handleChangeCodePostal}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-body1 font-avenir   dark:text-gray-200"
                        htmlFor="phone"
                      >
                        Phone number
                      </label>
                      <input
                        id="phone"
                        type="number"
                        value={phone}
                        onChange={handleChangePhone}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                      value={email}
                      onChange={handleChangeEmail}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
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
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="text-body1 font-avenir  dark:text-gray-200"
                        htmlFor="passwordConfirm"
                      >
                        Confirm Password
                      </label>
                      <input
                        id="passwordConfirm"
                        type="password"
                        value={passwordConfirm}
                        onChange={handleChangePasswordConfirm}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-body1 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="flex justify-end mt-6">
                      <button
                        onClick={handleSubmit}
                        className="px-6 py-2 leading-5 text-background transition-colors duration-200 transform bg-icon rounded-md hover:bg-heading/80 focus:outline-none  font-avenir focus:bg-gray-600"
                      >
                        Register now
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
  );
}

export default RegisterForm;
