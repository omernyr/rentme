import { createContext, useContext, useState } from "react";

export const RentContext = createContext();


export const RentProvider = ({ children }) => {

    const [searchCity, setSearchCity] = useState('');
    const [didSelectDate, setDidSelectDate] = useState({
        pickup: "2022-12-14",
        dropoff: null
    });
    const [cityLocation, setCityLocation] = useState({
        latitude: 0,
        longitude: 0
    })

    const values = {
        searchCity,
        setSearchCity,
        didSelectDate,
        setDidSelectDate,
        cityLocation,
        setCityLocation,

    }

    return <RentContext.Provider value={values}>{children}</RentContext.Provider>
}

export const useRent = () => useContext(RentContext);



