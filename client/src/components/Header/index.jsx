import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import LayerHidden from "../LayerHidden";
import { GlobalState } from "../../context/GlobalState";
function Header() {
    const [toggleMenu, setToggleMenu] = useState(true);
    const state = useContext(GlobalState);
    const { login } = state.UserAPI;
    const cart = state.UserAPI.cart[0];
    const isAdmin = state.UserAPI.admin[0];
    const numberProduct = cart.length;
    const [isLogin] = login;
    return (
        <header className="flex justify-between mt-4 header">
            {!toggleMenu ? (
                <LayerHidden handleClick={() => setToggleMenu(!toggleMenu)} />
            ) : (
                ""
            )}
            <div
                className="sm:hidden group"
                onClick={() => setToggleMenu(!toggleMenu)}
            >
                <ion-icon size="large" name="menu"></ion-icon>
            </div>
            <div className="cursor-pointer hidden sm:flex items-center">
                VTieng Shop
            </div>
            <ul
                className={`z-20 fixed top-0 bottom-0 left-0 bg-white right-[50%] sm:right-[0%] py-8 sm:py-0 border  sm:justify-start sm:flex-1 sm:ml-10 sm:flex sm:relative sm:bg-transparent sm:border-0 transition-all sm:translate-x-0 ${
                    toggleMenu ? `translate-x-[-100%]` : `translate-x-0`
                }`}
            >
                <div
                    className="absolute top-3 right-3 sm:hidden"
                    onClick={() => setToggleMenu(!toggleMenu)}
                >
                    <ion-icon size="large" name="close"></ion-icon>
                </div>
                <li className="my-3">
                    <NavLink
                        to="/"
                        className="mx-3 rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors"
                    >
                        Home
                    </NavLink>
                </li>
                <li className="my-3">
                    <NavLink
                        to="/products"
                        className="mx-3 rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors"
                        href="#!"
                    >
                        Products
                    </NavLink>
                </li>
                {/* <li className="my-3">
                    <a
                        className="mx-3 rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors"
                        href="#!"
                    >
                        Pricing
                    </a>
                </li> */}
                <li className="my-3">
                    <NavLink
                        to="/about"
                        className="mx-3 rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors"
                        href="#!"
                    >
                        About
                    </NavLink>
                </li>
                {isAdmin && (
                    <li className="my-3">
                        <NavLink
                            to="/manage/products"
                            className="mx-3 rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors"
                        >
                            Manage product
                        </NavLink>
                    </li>
                )}
            </ul>
            {!isLogin ? (
                <ul className="flex items-center">
                    <li>
                        <Link
                            to="/login"
                            className="mx-1 rounded-full text-[16px] flex align-middle px-6 py-1 border-2 hover:border-[#827edd] hover:bg-[#827edd] hover:text-white transition-all border-transparent "
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/register"
                            className="mx-1 rounded-full text-[16px] border-2 border-[#827edd] flex align-middle px-6 py-1 text-[#827edd] hover:bg-[#827edd] hover:text-white transition-all "
                        >
                            SignUp
                        </Link>
                    </li>
                </ul>
            ) : (
                <ul className="flex items-center">
                    <li className="relative">
                        <Link to="/cart" className="" href="#!">
                            <ion-icon size="large" name="cart"></ion-icon>
                            {numberProduct > 0 && (
                                <span className="absolute text-[8px] bg-red-500 px-1 text-white rounded-full top-0 right-0 ">
                                    {numberProduct}
                                </span>
                            )}
                        </Link>
                    </li>
                    <li className="mx-3 relative">
                        <a href="#!">
                            <ion-icon
                                size="middle"
                                name="logo-facebook"
                            ></ion-icon>
                        </a>
                        <a href="#!">
                            <ion-icon
                                size="middle"
                                name="logo-instagram"
                            ></ion-icon>
                        </a>
                        <span className="absolute text-[6px] bottom-[-4px] font-semibold left-0 right-0">
                            Connect
                        </span>
                    </li>
                </ul>
            )}
        </header>
    );
}

export default Header;
