import { useState, useContext } from "react";
import { GlobalState } from "../../context/GlobalState";
import { postMethod } from "../../utils/fetchData";
import Swal from "sweetalert2";

function ProductCartItem({ product, index }) {
    const [modalDelete, setModalDelete] = useState(false);
    const state = useContext(GlobalState);
    const setCart = state.UserAPI.cart[1];
    const handleChangQuantity = (handle) => {
        if (product.quantity === 1 && handle === "descrease") return;
        postMethod("change-quantity", { product_id: product._id, handle })
            .then((res) => {
                if (res.success) {
                    setCart(res.user.cart);
                } else {
                    Swal.fire({
                        title: "Error",
                        text: res.message,
                        icon: "error",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = () => {
        postMethod("delete-product", { product_id: product._id })
            .then((res) => {
                if (res.success) {
                    setCart(res.user.cart);
                } else {
                    Swal.fire({
                        title: "Error",
                        text: res.message,
                        icon: "error",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <tr className="spacer max-w-full w-full text-[14px] bg-white rounded-md mt-2 text-center">
            <td className="py-2">{index + 1}</td>
            <td className="py-2 max-w-[20px]">
                <img
                    className="w-[50%] mx-auto"
                    src={product.image_url}
                    alt=""
                />
            </td>
            <td className="py-2">{product.name}</td>
            <td className="py-2">
                $
                {(product.price - (product.sale / 100) * product.price) *
                    product.quantity}
            </td>
            <td className="py-2 mx-auto flex items-center justify-center">
                <div className="flex flex-row h-8 md:h-10 w-fit md:w-[120px] rounded-lg relative bg-transparent mt-1">
                    <button
                        data-action="decrement"
                        className=" bg-gray-100 text-gray-600 hover:text-white hover:bg-red-400 h-full 
                        w-10 md:w-20 rounded-l cursor-pointer outline-none"
                        onClick={() => handleChangQuantity("descrease")}
                    >
                        <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input
                        type="number"
                        className="outline-none focus:outline-none text-center w-4 md:w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                        name="custom-input-number"
                        value={product.quantity}
                    ></input>
                    <button
                        data-action="increment"
                        className="bg-gray-100 text-gray-600 hover:text-white hover:bg-blue-400 h-full 
                        w-10 md:w-20 rounded-r cursor-pointer"
                        onClick={() => handleChangQuantity("inscrease")}
                    >
                        <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
            </td>
            <td className="py-2 text-red-500 cursor-pointer md:text-[24px] relative">
                <ion-icon
                    name="trash"
                    onClick={() => setModalDelete((prev) => !prev)}
                ></ion-icon>
                {modalDelete && (
                    <div className="absolute top-[20%] rounded-lg bg-slate-200 h-fit p-2 right-0 bottom-0 text-[12px] font-semibold shadow-xl z-10">
                        <div
                            className="transition-all p-1 px-2 rounded-lg hover:bg-red-500 hover:text-white"
                            onClick={() => handleDelete()}
                        >
                            Delete
                        </div>
                        <div
                            className="transition-all text-slate-600 hover:bg-slate-100 p-1 px-2 rounded-lg"
                            onClick={() => setModalDelete((prev) => !prev)}
                        >
                            Cancel
                        </div>
                    </div>
                )}
            </td>
        </tr>
    );
}

export default ProductCartItem;
