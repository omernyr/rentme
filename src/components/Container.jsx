import React from 'react'
import Navbar from './Navbar'
import OffersAndPartners from './OffersAndPartners'
import Search from './Search'

const Container = () => {
  return (
    <div>
        <Navbar />
        <Search />
        <OffersAndPartners />
    </div>
  )
}

export default Container