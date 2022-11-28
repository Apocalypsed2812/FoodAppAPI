import { useContext } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import SliderProduct from "../../components/SliderProduct";
import { GlobalState } from "../../context/GlobalState";
import { postMethod } from "../../utils/fetchData";

function ProductDetail() {
    const state = useContext(GlobalState);
    const products = state.ProductAPI.products[0];
    const isLogin = state.UserAPI.login[0];

    const [cart, setCart] = state.UserAPI.cart;
    const params = useParams();
    let slug = params.slug;
    const product = products.filter((product) => slug === product.slug)[0];
    let related_products = [];
    let checkProductInCart = [];
    if (product) {
        related_products = products.filter(
            (p) => product.category === p.category
        );
        checkProductInCart = cart.filter((p) => p === product._id);
    }
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
                    setCart([...cart, product._id]);
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
        <>
            <div className="bg-slate-200 p-5 rounded-lg">
                {product && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-lg p-5">
                        <div className="bg-slate-200 rounded-xl h-fit">
                            <img src={product.image_url} alt="" />
                        </div>
                        <div>
                            <div className="bg-indigo-900 text-center py-[4px] lg:px-4 rounded-lg">
                                <div
                                    className="p-1 px-3 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex text-[12px]"
                                    role="alert"
                                >
                                    <span className="flex rounded-full bg-indigo-500 uppercase px-1 py-1 text-xs font-bold mr-3 text-[12px]">
                                        New
                                    </span>
                                    <span className="font-semibold mr-2 text-left flex-auto">
                                        Black friday sale 1-1-2022
                                    </span>
                                </div>
                            </div>
                            {product.sale > 0 && (
                                <div className="text-[12px] mt-2 text-[#746ff0] bg-[#FDE3FB] w-fit px-3 py-[2px] rounded-md font-bold">
                                    Sale {product.sale} %
                                </div>
                            )}
                            <h3 className="text-[30px] font-bold">
                                {product.name}
                            </h3>
                            <p className="text-[12px] text-[#2C2B31] mt-1">
                                {product.sub_title}
                            </p>
                            <div className="text-[14px] mt-1">
                                <strong> Description:</strong>{" "}
                                {product.description}
                            </div>
                            <div className="font-bold mt-2">
                                {product.sale > 0 && (
                                    <span className="text-[16px] mr-[6px] text-[#555] relative">
                                        $ {product.price}
                                        <span className="h-[2px] bg-[#555]/90 absolute top-[50%] left-0 right-0 translate-y-[-50%]"></span>
                                    </span>
                                )}
                                <span className="text-[#827edd] text-[30px]">
                                    ${" "}
                                    {product.price -
                                        (product.sale / 100) * product.price}
                                </span>
                            </div>
                            <div className="text-[12px] font-semibold text-slate-600">
                                {product.sold} sold
                            </div>
                            <div className="text-[12px] mt-2 text-[#746ff0] bg-[#FDE3FB] w-fit px-3 py-[2px] rounded-sm font-bold">
                                {product.category}
                            </div>
                            <div className="mt-2">
                                {!productIsInCart ? (
                                    <button
                                        className="text-[15px] bg-slate-200 hover:bg-[#827edd] font-semibold hover:text-white transition-all py-2 px-5 rounded-xl flex items-center gap-1 cursor-pointer"
                                        onClick={() => addProductToCart()}
                                    >
                                        Add to my cart{" "}
                                        <ion-icon name="cart"></ion-icon>
                                    </button>
                                ) : (
                                    <button className="text-[15px] bg-slate-200 border border-[#827edd] font-semibold text-[#827edd] transition-all py-2 px-5 rounded-xl flex items-center gap-1 ">
                                        Added
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-5 bg-white p-5 rounded-lg">
                    {product ? (
                        <>
                            <h3 className="font-bold text-xl">
                                Related products
                            </h3>
                            <SliderProduct products={related_products} />
                        </>
                    ) : (
                        "Product not found"
                    )}
                </div>
            </div>
            <div className="h-[50px]"></div>
        </>
    );
}

export default ProductDetail;
