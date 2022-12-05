import { FiSearch } from 'react-icons/fi'
import { CiLocationOn } from 'react-icons/ci'
import { geoApiOptions, options } from "../api"
import { useRent } from '../context/RentContext';

const Search = () => {

  const { searchCity,
    setSearchCity,
    cityLocation,
    setCityLocation,
    pickupDate,
    setPickupDate,
    dropoffDate,
    setDropoffDate,

    setCarInfo
  } = useRent();
  const handleChange = async (e) => {
    await setSearchCity(e.target.value)
  }
  const handleFetch = async (e) => {
    e.preventDefault()
    console.log("my e is ->", e.target);
    console.log("pickup date ->", pickupDate);
    console.log("dropoff date ->", dropoffDate);

    // my city long and lat
    await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${searchCity}`, geoApiOptions)
      .then(response => response.json())
      .then(response => console.log("my city ->", response.data[0],
        setCityLocation({ longitude: (response.data[0].longitude).toFixed(5), latitude: (response.data[0].latitude).toFixed(5) })
      ))
    // for about rent a car info
    await fetch(`https://booking-com.p.rapidapi.com/v1/car-rental/search?pick_up_longitude=${cityLocation.longitude}&from_country=sk&pick_up_latitude=${cityLocation.latitude}&currency=AED&drop_off_datetime=${dropoffDate}%2009%3A00%3A00&locale=en-gb&sort_by=recommended&drop_off_latitude=${cityLocation.latitude}&pick_up_datetime=${pickupDate}%2009%3A00%3A00&drop_off_longitude=${cityLocation.longitude}`,
      options)
      .then(response => response.json())
      .then(response =>
        console.log("My data ->", response.search_results.map((item) => {
          
          setCarInfo([{
            vehicle_info: {
              name: item.vehicle_info.v_name,
              deposit: item.pricing_info.base_deposit,
              supplierName: item.supplier_info.name,
              supplierLogo: item.supplier_info.logo_url,
              transmission: item.vehicle_info.transmission,
              group: item.vehicle_info.group,
              img: item.vehicle_info.image_url
            }
          }])

        })
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
        <input type="date" className='date' value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
        <input type="date" className='date' value={dropoffDate} onChange={(e) => setDropoffDate(e.target.value)} />
        <button type='submit' className='search-vehicle-button'><FiSearch /></button>
      </form>
    </div>
  )
}

export default Search