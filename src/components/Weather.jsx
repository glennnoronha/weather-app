import React from 'react'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'



const Weather = () => {
    return (
        <div className='flex flex-col items-center rounded-lg p-10 bg-gradient-to-tr from-sky-400 to-blue-600'>
            <div className='flex items-center gap-3'>
                <input className='border-2 h-12 outline-[#626262] rounded-lg pl-6 bg-amber-50 placeholder:text-[#626262]' type='text' placeholder='Search' />
                <img className='border-2 rounded-full cursor-pointer p-3 bg-amber-50' src={search_icon} alt="" />
            </div>
            <img src={clear_icon} alt="" className='w-36 my-5' />
            <p className='text-6xl leading-none'>16°C</p>
            <p className='text-3xl'>Amarillo</p>
            <div className='w-[100%] flex justify-between mt-8'>
                <div className='flex gap-2'>
                    <img className='w-8 h-8' src={humidity_icon} />
                    <div>
                        <p>91%</p>
                        <span className='block text-xs'>Humidity</span>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <img className='w-8 h-8' src={wind_icon} />
                    <div>
                        <p>30 MPH</p>
                        <span className='block text-xs'>Wind Speed</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Weather