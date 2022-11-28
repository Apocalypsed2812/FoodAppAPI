import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { postMethod } from "../../utils/fetchData";
function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [user, setUser] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        name: "",
    });
    const handleChangeUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleRegister = () => {
        postMethod("register", {
            username: user.username,
            password: user.password,
            name: user.name,
            email: "",
        })
            .then((res) => {
                if (res.success) {
                    Swal.fire({
                        title: "Success",
                        text: "Account was registered successfully",
                        icon: "success",
                    });
                    setUser({
                        username: "",
                        password: "",
                        confirmPassword: "",
                        name: "",
                    });
                } else {
                    Swal.fire({
                        title: "Error",
                        text: res.message,
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
        if (user.password.trim().length < 6) {
            Swal.fire({
                title: "Error",
                text: "Password too short",
                icon: "error",
            });
            return;
        }
        if (user.password.trim() !== user.confirmPassword.trim()) {
            Swal.fire({
                title: "Error",
                text: "Confirm Password is incorrect",
                icon: "error",
            });
            return;
        }
        if (user.name.trim() === "") {
            Swal.fire({
                title: "Error",
                text: "Name can not be empty",
                icon: "error",
            });
            return;
        }
        handleRegister();
    };
    console.log(user);
    return (
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 rounded-xl">
            <div className="relative sm:max-w-sm w-full">
                <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                    <label
                        htmlFor=""
                        className="block mt-3 text-lg text-gray-700 text-center font-semibold"
                    >
                        Register
                    </label>
                    <form
                        method="#"
                        action="#"
                        onSubmit={(e) => handleSubmit(e)}
                        className="mt-10"
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Username"
                                className="mt-1 py-1 px-3 outline-none block w-full border-none bg-gray-200 h-11 rounded-xl border hover:bg-blue-200 focus:bg-blue-200 focus:ring-0"
                                name="username"
                                onChange={(e) => handleChangeUser(e)}
                                value={user.username}
                            />
                        </div>
                        <div className="mt-3 relative h-fit">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="mt-1 py-1 px-3 outline-none block w-full border-none bg-gray-200 h-11 rounded-xl border hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                name="password"
                                onChange={(e) => handleChangeUser(e)}
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
                        <div className="mt-3 relative h-fit">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm password"
                                className="mt-1 py-1 px-3 outline-none block w-full border-none bg-gray-200 h-11 rounded-xl border hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                name="confirmPassword"
                                onChange={(e) => handleChangeUser(e)}
                                value={user.confirmPassword}
                            />
                            <div className="absolute top-[57%] cursor-pointer translate-y-[-50%] right-[10px]">
                                {showConfirmPassword && (
                                    <ion-icon
                                        name="eye"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                (prev) => !prev
                                            )
                                        }
                                    ></ion-icon>
                                )}
                                {!showConfirmPassword && (
                                    <ion-icon
                                        name="eye-off"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                (prev) => !prev
                                            )
                                        }
                                    ></ion-icon>
                                )}
                            </div>
                        </div>
                        <div className="mt-3">
                            <input
                                type="text"
                                placeholder="Full name"
                                className="mt-1 py-1 px-3 outline-none block w-full border-none bg-gray-200 h-11 rounded-xl border hover:bg-blue-200 focus:bg-blue-200 focus:ring-0"
                                name="name"
                                onChange={(e) => handleChangeUser(e)}
                                value={user.name}
                            />
                        </div>
                        <div className="mt-7">
                            <button
                                className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                                type="submit"
                            >
                                Register
                            </button>
                        </div>

                        <div className="mt-7">
                            <div className="flex justify-center items-center">
                                <label className="mr-2">Have an account?</label>
                                <Link
                                    to="/login"
                                    className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                                >
                                    Login now
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
