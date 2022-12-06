import { useRent } from "../context/RentContext";
import { FiInfo } from 'react-icons/fi';
import { GiGearStickPattern, GiWaterDrop } from "react-icons/gi";
import { AiFillCar, AiOutlineCheck } from "react-icons/ai";
import { SlPlane } from "react-icons/sl";
import { useState } from "react";
import { useEffect } from "react";
const Result = () => {

  const { carInfo } = useRent()
  const [mouseMove, setMouseMove] = useState(false);
  const handleRating = (e) => {
    e.preventDefault()
    console.log(e.target.innerText);
    setMouseMove(true)
  }
  const handleRating2 = () => {
    setMouseMove(false)
  }

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
                  <div onMouseLeave={handleRating2} onMouseEnter={handleRating} className="rating">{item.rating.average}</div>
                  <div key={idx} className={`rating-popup ${mouseMove && "active"}`}>
                    <span>Ortalama: {item.rating.average}</span>
                    <span>Yorumlar: {item.rating.average_text}</span>
                    <span>Temizlik: {item.rating.cleanliness}</span>
                    <span>Şartlar: {item.rating.condition}</span>
                    <span>Yeterlilik: {item.rating.efficiency}</span>
                    <span>Derecelendirme Sayısı: {item.rating.no_of_ratings}</span>
                    <span>Paraya değer: {item.rating.value_for_money}</span>
                  </div>
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