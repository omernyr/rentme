import Car from './Car'
import SidebarInResult from './SidebarInResult';
import { useRent } from "../context/RentContext";

const Result = () => {
  // const [datas, setDatas] = useState([]);

  // useEffect(() => {
  // const handleFetch = () => {

  //   fetch('https://booking-com.p.rapidapi.com/v1/car-rental/search?pick_up_longitude=14.421133&from_country=it&pick_up_latitude=50.08773&currency=AED&drop_off_datetime=2023-02-27%2009%3A00%3A00&locale=en-gb&sort_by=recommended&drop_off_latitude=50.08773&pick_up_datetime=2023-02-26%2009%3A00%3A00&drop_off_longitude=14.421133', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));

  //   console.log("My Data ->", datas);
  // }
  // }, [])
  const { carInfo } = useRent()
  console.log("mycar info ->",carInfo)
  return (
    <div className='result'>
      {/* <SidebarInResult /> */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        

        {carInfo.length && carInfo.map((item, idx) => (
          <Car key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Result