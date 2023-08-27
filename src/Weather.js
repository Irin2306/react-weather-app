import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary"/>
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
                <img src="data:image/jpeg;base64,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" alt="Mostly Cloudy"/>
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