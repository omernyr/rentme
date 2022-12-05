import { FiSearch } from 'react-icons/fi'
import { CiLocationOn } from 'react-icons/ci'
import { geoApiOptions, options } from "../api"
import { useState } from 'react';
import { useRent } from '../context/RentContext';

const Search = () => {

  const { searchCity, setSearchCity, didSelectDate, setDidSelectDate, cityLocation, setCityLocation } = useRent();

  const handleChange = (e) => {
    setSearchCity(e.target.value)
  }

  const handleFetch = (e) => {
    e.preventDefault()

    console.log("pickup date ->", didSelectDate.pickup);
    console.log("dropoff date ->", didSelectDate.dropoff);

    // for about rent a car info
    fetch(`https://booking-com.p.rapidapi.com/v1/car-rental/search?pick_up_longitude=${cityLocation.longitude}&from_country=sk&pick_up_latitude=${cityLocation.latitude}&currency=AED&drop_off_datetime=${didSelectDate.dropoff}%2009%3A00%3A00&locale=en-gb&sort_by=recommended&drop_off_latitude=${cityLocation.latitude}&pick_up_datetime=${didSelectDate.pickup}%2009%3A00%3A00&drop_off_longitude=${cityLocation.longitude}`,
      options)
      .then(response => response.json())
      .then(response => console.log("My data ->", response))

    // my city long and lat
    fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${searchCity}`, geoApiOptions)
      .then(response => response.json())
      .then(response => console.log("my city ->",
        setCityLocation({ longitude: response.data[0].longitude, latitude: response.data[0].latitude })
      ))
  }
  return (
    <div className='search'>
      <form onSubmit={handleFetch} className='search-vehicle-form'>
        <span><CiLocationOn /></span>
        <input
          onChange={handleChange}
          value={searchCity}
          className='search-vehicle-input'
          placeholder='Esenler, Istanbul' />
        <input type="date" className='date' onChange={(e) => setDidSelectDate({ pickup: e.target.value })} name='pickup' />
        <input type="date" className='date' onChange={(e) => setDidSelectDate({ dropoff: e.target.value })} name='dropoff' />
        <button type='submit' className='search-vehicle-button'><FiSearch /></button>
      </form>

    </div>
  )
}

export default Search