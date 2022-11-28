import ProductItem from "../ProductItem";

function ProductList({ products }) {
    return (
        <div className="flex-1">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 flex-1 gap-3">
                {products.map((product) => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </div>
            {products.length <= 0 && (
                <div className="bg-white px-4 py-2 rounded-md w-full text-center">
                    Products not found
                </div>
            )}
            <div className="px-5 py-5 mt-4 shadow-lg bg-white border-t w-full flex flex-col xs:flex-row items-center xs:justify-between">
                <span className="text-xs xs:text-sm text-gray-900">
                    Page 1/10
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                        Prev
                    </button>
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
