import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = ({id, name, img, new_price,old_price,}) => {
  return (
    <div className='item'>
<img src={img} alt="" />
<p>{name}</p>


<div className='item-prices'>
    <div className="item-prices-new">
        ${new_price}
    </div>
    <div className="item-price-old">
        ${old_price}
    </div>
</div>
<Link to={`/Product/${id}`}> 
<button className='btn btn-outline-primary'> Add to cart</button>
</Link>

    </div>
  )
}

export default Card