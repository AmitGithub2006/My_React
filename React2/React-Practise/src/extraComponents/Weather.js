import React, {useState} from 'react';
const axios = require('axios').default;


const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState({});


    async function getWeatherData(cityName) {
        try {
          const response = await axios.get('http://api.weatherapi.com/v1/current.json', {
            params: {
                "key":"aa2efebe1c7b459a96e173040222809",
                "q" : `${cityName}`,
                "aqi": "no"
            }
          });
          console.log(response);
          setWeatherData(response.data)
          
        } catch (error) {
          console.error(error);
        }
    }


    const handleClick = (e) => {
        e.preventDefault()
        
        // steps Chandan: 
        // - city value ko API me set krna h
        // - api se reponse ayega usko alag state me set krna h
        // - uske bar render krna h
        // - useEffect k andar hoga
        // - dependencies array me state likhna hoga

        // steps:
        // - call weather api with the entered city
        // - save api response in weatherData state

        getWeatherData(city)

    }

    return (
        <>
            <input placeholder='City Name' onChange={(e) => setCity(e.target.value)} />
            <button onClick={handleClick} >Fetch</button>
            {
                weatherData.location ? 
                <p>Latitude : {weatherData.location.lat}</p>
                : <p>Please enter city name.</p>
            }
            
            
        </>
    )
}


export default Weather;