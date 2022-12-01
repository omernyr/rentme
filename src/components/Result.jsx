import Car from './Car'
import data from "../data";
import SidebarInResult from './SidebarInResult';

const Result = () => {
  return (
    <div className='result'>
      <SidebarInResult />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.map((item) => (
          <Car item={item} />
        ))}
      </div>
    </div>
  )
}

export default Result