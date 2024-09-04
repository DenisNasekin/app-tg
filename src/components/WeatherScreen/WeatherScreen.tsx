import React, { useEffect, useState } from "react";
import axios from "axios";

import './WeatherScreen.css';

import getRandomCity from "../../utils/getRandomCity";
import cities from "../../constants/cities";





const WeatherScreen: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const API_KEY = '27587f0206d695a6adfbd9bce8b91cb1';

    const randomCity = getRandomCity(cities);

    useEffect(() => {
        const fetchWeather = async () => {
            try {  
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&appid=${API_KEY}`, {
                    timeout: 30000,
                    timeoutErrorMessage: 'Timeout',
                });
                setData(response.data);
            } 
            catch (error) {
                console.error('Error:', error);
            }
        };
        fetchWeather();
    }, []);

    return (    
        <section className="sectionWeather">
            <h1 className="sectionWeather__title">Weather</h1>
            {data && (
                <div>
                <p className="sectionWeather__text">City: {data.name}</p>
                <p className="sectionWeather__text">Temperature: {data.main.temp}°C</p>
                <p className="sectionWeather__text">Description: {data.weather[0].description}</p>
                </div>
            )}
        </section>
    );
}

export default WeatherScreen;