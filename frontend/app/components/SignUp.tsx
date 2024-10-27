import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignIn = () => {
    return (
        <div className=" min-h-screen flex justify-center px-[10vw] py-12 bg-gray-400 dark:bg-gray-900 ">
            <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 lg:block lg:w-5/12 bg-cover rounded-l-lg flex justify-center items-center">
                {/* Increase size here */}
                <div className="relative w-full h-[100%]">
                    <Image
                        src="/calculator.png"
                        alt="Calculator Image"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>

            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg flex flex-col gap-16 lg:rounded-l-none">
                <h3 className="py-4 text-2xl text-center font-bold text-gray-800 dark:text-white">
                    Create an Account!
                </h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                    <div className="mb-4 md:flex md:justify-between">
                        <div className="mb-4 md:mr-2 md:mb-0">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="firstName"
                            >
                                First Name
                            </label>
                            <input
                                className="w-[20vw] px-3 py-2 text-sm leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="firstName"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="md:ml-2">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="lastName"
                            >
                                Last Name
                            </label>
                            <input
                                className="w-[20vw]  px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="lastName"
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4 md:flex md:justify-between">
                        <div className="mb-4 md:mr-2 md:mb-0 ">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="w-[20vw] px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                            />
                            <p className="text-xs italic text-red-500">
                                Please choose a password.
                            </p>
                        </div>
                        <div className="md:ml-2">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="c_password"
                            >
                                Confirm Password
                            </label>
                            <input
                                className="w-[20vw] px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="c_password"
                                type="password"
                                placeholder="******************"
                            />
                        </div>
                    </div>
                    <div className="mb-6 text-center">
                        <button
                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Register Account
                        </button>
                    </div>
                    <hr className="mb-6 border-t" />
                    <div className="text-center">
                        <Link href="#" className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="text-center">
                        <Link href="/sign-in" className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800">
                            Already have an account? Login!

                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
