import React from "react";
import CurrentDate from "./CurrentDate.js"

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul>
                <li><CurrentDate date={props.data.date}/></li>
                <li>{props.data.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="row mt-3">
                        <div className="col-6">
                            <img src={props.data.iconUrl} alt={props.data.description} width="90" className="float-left" />
                        </div>
                        <div className="col-6">
                            <span className="temperature">{Math.round(props.data.temperature)}</span>
                            <span className="unit">℃</span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}