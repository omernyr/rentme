import { useRent } from "../context/RentContext";
import { FiInfo } from 'react-icons/fi';
import { GiGearStickPattern, GiWaterDrop } from "react-icons/gi";
import { AiFillCar, AiOutlineCheck } from "react-icons/ai";
import { SlPlane } from "react-icons/sl";
const Result = () => {

  const { carInfo } = useRent()
  return (
    <div className='result'>
      {/* <SidebarInResult /> */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h3>"{carInfo.length}" adet sonuç bulundu. </h3>
        
        {carInfo.length !== 0 ? carInfo.map((item, idx) => (
          
          <div key={idx} className='car'>
            <div className="header">
              <h3>{item.name} </h3>
            </div>
            <div className="container">
              <div className="v_image-and-info">
                <img className="v_image" src={`${item.img}`} alt="" />
                <ul>
                  <li><GiGearStickPattern /> {item.group}</li>
                  <li><GiWaterDrop /> {item.transmission}</li>
                  <li><AiFillCar /> {item.transmission}</li>
                </ul>
              </div>
              <div className="rightbar">
                <div className="rightbar-top">
                  <span className="deposit"><span> <span><FiInfo /></span> Depozito: <b>{item.deposit} ₺</b> </span> <span> <b><AiOutlineCheck /></b> Ücretsiz İptal</span> </span>
                  <span> <span><FiInfo /></span> Toplam Km sınırı : <b>3500 km</b> </span>
                  <span> <span><FiInfo /></span>  {item.accessibility}</span>
                </div>
                <div className="rightbar-mid">
                  <button>Rent To Car</button>
                </div>
                <div className="rightbar-footer">
                  <div className="plane">
                    <SlPlane />
                    <span>{item.supplier_address}</span>
                  </div>
                  <div className="rating">3.9</div>
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="left">
                <img src={`${item.supplierLogo}`} alt="" />

                {/* <div className="supplier-info">
                  <p>{item.supplierName}</p>
                </div> */}
              </div>
              <div className="price">
                <span>Toplam</span>
                1000₺
              </div>
            </div>
          </div>

        )) : null}
      </div>
    </div>
  )
}

export default Result