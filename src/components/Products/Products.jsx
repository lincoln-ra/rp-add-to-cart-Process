import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    const [cart , setCart] = useState([]);

    useEffect(()=>{
        fetch ("product.json")
        .then (res => res.json())
        .then (data => setProducts(data))
    }, [])

    const handleAddToCart = product => {
        console.log(product)
        const newCart =[...cart, product];
        setCart(newCart);
    }

    return (
        <div>
            <h2>All Products</h2>
            <h5>Total Product: {products.length}</h5>

            {/* cart section */}
            <h5>cart:{cart.length}</h5>


            {/* cards will be displayed */}
            <div className='cards'>
                {
                    products.map(product => <Product key={product.id} 
                        handleAddToCart={handleAddToCart}
                        product={product}></Product>)
                }
            </div>
            
        </div>
    );
};

export default Products;