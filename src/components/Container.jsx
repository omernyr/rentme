import React, { useState } from 'react'
import Navbar from './Navbar'
import OffersAndPartners from './OffersAndPartners'
import Result from './Result'
import Search from './Search'

const Container = () => {

  const [searchCity, setSearchCity] = useState("");

  return (
    <div>
      <Navbar />
      <Search searchCity={searchCity} setSearchCity={setSearchCity} />
      <Result searchCity={searchCity} />
      <OffersAndPartners />
    </div>
  )
}

export default Container