import React from 'react'
import Hero from '../components/hero/Hero'
import { Populer } from '../components/populer/populer'
import Offers from '../components/offers/offers'
import NewCollections from '../components/newcollections/NewCollections'
import Letter from '../components/new Letter/letter'

const Shop = () => {
  return (
    <div>
      <div className="HeroinShop page" >
        <Hero />
      </div>
      <Populer />
      <Offers />
      <NewCollections />
      <Letter />
    </div>
  )
}

export default Shop