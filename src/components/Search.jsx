import { FiSearch } from 'react-icons/fi'
import { CiLocationOn } from 'react-icons/ci'


const Search = () => {
  return (
    <div className='search'>
      <img src="https://s7d1.scene7.com/is/image/hyundai/2022-santa-fe-phev-limited-awd-shimmering-silver:Vehicle-Carousel?fmt=webp-alpha" alt="" />
      <h1>
        Search, book and rent
         vehicle easily
      </h1>
      <form className='search-vehicle-form'>
        <span><CiLocationOn /></span>
        <input className='search-vehicle-input' type="text" placeholder='Esenler, Istanbul' />
        <button className='search-vehicle-button'><FiSearch /></button>
      </form>
    </div>
  )
}

export default Search