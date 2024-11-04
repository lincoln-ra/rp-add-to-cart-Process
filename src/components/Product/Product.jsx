import './product.css'
const Product = ({product, handleAddToCart}) => {
    // console.log(product)
    const {name, image, description, inStock, price, rating, reviews}= product
    return (
        
        <div className='card'>
            <div id='name'><b>Name</b>: {name}</div>
            <img src={image} alt="" />
            <p>{description}</p>
            <div className='details'>
                <p><b>inStock:</b>   {inStock? 'yes' : 'no'}</p>
                <p><b>Price:</b> {price}</p>
                <p><b>Rating:</b> {rating}</p>
                <p><b>Reviews:</b> {reviews}</p>
            </div>
            <button onClick={()=> handleAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;