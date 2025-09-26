import { createContext, useState, useContext } from "react";

const WeatherContext = createContext<WeatherContextType | null>(null);

type WeatherContextType = {
  weather: string;
  changeWeather: () => void;
};

const Context = () => {
  const [weather, setWeather] = useState("🌞");

  const changeWeather = () => setWeather("🌧️");

  return (
    <WeatherContext.Provider value={{ weather, changeWeather }}>
      <Europe />
    </WeatherContext.Provider>
  );
};

const Europe = () => {
  return <Estonia />;
};

const Estonia = () => {
  return <Tallinn />;
};

const Tallinn = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    return <div>Weather context not available</div>;
  }

  const { weather, changeWeather } = context;

  return <div onClick={changeWeather}>{weather}</div>;
};

export default Context;
