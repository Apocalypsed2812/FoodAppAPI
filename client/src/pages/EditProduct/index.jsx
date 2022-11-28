import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { postMethod } from "../../utils/fetchData";
import { GlobalState } from "../../context/GlobalState";

function AddProduct() {
    const state = useContext(GlobalState);
    const [products, setProducts] = state.ProductAPI.products;
    const [product, setProduct] = useState({
        name: "",
        sub_title: "",
        description: "",
        price: 0,
        category: "",
        image: null,
        previewImg: "",
    });

    const handleChangeProduct = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };
    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        if (file)
            setProduct({
                ...product,
                image: file,
                previewImg: URL.createObjectURL(file),
            });
    };
    const addProduct = (e) => {
        const body = new FormData(e.target);
        postMethod("product", body)
            .then((res) => {
                if (res.success) {
                    let newProduct = res.product;
                    setProducts([...products, newProduct]);
                    setProduct({
                        name: "",
                        sub_title: "",
                        description: "",
                        price: 0,
                        category: "",
                        image: null,
                        previewImg: "",
                    });
                    Swal.fire({
                        title: "Success",
                        text: "Product has been added successfully",
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
            .catch((err) => console.log(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (product.name === "") {
            Swal.fire({
                title: "Error",
                text: "Product name can not be empty",
                icon: "error",
            });
            return;
        }
        if (product.sub_title === "") {
            Swal.fire({
                title: "Error",
                text: "Product sub title can not be empty",
                icon: "error",
            });
            return;
        }
        if (product.price <= 0) {
            Swal.fire({
                title: "Error",
                text: "Product price not valid",
                icon: "error",
            });
            return;
        }
        if (product.category === "") {
            Swal.fire({
                title: "Error",
                text: "Please choose Product category",
                icon: "error",
            });
            return;
        }
        if (product.description === "") {
            Swal.fire({
                title: "Error",
                text: "Product description can not be empty",
                icon: "error",
            });
            return;
        }
        if (!product.image) {
            Swal.fire({
                title: "Error",
                text: "Please choose a product image",
                icon: "error",
            });
            return;
        }
        addProduct(e);
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex h-screen bg-gray-200 items-center justify-center  mt-20 border mb-32"
        >
            <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2 border">
                <div className="flex justify-center py-4">
                    <div className="flex bg-purple-200 rounded-full md:p-2 p-2 border-2 border-purple-300">
                        NVT
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex">
                        <h1 className="text-gray-600 font-bold md:text-2xl text-xl">
                            Add product
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                        Name
                    </label>
                    <input
                        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={(e) => handleChangeProduct(e)}
                        value={product.name}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                            Sub title
                        </label>
                        <input
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            placeholder="Sub title"
                            name="sub_title"
                            onChange={(e) => handleChangeProduct(e)}
                            value={product.sub_title}
                        />
                    </div>
                    <div className="grid grid-cols-1">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                            Price $
                        </label>
                        <input
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="number"
                            placeholder="Price"
                            name="price"
                            onChange={(e) => handleChangeProduct(e)}
                            value={product.price}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                        Category
                    </label>
                    <select
                        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        name="category"
                        onChange={(e) => handleChangeProduct(e)}
                        value={product.category}
                    >
                        <option value="">Choose</option>
                        <option value="digital">Digital product</option>
                        <option value="furniture ">Furniture product</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                        Description
                    </label>
                    <textarea
                        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="Description"
                        name="description"
                        onChange={(e) => handleChangeProduct(e)}
                        value={product.description}
                    />
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                        Upload Photo
                    </label>
                    <label
                        htmlFor="image-product"
                        className="w-fit relative cursor-pointer"
                    >
                        {product.previewImg && (
                            <img
                                className="w-40"
                                src={product.previewImg}
                                alt=""
                            />
                        )}
                        <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-slate-700/50 flex items-center justify-center text-[14px] text-white font-semibold">
                            Chosse another image
                        </div>
                    </label>
                    {!product.previewImg && (
                        <div className="flex items-center justify-center w-full">
                            <label
                                className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group"
                                htmlFor="image-product"
                            >
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <svg
                                        className="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                    <p className="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">
                                        Select a photo
                                    </p>
                                </div>
                            </label>
                        </div>
                    )}
                    <input
                        type="file"
                        className="hidden"
                        name="image"
                        id="image-product"
                        onChange={(e) => handleChangeImage(e)}
                    />
                </div>

                <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                    <Link
                        to="/"
                        className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                    >
                        Cancel
                    </Link>
                    <button className="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
                        Create
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AddProduct;
