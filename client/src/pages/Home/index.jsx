// import shop from "../../images/shop.png";
// import cart from "../../images/cart.png";
// import { GlobalState } from "../../context/GlobalState";
// import { useContext } from "react";

function Home() {
    return (
        <>
            <section className="relative  bg-blueGray-50 mt-5">
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover homePageMain">
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-75 bg-black"
                        ></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl leading-[100px]">
                                        Black friday Sale up to 80%
                                    </h1>
                                    <p className="mt-4 text-lg text-white">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptatem nulla at,
                                        ullam cum expedita rerum laboriosam!
                                        Earum doloribus nemo laudantium.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-10 bg-blueGray-200 -mt-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                        <ion-icon name="car-sport"></ion-icon>
                                    </div>
                                    <h6 className="text-xl font-semibold">
                                        Shipping
                                    </h6>
                                    <p className="mt-2 mb-4 text-blueGray-500">
                                        Fast freight, You can receive your goods
                                        in just 1 to 2 days after payment your
                                        order
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-400">
                                        <ion-icon name="card-outline"></ion-icon>
                                    </div>
                                    <h6 className="text-xl font-semibold">
                                        Payment
                                    </h6>
                                    <p className="mt-2 mb-4 text-blueGray-500">
                                        Fast payment, just one button, easy
                                        payment. Support many payment methods
                                        such as paypal, e-banking
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                        <ion-icon name="finger-print"></ion-icon>
                                    </div>
                                    <h6 className="text-xl font-semibold">
                                        Verified
                                    </h6>
                                    <p className="mt-2 mb-4 text-blueGray-500">
                                        Product certification of high
                                        quality.Products are thoroughly checked
                                        before being delivered to customers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
