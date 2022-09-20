import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [city, setcity] = useState({});
  const [search, setsearch] = useState("mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&unit=metric&appid=59974ebbff64876e0b87e3100ffd41a7`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("data", data);
      setcity(data);
    };
    fetchApi();
  }, [search]);
  const { main } = city || {};
  return city ? (
    <div className="wrapper">
      <div className="App">
        <div className="main">
          <div className="header">
            <h1>Weather App</h1>
            <div>
              <input
                className="input"
                type="search"
                value={search}
                onChange={(event) => {
                  setsearch(event.target.value);
                }}
              />
            </div>
          </div>
          {!city.main ? <p>no data found</p> : null}
          <div className="text">
            <h1>
              <i className="fa-solid fa-street-view"></i>
              {search}
            </h1>
          </div>
          {city.main && (
            <div>
              <h2 className="temp">{main.temp}</h2>
              <h3 className="tempmin_max">
                Min : <b>{main.temp_min}</b> | Max : <b>{main.temp_max}</b>
              </h3>
            </div>
          )}
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default App;
