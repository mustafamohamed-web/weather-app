import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  return (
    <div className="forecast-details">
      <div className="forecast_details-date">
        {moment(forecast.date).format("ddd Do MMM")}{" "}
      </div>
      <div className="forecast_details-temperature">
        <span className="forecast-details_boldText">Max Temperature:</span>{" "}
        <span>{forecast.temperature.max}</span>
      </div>
      <div className="forecast_details-temperature">
        <span className="forecast-details_boldText">Min Temperature:</span>
        <span>{forecast.temperature.min}</span>
      </div>
      <div className="forecast_details-humidity">
        <span className="forecast-details_boldText">Humidity:</span>
        <span>{forecast.humidity}%</span>
      </div>
      <div className="forecast_details-wind">
        <span className="forecast-details_boldText">Wind:</span>
        <span>{forecast.wind.speed}mph</span>
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.number,
    }).isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
  }).isRequired,
};

export default ForecastDetails;
