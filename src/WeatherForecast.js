import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "5da7b2dc058f07286fea39c4cee516a3";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <img src={props.data.iconUrl} alt={props.data.description}/>
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">19°C</span>
                        <span className="WeatherForecast-temperature-min">10°C</span>
                    </div>
                </div>
            </div>
        </div>
    );
}