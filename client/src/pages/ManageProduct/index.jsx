import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductItemManage from "../../components/ProductItemManage";
import { GlobalState } from "../../context/GlobalState";

function DashBoard() {
    const state = useContext(GlobalState);
    const products = state.ProductAPI.products[0];
    return (
        <div className="bg-slate-200 p-5 rounded-lg mt-3">
            <h1 className="font-bold">
                List of Products
                <Link
                    to="/add/product"
                    className="bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600 mr-6 text-[14px] ml-4"
                >
                    Add new
                </Link>
            </h1>
            <div className="mt-8">
                {products.map((product, index) => (
                    <ProductItemManage
                        key={product._id}
                        product={product}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default DashBoard;
