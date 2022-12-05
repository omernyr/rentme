import Navbar from './Navbar'
import OffersAndPartners from './OffersAndPartners'
import Result from './Result'
import Search from './Search'

const Container = () => {

  return (
    <div>
      <Navbar />
      <Search />
      <Result />
      <OffersAndPartners />
    </div>
  )
}

export default Container