import { createContext, useContext, useState } from "react";

export const RentContext = createContext();
export const RentProvider = ({ children }) => {

    const [searchCity, setSearchCity] = useState('');
    const [pickupDate, setPickupDate] = useState("2022-12-05");
    const [dropoffDate, setDropoffDate] = useState("2022-12-06");
    const [cityLocation, setCityLocation] = useState({
        latitude: 0,
        longitude: 0
    })
    const [carInfo, setCarInfo] = useState([{
        vehicle_info: {
            name: null,
            deposit: null,
            supplierName: null,
            supplierLogo: null,
            transmission: null,
            group: null,
            img: null,
            accessibility: null,
            supplier_address: null,
            rating: {
                average: null,
                average_text: null,
                cleanliness: null,
                condition: null,
                efficiency: null,
                no_of_ratings: null,
                value_for_money: null,
            }
        }
    }
    ])
    const values = {
        searchCity,
        setSearchCity,
        pickupDate,
        setPickupDate,
        cityLocation,
        setCityLocation,
        dropoffDate,
        setDropoffDate,
        carInfo,
        setCarInfo,
    }
    return <RentContext.Provider value={values}>{children}</RentContext.Provider>
}
export const useRent = () => useContext(RentContext);



