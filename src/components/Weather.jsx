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

    const weatherStyles = {
        "01d": { icon: clear_icon, gradient: "bg-gradient-to-tr from-amber-200 to-orange-400" },
        "01n": { icon: clear_icon, gradient: "bg-gradient-to-tr from-indigo-900 to-blue-950" },
        "02d": { icon: cloud_icon, gradient: "bg-gradient-to-tr from-sky-300 to-slate-500" },
        "02n": { icon: cloud_icon, gradient: "bg-gradient-to-tr from-slate-600 to-slate-800" },
        "03d": { icon: cloud_icon, gradient: "bg-gradient-to-tr from-slate-400 to-slate-600" },
        "03n": { icon: cloud_icon, gradient: "bg-gradient-to-tr from-slate-600 to-slate-900" },
        "04d": { icon: drizzle_icon, gradient: "bg-gradient-to-tr from-slate-500 to-blue-700" },
        "04n": { icon: drizzle_icon, gradient: "bg-gradient-to-tr from-slate-700 to-blue-900" },
        "09d": { icon: rain_icon, gradient: "bg-gradient-to-tr from-slate-500 to-blue-800" },
        "09n": { icon: rain_icon, gradient: "bg-gradient-to-tr from-slate-700 to-blue-950" },
        "10d": { icon: rain_icon, gradient: "bg-gradient-to-tr from-slate-500 to-blue-800" },
        "10n": { icon: rain_icon, gradient: "bg-gradient-to-tr from-slate-700 to-blue-950" },
        "13d": { icon: snow_icon, gradient: "bg-gradient-to-tr from-sky-200 to-blue-300" },
        "13n": { icon: snow_icon, gradient: "bg-gradient-to-tr from-sky-900 to-blue-950" },
      };
      
      const defaultStyle = { icon: clear_icon, gradient: "bg-gradient-to-tr from-sky-400 to-blue-600" };

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
            const code = data.weather[0].icon;
            const style = weatherStyles[code] || defaultStyle;
            setWeatherData({
                temperature: Math.floor(data.main.temp),
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                city: data.name,
                icon: style.icon,
                gradient: style.gradient,
            });

        } catch (error) {
            setWeatherData(false);
        }
    }

    useEffect(() => {
        search("Amarillo");
    }, [])

    return (
        <div className={`flex flex-col items-center rounded-lg p-10 w-10/12 max-w-[400px] min-h-[481px] ${weatherData?.gradient ?? defaultStyle.gradient}`}>
            <div className='flex items-center gap-3'>
                <input className='w-10/12 border-2 h-12 rounded-lg pl-6 bg-amber-50 text-black placeholder:text-[#626262] outline-none'
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