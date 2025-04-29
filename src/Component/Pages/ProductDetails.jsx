import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Products from '../../assets/Products'
import './ProductDetails.css'
import { FaStar } from 'react-icons/fa'
import { useCart } from '../Context/Cartcontext' 

const ProductDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const {addToCart}=useCart()

    const { id } = useParams()
    const navigate = useNavigate()
    const product = products.find(p => p.id === parseInt(id))

    if (!product) return <h2 className='text-center mt-5'>Product not Found</h2>

    return (
        <div className='container-fluid py-5'>
            <div className="row justify-content-center align-items-start px-4 px-lg-5">

                <div className="col-lg-6 col-md-6 mb-4 mb-lg-0 text-center">
                    <img src={product.img} alt={product.name} className='img-fuid main-img mb-3 w-100' />

                    <div className="d-flex justify-content-center gap-2 flex-wrap ">
                        <img src={product.img} alt={product.name} className='img-thumbnail thumb-img' />

                        <img src={product.img} alt={product.name} className='img-thumbnail thumb-img' />
                    </div>
                </div>


                <div className="col-lg-6 col-md-6">
                    <h1 className='display-5 fw-bold mb-3'>{product.name}</h1>
                    <div className="text-warning mb-5 fs-5">
                        {[...Array(5)].map((_, i) => (<FaStar key={i} />))}
                    </div>

                    <h3 className='text-center'>${product.new_price.toFixed(2)}</h3>
                    <p className='text-muted text-decoration-line-through mb-4'>${product.old_price.toFixed(2)}</p>

                    <p className='mb-4 fs-6 lh-base'>{product.description} || 'This is a beautiful product you should have. Buy now!</p>

                    <div className="d-flex flex-wrap gap-3">
                     <button className="btn btn-lg btn-primary" onClick={()=> addToCart(product) }>Add to cart</button>
                        <button className='btn btn-outline-primary' onClick={() => navigate(-1)}>Go Back</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductDetails