import { FiInfo } from "react-icons/fi"


const Car = ({ item }) => {

    return (
        <div className='car'>
            <header>
                <h3>{item.name} </h3>
            </header>
            <div className="container">
                <img src={`${item.img}`} alt="" />
                <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                    <span> <span><FiInfo /></span> Depozito: <b>{item.deposit} $</b> </span>
                    <span> <span><FiInfo /></span> Toplam Km sınırı : <b>3500 km</b> </span>
                    <span> <span><FiInfo /></span> Aracı nasıl teslim alacağım? <b>Adrese teslim</b></span>
                </div>
            </div>
            <footer>
                <button>Rent To Car</button>
            </footer>
        </div>
    )
}

export default Car