import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  const fetchWeather = async () => {
    setError("");
    setWeatherData(null);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/weather/${city}/`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("City not found. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        darkMode ? "dark" : ""
      }`}
    >
      <div
        className={`p-6 rounded-lg shadow-lg w-full max-w-sm ${
          darkMode
            ? "bg-gray-800 text-gray-100"
            : "bg-white text-gray-900 shadow-gray-400"
        }`}
      >
        <div className={darkMode ? "dark bg-gray-800 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
  <header className="relative">
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`absolute top-4 right-4 py-1 px-3 rounded shadow-md ${
        darkMode
          ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
          : "bg-gray-300 text-gray-800 hover:bg-gray-400"
      }`}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  </header>
  <main className="p-4">
    <h1 className="text-2xl font-bold text-center">Welcome to the Weather App</h1>
  </main>
</div>

        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
          className={`w-full p-2 border rounded mb-4 ${
            darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"
          }`}
        />
        <button
          onClick={fetchWeather}
          className={`w-full py-2 px-4 rounded ${
            darkMode
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Get Weather
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}
        {weatherData && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
