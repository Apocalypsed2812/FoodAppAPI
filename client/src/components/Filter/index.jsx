import { useContext, useState } from "react";
import { GlobalState } from "../../context/GlobalState";

function Filter() {
    const [filter, setFilter] = useState({ name: "", type: "", price: "" });
    const state = useContext(GlobalState);
    const setProductsShow = state.ProductAPI.productsShow[1];
    const products = state.ProductAPI.products[0];
    const handleChangeFilter = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };
    const filterProduct = () => {
        let newProduct = products;
        if (filter.name !== "") {
            newProduct = newProduct.filter(
                (p) => p.name.indexOf(filter.name) !== -1
            );
        }
        if (filter.type !== "") {
            newProduct = newProduct.filter((p) => p.category === filter.type);
        }
        if (filter.price !== "") {
            if (filter.price.indexOf("-") !== -1) {
                let priceRange = filter.price.split("-");
                newProduct = newProduct.filter(
                    (p) => p.price > priceRange[0] && p.price < priceRange[1]
                );
            }
            if (filter.price.indexOf(">") !== -1) {
                let priceRange = filter.price.split(">");
                newProduct = newProduct.filter((p) => p.price > priceRange[1]);
            }
            if (filter.price.indexOf("<") !== -1) {
                let priceRange = filter.price.split(">");
                newProduct = newProduct.filter((p) => p.price < priceRange[1]);
            }
        }
        setProductsShow(newProduct);
    };
    return (
        <div className="bg-white md:w-[240px] mb-2 md:mt-0 p-3 rounded-md h-fit">
            <h3 className="font-semibold text-[16px] mb-5">Filter product</h3>
            <label className="relative block mb-4">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <ion-icon name="search"></ion-icon>
                </span>
                <input
                    className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search name..."
                    type="text"
                    name="name"
                    onChange={(e) => {
                        handleChangeFilter(e);
                    }}
                />
            </label>
            <div className="w-full">
                <h4 className="font-semibold text-[14px] mb-2">
                    Type of product
                </h4>
                <select
                    className="form-select w-full px-3 py-1 border-2 border-sky-500 rounded-md"
                    name="type"
                    id=""
                    onChange={(e) => handleChangeFilter(e)}
                >
                    <option
                        className="px-3 py-1 bg-sky-100 cursor-pointer hover:bg-slate-100"
                        value=""
                    >
                        All
                    </option>
                    <option
                        className="px-3 py-1 bg-sky-100 cursor-pointer hover:bg-slate-100"
                        value="digital"
                    >
                        Digital
                    </option>
                    <option
                        className="px-3 py-1 bg-sky-100 cursor-pointer hover:bg-slate-100"
                        value="furniture "
                    >
                        Furniture
                    </option>
                    <option
                        className="px-3 py-1 bg-sky-100 cursor-pointer hover:bg-slate-100"
                        value="other"
                    >
                        Other
                    </option>
                </select>
            </div>
            <div className="mt-4">
                <h4 className="font-semibold text-[14px]">Price</h4>
                <select
                    className="form-select w-full px-3 py-1 border-2 border-sky-500 rounded-md"
                    name="price"
                    id=""
                    onChange={(e) => handleChangeFilter(e)}
                >
                    <option
                        className="px-3 py-1 bg-sky-100 cursor-pointer hover:bg-slate-100"
                        value=""
                    >
                        All
                    </option>
                    <option
                        className="px-3 py-1 bg-sky-100 cursor-pointer hover:bg-slate-100"
                        value="<10"
                    >
                        Less than $10
                    </option>
                    <option
                        className="px-3 py-1 bg-sky-100 cursor-pointer hover:bg-slate-100"
                        value="10-30 "
                    >
                        $10 - $30
                    </option>
                    <option
                        className="px-3 py-1 bg-sky-100 cursor-pointer hover:bg-slate-100"
                        value="30-100"
                    >
                        $30 - $100
                    </option>
                    <option
                        className="px-3 py-1 bg-sky-100 cursor-pointer hover:bg-slate-100"
                        value=">100"
                    >
                        more than $100
                    </option>
                </select>
            </div>
            <button
                className="mt-3 bg-gray-100 hover:bg-sky-600 hover:text-white text-gray-800 font-bold px-4 rounded inline-flex items-center text-[14px] transition-all w-full text-center py-1 justify-center "
                onClick={() => filterProduct()}
            >
                Search
            </button>
        </div>
    );
}

export default Filter;
