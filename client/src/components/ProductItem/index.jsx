import { Link } from "react-router-dom";
import { postMethod } from "../../utils/fetchData";
import { useContext } from "react";
import { GlobalState } from "../../context/GlobalState";
import Swal from "sweetalert2";

function ProductItem({ product }) {
    const state = useContext(GlobalState);
    const [cart, setCart] = state.UserAPI.cart;
    const isLogin = state.UserAPI.login[0];
    const checkProductInCart = cart.filter((p) => p.id === product._id);
    let productIsInCart = false;
    if (checkProductInCart.length > 0) productIsInCart = true;
    const addProductToCart = () => {
        if (!isLogin) {
            Swal.fire({
                title: "User not logged in ",
                text: "Please login to continue",
                icon: "error",
            });
            return;
        }
        postMethod("add-to-cart", { product_id: product._id })
            .then((res) => {
                if (res.success) {
                    setCart(res.user.cart);
                    Swal.fire({
                        title: "Success",
                        text: "Product has been added to cart",
                        icon: "success",
                    });
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
        <div className="bg-white rounded-md  p-3 shadow-md">
            <div className="grid grid-cols-2 w-full">
                <div>
                    {product.sale > 0 && (
                        <div className="text-[12px] text-[#746ff0] bg-[#FDE3FB] w-fit px-3 py-[2px] rounded-md font-bold">
                            Sale {product.sale} %
                        </div>
                    )}
                    <h3 className="text-[16px] font-bold">{product.name}</h3>
                    <p className="text-[12px] text-[#2C2B31]">
                        {product.sub_title}
                    </p>
                    <div className="font-bold">
                        {product.sale > 0 && (
                            <span className="text-[12px] mr-[6px] text-[#555] relative">
                                $ {product.price}
                                <span className="h-[2px] bg-[#555]/90 absolute top-[50%] left-0 right-0 translate-y-[-50%]"></span>
                            </span>
                        )}
                        <span className="text-[#827edd]">
                            $
                            {Math.floor(
                                product.price -
                                    (product.sale / 100) * product.price
                            )}
                        </span>
                    </div>
                </div>
                <div className="">
                    <img
                        className="w-[90%] mx-auto"
                        src={product.image_url}
                        alt=""
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 w-full gap-3 mt-2">
                <Link
                    className="text-white py-1 rounded-full hover:opacity-70 transition-all text-[14px] inline-block text-center bg-[#827edd]"
                    to={`/detail/${product.slug}`}
                >
                    See details
                </Link>
                {!productIsInCart ? (
                    <div
                        className="text-white py-1 rounded-full hover:opacity-70 transition-all text-[14px] inline-block text-center bg-[#827edd] cursor-pointer"
                        to="#"
                        onClick={() => addProductToCart()}
                    >
                        <ion-icon size="medium" name="cart"></ion-icon>
                    </div>
                ) : (
                    <div
                        className="text-[#827edd] py-1 rounded-full  transition-all text-[14px] inline-block text-center border border-[#827edd]"
                        to="#"
                    >
                        Added
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
