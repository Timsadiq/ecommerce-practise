import React from 'react'
import './latestcollection.css'
import Card from '../Commonfilles/Card'
import latest_collections from '../../assets/New_collections'


const LatestCollection = () => {
    return (
        <div>
            <div className="new_collections">
                <h1>Latest collection</h1>
                <p>Explore our latest collections across variety of items</p>
                <hr />
                <div className="collections">
                    {latest_collections.map((card, i) => {
                        return<Card key={i} id={card.id} name={card.name} img={card.img} 
                        new_price={card.new_price}  old_price={card.old_price}/>
                         
            })}
                </div>

            </div>
        </div>
    )
}

export default LatestCollection