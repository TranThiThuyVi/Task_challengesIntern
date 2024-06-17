import React, { useState, useEffect } from "react";
import { MdMyLocation, MdLocationOn } from 'react-icons/md';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [locationAllowed, setLocationAllowed] = useState(false);
  const [unit, setUnit] = useState("metric");
  const [todayWeather, setTodayWeather] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const fetchWeatherData = (url) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        return response.json();
      })
      .then(data => {
        const todayWeatherData = data.list[0];
        setTodayWeather({
          cityName: data.city.name,
          weather: todayWeatherData.weather[0].main,
          temperature: todayWeatherData.main.temp,
          date: new Date(todayWeatherData.dt * 1000).toLocaleDateString(),
        });
        onSearch(data.city.name);
        updateSearchHistory(data.city.name);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  };

  //the search API by city name
  const fetchCityByName = (cityName) => {
    if (cityName.trim() === '') return;

    const url = `https://api.openweathermap.org/data/2.5/forecast?appid=5caf59265a678ca70e57d4763ad8ddcc&q=${cityName}&units=${unit}`;
    fetchWeatherData(url);
  };


  //the search API according to current coordinates
  const fetchCityByCoordinates = (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?appid=5caf59265a678ca70e57d4763ad8ddcc&lat=${latitude}&lon=${longitude}&units=${unit}`;
    fetchWeatherData(url);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationAllowed(true);
          const { latitude, longitude } = position.coords;
          fetchCityByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
          setLocationAllowed(false);
        }
      );
    } else {
      setLocationAllowed(false);
    }
  }, []);

  const handleSearch = () => {
    fetchCityByName(city);
  };

  const handleCurrentLocation = () => {
    if (locationAllowed) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchCityByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    }
  };

  // save history
  const updateSearchHistory = (cityName) => {
    setSearchHistory((prevHistory) => {
      const newHistory = [...prevHistory.filter(city => city !== cityName), cityName];
      return newHistory.slice(-10).reverse(); 
    });
  };

  const getWeatherIcon = (weather) => {
    switch (weather) {
      case 'Clear':
        return <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="Clear" className="weather-icon" style={{ width: "15em" }} />;
      case 'Clouds':
        return <img src="https://openweathermap.org/img/wn/03d@2x.png" alt="Clouds" className="weather-icon" style={{ width: "15em" }} />;
      case 'Rain':
        return <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Rain" className="weather-icon" style={{ width: "15em" }} />;
      case 'Snow':
        return <img src="https://openweathermap.org/img/wn/13d@2x.png" alt="Snow" className="weather-icon" style={{ width: "15em" }} />;
      case 'Thunderstorm':
        return <img src="https://openweathermap.org/img/wn/11d@2x.png" alt="Thunderstorm" className="weather-icon" style={{ width: "15em" }} />;
      default:
        return <img src="https://openweathermap.org/img/wn/03d@2x.png" alt="Clouds" className="weather-icon" style={{ width: "15em" }} />;
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-700 text-white">
      <div className="flex justify-start w-full mb-4 text-black">
        <div className="relative w-full">
          <input
            type="text"
            className="border rounded p-2 w-full"
            placeholder="Search for a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onFocus={() => setShowHistory(true)}
            onBlur={() => setTimeout(() => setShowHistory(false), 200)}
          />
          {searchHistory.length > 0 && showHistory && (
            <ul className="absolute left-0 right-0 bg-white border rounded mt-1 max-h-100 overflow-y-auto z-10">
              {searchHistory.map((historyCity, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setCity(historyCity);
                    setShowHistory(false);
                    fetchCityByName(historyCity);
                  }}
                >
                  {historyCity}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white rounded p-2 ml-2"
        >
          Search
        </button>
        {locationAllowed && (
          <button
            onClick={handleCurrentLocation}
            className="bg-slate-200 text-black rounded-full p-2 ml-2 flex items-center justify-center"
            style={{ minWidth: '40px', minHeight: '40px' }}
          >
            <MdMyLocation />
          </button>
        )}
      </div>
      {todayWeather && (
        <div className="mt-4 flex flex-col items-center">
          <div>{getWeatherIcon(todayWeather.weather)}</div>
          <p className="text-[100px]">{Math.floor(todayWeather.temperature)}°C</p>
          <p className="text-[40px]">{todayWeather.weather}</p>
          <p>Today: {todayWeather.date}</p>
          <div className="m-4 text-white flex items-center pt-10">
            <MdLocationOn size={24} className="mr-2" />
            <h2 className="text-xl font-bold">{todayWeather.cityName}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
