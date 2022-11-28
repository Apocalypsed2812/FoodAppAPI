import Carousel from "react-elastic-carousel";
import ProductItem from '../ProductItem'
function SliderProduct({ products }) {
    const { innerWidth: width } = window;
    let itemstoShow = 3;
    if (width < 500) itemstoShow = 1;
    return (
        <Carousel itemsToShow={itemstoShow} showArrows={false} className="cursor-pointer">
            {products.map(product => <ProductItem key={product._id} product={product} />)}
        </Carousel>
    )
}

export default SliderProduct
