import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./component/right-weather/SearchBar";
import WeatherDays from "./component/left-weather/WeatherDays";
import TodayHighlightWeather from "./component/left-weather/TodayHighlightWeather";

const API_KEY = "5caf59265a678ca70e57d4763ad8ddcc";

const WeatherApp = () => {
    const [city, setCity] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [units, setUnits] = useState("metric");
    const [selectedDay, setSelectedDay] = useState(null); 
    const [todayWeather, setTodayWeather] = useState(null);
    const [viewingToday, setViewingToday] = useState(true); 

    useEffect(() => {
        if (city) {
            fetchWeather(city);
        }
    }, [city, units]);

    const fetchWeather = async (city) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${city}&units=${units}`);
            setWeatherData(response.data);
            setTodayWeather(response.data.list[0]); 
            setSelectedDay(null); 
            setViewingToday(true); 
        } catch (error) {
            console.error("Error fetching weather data", error);
        }
    };

    const handleSearch = (newCity) => {
        setCity(newCity);
    };

    const handleDaySelect = (day) => {
        setSelectedDay(day); 
        setViewingToday(false); 
    };

    // const handleViewToday = () => {
    //     setSelectedDay(null); 
    //     setViewingToday(true); 
    // };

    const handleTodayWeatherClick = () => {
        if (!viewingToday) {
            setSelectedDay(null); 
            setViewingToday(true); 
        }
    };

    return (
        <div className="container mx-auto p-4 flex flex-wrap lg:flex-nowrap lg:gap-10">
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="w-full lg:w-2/3">
                <div className="flex justify-end items-center mb-4">
                    <button 
                        onClick={() => setUnits("metric")} 
                        className={`rounded-full p-2 m-2 focus:outline-none ${units === "metric" ? "bg-gray-500 text-white" : "bg-white text-black"}`} 
                        style={{minWidth: '40px', minHeight: '40px'}}
                    >
                        °C
                    </button>
                    <button 
                        onClick={() => setUnits("imperial")} 
                        className={`rounded-full p-2 m-2 focus:outline-none ${units === "imperial" ? "bg-gray-500 text-white" : "bg-white text-black"}`}
                        style={{minWidth: '40px', minHeight: '40px'}}
                    >
                        °F
                    </button>
                </div>
                {weatherData && (
                    <>
                        <WeatherDays data={weatherData} onDaySelect={handleDaySelect} />
                        <div onClick={handleTodayWeatherClick}>
                            <TodayHighlightWeather
                                windSpeed={viewingToday ? todayWeather.wind.speed : selectedDay.wind.speed}
                                windDirection={viewingToday ? todayWeather.wind.deg : selectedDay.wind.deg}
                                humidity={viewingToday ? todayWeather.main.humidity : selectedDay.main.humidity}
                                visibility={viewingToday ? todayWeather.visibility / 1000 : selectedDay.visibility / 1000}
                                pressure={viewingToday ? todayWeather.main.pressure : selectedDay.main.pressure}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default WeatherApp;
