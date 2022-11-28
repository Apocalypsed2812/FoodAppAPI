import { useContext } from "react";
import Filter from "../../components/Filter";
import ProductList from "../../components/ProductList";
import { GlobalState } from "../../context/GlobalState";

function Product() {
    const state = useContext(GlobalState);
    const productsShow = state.ProductAPI.productsShow[0];
    return (
        <>
            <div className="bg-slate-200 p-3 my-3 rounded-md md:flex  gap-4">
                <Filter />
                <ProductList products={productsShow} />
            </div>
        </>
    );
}

export default Product;
