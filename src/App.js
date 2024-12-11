import { useState } from 'react';
import './App.css';

export default function TemperatureController() {
  const [temperature, setTemperature] = useState(0); // начальная температура

  const increaseTemperature = () => {
  setTemperature((prevTemp) => prevTemp + 2);
  };

  const decreaseTemperature = () => {
  setTemperature((prevTemp) => prevTemp - 2);
  };

  // Функция для определения цвета фона с интервалом в 2 градуса
  const getBackgroundColor = () => {
  const minTemp = -20; // Минимальная температура
  const maxTemp = 40; // Максимальная температура


  const normalizedTemp = Math.min(maxTemp, Math.max(minTemp, temperature));
  const blue = Math.max(0, 255 - (normalizedTemp - minTemp) * 8);
  const red = Math.min(255, (normalizedTemp - minTemp) * 8);
  const green = Math.max(0, 255 - Math.abs(normalizedTemp - 20) * 8);

  return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
<div
  className="temperature-controller"
  style={{ backgroundColor: getBackgroundColor() }}
>
  <div className="temperature-window">
      <h1 className="temperature-display">{temperature}°C</h1>
      <div className="temperature-buttons">
          <button onClick={increaseTemperature} className="temp-button">
          +
          </button>
          <button onClick={decreaseTemperature} className="temp-button">
          -
          </button>
      </div>
  </div>
</div>
);
}