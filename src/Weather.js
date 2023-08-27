import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const apiKey = "5da7b2dc058f07286fea39c4cee516a3";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
            </div>
        </form>
        <h1>Lisbon</h1>
        <ul>
            <li>Wednesday 7:00</li>
            <li>Mostly cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <div className="row mt-3">
                    <div className="col-6">
                        <img src="https://editorproof.net/wp-content/uploads/2018/11/Sun-and-clouds-image.jpg" alt="Mostly Cloudy" width="90" className="float-left" />
                    </div>
                    <div className="col-6">
                        <span className="temperature">6</span>
                        <span className="unit">℃</span>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 15%</li>
                    <li>Humidity: 72%</li>
                    <li>Wind: 13km/h</li>
                </ul>
            </div>
        </div>
    </div>
    )
}