import React, { useEffect, useState, useRef } from 'react'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

const Weather = () => {

    const inputRef = useRef();
    const [weatherData, setWeatherData] = useState(false);

    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon
    };

    const search = async (city) => {
        if (city === "") {
            alert("Enter a city please!");
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${import.meta.env.VITE_KEY}`;
            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }
            console.log(data);
            const icon = allIcons[data.weather[0].icon] || clear_icon
            setWeatherData({
                temperature: Math.floor(data.main.temp),
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                city: data.name,
                icon: icon
            });

        } catch (error) {
            setWeatherData(false);
        }
    }

    useEffect(() => {
        search();
    }, [])

    return (
        <div className='flex flex-col items-center rounded-lg p-10 bg-gradient-to-tr from-sky-400 to-blue-600 w-10/12 max-w-[500px] min-h-[481px]'>
            <div className='flex items-center gap-3'>
                <input className='border-2 h-12 rounded-lg pl-6 bg-amber-50 text-black placeholder:text-[#626262] outline-none'
                    type='text' placeholder='Search' ref={inputRef} />
                <img className='border-2 rounded-full cursor-pointer p-3 bg-amber-50'
                    src={search_icon}
                    alt=""
                    onClick={() => search(inputRef.current.value)} />
            </div>

            {weatherData ? <>
                <img src={weatherData.icon} alt="" className='w-36 my-5' />
                <p className='text-6xl leading-none'>{weatherData.temperature}°F</p>
                <p className='text-3xl'>{weatherData.city}</p>
                <div className='w-full flex justify-between mt-8'>
                    <div className='flex gap-2'>
                        <img className='w-8 h-8' src={humidity_icon} />
                        <div>
                            <p>{weatherData.humidity}%</p>
                            <span className='block text-xs'>Humidity</span>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <img className='w-8 h-8' src={wind_icon} />
                        <div>
                            <p>{weatherData.windSpeed} MPH</p>
                            <span className='block text-xs'>Wind Speed</span>
                        </div>

                    </div>
                </div>
            </> :
                <>
                </>}

        </div>
    )
}

export default Weather