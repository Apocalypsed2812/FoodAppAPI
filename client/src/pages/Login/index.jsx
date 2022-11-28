import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { postMethod } from "../../utils/fetchData";
import { GlobalState } from "../../context/GlobalState";
import { TOKEN_NAME } from "../../credentials";
function Login() {
    let navigate = useNavigate();
    const state = useContext(GlobalState);

    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({ username: "", password: "" });
    const handleChangeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const { login } = state.UserAPI;
    const [isLogin, setIsLogin] = login;
    console.log(isLogin);
    const handleLogin = () => {
        postMethod("login", user)
            .then((response) => {
                if (response.success) {
                    localStorage.setItem(TOKEN_NAME, response.token);
                    setIsLogin(true);
                    navigate("/");
                } else {
                    Swal.fire({
                        title: "Error",
                        text: response.message,
                        icon: "error",
                    });
                }
            })
            .catch((err) => console.log(err));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.username.trim() === "") {
            Swal.fire({
                title: "Error",
                text: "Username can not be empty",
                icon: "error",
            });
            return;
        }
        if (user.password.trim() === "") {
            Swal.fire({
                title: "Error",
                text: "Password can not be empty",
                icon: "error",
            });
            return;
        }
        handleLogin();
    };

    return (
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center mt-4 bg-gray-100 rounded-xl">
            <div className="relative sm:max-w-sm w-full">
                <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                    <label
                        htmlFor=""
                        className="block mt-3 text-lg text-gray-700 text-center font-semibold "
                    >
                        Login
                    </label>
                    <form
                        action="#"
                        onSubmit={(e) => handleSubmit(e)}
                        className="mt-5"
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Username"
                                className="mt-1 py-1 px-3 outline-none block w-full border-none bg-gray-200 h-11 rounded-xl border hover:bg-blue-200 focus:bg-blue-200 focus:ring-0"
                                onChange={handleChangeInput}
                                name="username"
                                value={user.username}
                            />
                        </div>
                        <div className="mt-3 relative h-fit">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="mt-1 py-1 px-3 outline-none block w-full border-none bg-gray-200 h-11 rounded-xl border hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                onChange={handleChangeInput}
                                name="password"
                                value={user.password}
                            />
                            <div className="absolute top-[57%] cursor-pointer translate-y-[-50%] right-[10px]">
                                {showPassword && (
                                    <ion-icon
                                        name="eye"
                                        onClick={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                    ></ion-icon>
                                )}
                                {!showPassword && (
                                    <ion-icon
                                        name="eye-off"
                                        onClick={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                    ></ion-icon>
                                )}
                            </div>
                        </div>
                        <div className="mt-7 flex">
                            <label
                                htmlFor="remember_me"
                                className="inline-flex items-center w-full cursor-pointer"
                            >
                                <input
                                    id="remember_me"
                                    type="checkbox"
                                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200  focus:ring-opacity-50"
                                    name="remember"
                                />
                                <span className="ml-2 text-sm text-gray-600">
                                    Remember me
                                </span>
                            </label>

                            <div className="w-full text-right">
                                <Link
                                    className="underline text-sm text-gray-600 hover:text-gray-900"
                                    to="#"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        <div className="mt-7">
                            <button
                                type="submit"
                                className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                            >
                                Login
                            </button>
                        </div>

                        <div className="flex mt-7 items-center text-center">
                            <hr className="border-gray-300 border-1 w-full rounded-md" />
                            <label className="block font-medium text-sm text-gray-600 w-full">
                                OR Login with
                            </label>
                            <hr className="border-gray-300 border-1 w-full rounded-md" />
                        </div>

                        <div className="flex mt-7 justify-center w-full">
                            <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                Facebook
                            </button>

                            <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                Google
                            </button>
                        </div>

                        <div className="mt-7">
                            <div className="flex justify-center items-center">
                                <label className="mr-2">
                                    Don't have an account?
                                </label>
                                <Link
                                    to="/register"
                                    className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                                >
                                    Register now
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
