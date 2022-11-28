import React from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="border-t-[2px] border-gray-200 p-3 mt-20">
            <div
                className="container flex flex-col flex-wrap px-4 py-16 mx-auto md:items-center
                lg:items-start md:flex-row md:flex-nowrap max-w-[1300px]"
            >
                <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                    <Link
                        to="/"
                        className="flex items-center justify-center text-4xl font-bold text-blue-700 md:justify-start"
                    >
                        VTieng Shop
                    </Link>
                    <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium at sequi cum, impedit fuga in placeat illo
                        eum minima possimus est perferendis distinctio explicabo
                        eos natus consequuntur blanditiis odio optio?
                    </p>
                </div>
                <div className="justify-between w-full mt-4 text-center lg:flex">
                    <div className="w-full px-4 lg:w-1/2 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                            Links
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products"
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                            Contact
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">
                                    Email: vinhtieng123@gmail.com
                                </div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">
                                    Phone: (+84)353571047
                                </div>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="text-gray-400 font-semibold text-[14px]">
                    All rights reserved by Nguyen Vinh Tieng 2021
                </p>
            </div>
        </footer>
    );
}

export default Footer;
