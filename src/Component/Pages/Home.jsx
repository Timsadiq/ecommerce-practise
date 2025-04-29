import React from 'react'
import Hero from '../Herosection/Hero'
import LatestCollection from '../latest_collections/LatestCollection'
import Bestseller from '../Bestseller/Bestseller'
import Newsletter from '../Forms/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <Newsletter/>
    </div>
  )
}

export default Home