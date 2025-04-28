import React from 'react'
import Hero from '../Herosection/Hero'
import LatestCollection from '../latest_collections/LatestCollection'
import Bestseller from '../Bestseller/Bestseller'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
    </div>
  )
}

export default Home