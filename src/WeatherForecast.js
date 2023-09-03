import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
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