import { Link } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import { postMethod } from "../../utils/fetchData";
import { GlobalState } from "../../context/GlobalState";
function ProductItemManage({ product, index }) {
    const state = useContext(GlobalState);
    const [products, setProducts] = state.ProductAPI.products;
    const HandleClickDeleteBtn = async () => {
        let result = await Swal.fire({
            title: "Warning",
            text: "Are you sure you want to delete this product?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#999",
            confirmButtonText: "Yes!",
        });
        const { isConfirmed } = result;
        if (isConfirmed) {
            postMethod("product/delete", { product_id: product._id })
                .then((res) => {
                    console.log(res);
                    if (res.success) {
                        const newProducts = products.filter(
                            (p) => p._id !== product._id
                        );
                        setProducts(newProducts);
                        Swal.fire({
                            title: "Success",
                            text: res.message,
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
        }
    };
    return (
        <div className="flex w-full bg-white rounded-md my-2 px-4 py-1 gap-5 items-center text-[14px]">
            <div>{index + 1}</div>
            <div>
                <img className="w-[50px]" src={product.image_url} alt="" />
            </div>
            <div>{product.name}</div>
            <div className="flex-1 text-center">{product.sub_title}</div>
            <div className="flex gap-2">
                <Link
                    to={`/detail/${product.slug}`}
                    className="px-2 py-1 bg-slate-200 rounded-md transition-all hover:bg-blue-600 hover:text-white"
                >
                    View
                </Link>
                <button
                    className="px-2 py-1 bg-slate-200 rounded-md transition-all hover:bg-red-500 hover:text-white"
                    onClick={() => HandleClickDeleteBtn()}
                >
                    Delete
                </button>
                <button className="px-2 py-1 bg-slate-200 rounded-md transition-all hover:bg-green-500 hover:text-white">
                    Edit
                </button>
            </div>
        </div>
    );
}

export default ProductItemManage;
