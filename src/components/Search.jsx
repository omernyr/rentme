import { FiSearch } from 'react-icons/fi'
import { CiLocationOn } from 'react-icons/ci'
import { geoApiOptions, options } from "../api"
import { useState } from 'react';

const Search = ({ searchCity, setSearchCity }) => {

  const [datas, setDatas] = useState([]);
  const [cityLocation, setCityLocation] = useState({
    latitude: 0,
    longitude: 0
  })

  const handleFetch = (e) => {

    e.preventDefault()
    setSearchCity(e.target.value)

    fetch(`https://booking-com.p.rapidapi.com/v1/car-rental/search?pick_up_longitude=14.421133&from_country=sk&pick_up_latitude=50.08773&currency=AED&drop_off_datetime=2023-02-27%2009%3A00%3A00&locale=en-gb&sort_by=recommended&drop_off_latitude=50.08773&pick_up_datetime=2023-02-26%2009%3A00%3A00&drop_off_longitude=14.421133`, options)
      .then(response => response.json())
      .then(response => console.log("My data ->", response))

    fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${searchCity}`, geoApiOptions)
      .then(response => response.json())
      .then(response => console.log("my city ->", setCityLocation({ latitude: response.data[0].latitude }), setCityLocation({ longitude: response.data[0].longitude })))
  }
  return (
    <div className='search'>
      <img src="https://s7d1.scene7.com/is/image/hyundai/2022-santa-fe-phev-limited-awd-shimmering-silver:Vehicle-Carousel?fmt=webp-alpha" alt="" />
      <h1>
        Search, book and rent
        vehicle easily
      </h1>
      <form className='search-vehicle-form'>
        <span><CiLocationOn /></span>
        <input
          value={searchCity}
          onChange={handleFetch}
          className='search-vehicle-input' type="text"
          placeholder='Esenler, Istanbul' />
        <button onClick={handleFetch} type='submit' className='search-vehicle-button'><FiSearch /></button>
      </form>
    </div>
  )
}

export default Search