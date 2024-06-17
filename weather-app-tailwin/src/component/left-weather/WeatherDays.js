import React, { useState } from "react";

const WeatherDays = ({ data, onDaySelect }) => {
    const forecast = data.list.slice(1, 6); 
    const [selectedDay, setSelectedDay] = useState(null);

    const getDayLabel = (index) => {
        if (index === 0) return "Tomorrow";
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date().getDay();
        return daysOfWeek[(today + index + 1) % 7];
    };

    const handleDayClick = (day) => {
        setSelectedDay(day); 
        onDaySelect(day); 
    };

    return (
        <div className="forecast text-white text-center">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {forecast.map((day, index) => (
                    <div 
                        key={day.dt} 
                        className={`day-forecast p-4 border rounded ${selectedDay === day ? 'bg-slate-800' : 'bg-slate-600'}`}
                        onClick={() => handleDayClick(day)}
                    >
                        <p className="font-semibold">{getDayLabel(index)}</p>
                        <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
                        <img
                            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt={day.weather[0].description}
                            className="weather-icon"
                        />
                        <p className="text-sm text-gray-400 oldstyle-nums">
                            <span className="mr-5">{Math.floor(day.main.temp_min)} °C</span>
                            <span>{Math.floor(day.main.temp_max)} °C</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherDays;
