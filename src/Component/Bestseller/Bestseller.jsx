import React from 'react'
import Card from '../Commonfilles/Card'
import './Bestseller.css'
import all_products from '../../assets/Products'
const Bestseller = () => {
  return (
    <div className='new_collections bestseller'>
      <h1>Top Rated pick </h1>
      <p>currated by our shoppers, trusted, loved and re-oredered again </p>
      <div className='collections'>
        {all_products.map((card, i) => {
          return <Card key={i} id={card.id} name={card.name} img={card.img}
            new_price={card.new_price} old_price={card.old_price} />

        })}
      </div>
    </div>
  )
}

export default Bestseller