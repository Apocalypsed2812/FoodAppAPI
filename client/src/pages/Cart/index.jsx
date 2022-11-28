import ProductCartItem from "../../components/ProductCartItem";
import { GlobalState } from "../../context/GlobalState";
import { useContext } from "react";

function Cart() {
    const state = useContext(GlobalState);
    const cart = state.UserAPI.cart[0];
    const globalProducts = state.ProductAPI.products[0];
    // eslint-disable-next-line array-callback-return
    let products = [];
    globalProducts.forEach((product) => {
        cart.forEach((p) => {
            if (p.id === product._id) {
                products.push({ ...product, quantity: p.quantity });
            }
        });
    });
    let totalPrice = 0;
    products.forEach((product) => {
        totalPrice += Math.floor(
            (product.price - (product.sale / 100) * product.price) *
                product.quantity
        );
    });
    return (
        <div className="bg-slate-200 p-2 md:p-5 rounded-lg">
            <h1 className="font-semibold text-[24px]">Cart</h1>
            <div className="mt-2 bg-white rounded-md overflow-hidden">
                <table className="max-w-full w-full mt-3 rounded-lg p-1">
                    <thead>
                        <tr className="w-full text-[14px] bg-white">
                            <th className="py-2">N.o</th>
                            <th className="py-2">image</th>
                            <th className="py-2">Name</th>
                            <th className="py-2">Price</th>
                            <th className="py-2 w-fit">Quantily</th>
                            <th className="py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="mt-2 max-w-full">
                        {products.length === 0 && "Cart empty"}
                        {products.map((product, index) => (
                            <ProductCartItem
                                key={product._id}
                                product={product}
                                index={index}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-2">
                <div>
                    Total <strong>$ {totalPrice}</strong>
                </div>
                <button className="mt-1 py-1 px-5 hover:bg-blue-600 hover:text-white border-2 transition-all border-blue-600 rounded-full text-blue-600">
                    Payment
                </button>
            </div>
        </div>
    );
}

export default Cart;
