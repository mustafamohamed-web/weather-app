import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
  onSelect,
}) => {
  return (
    <div className="forecast-summary">
      <div className="forecast-summary">
        <div className="forecast-summary__date">
          {moment(date).format("ddd Do MMM")}
        </div>
        <div className="forecast-summary__icon" data-testid="forecast-icon">
          <WeatherIcon name="owm" iconId={icon} />
        </div>
        <div className="forecast-summary__temperature">
          {temperature?.max}
          &deg;C
        </div>
        <div className="forecast-summary__description">{description}</div>
      </div>
      <button type="button" onClick={() => onSelect(date)}>
        More Details
      </button>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,

  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
