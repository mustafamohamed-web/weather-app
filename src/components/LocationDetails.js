import React from "react";
import PropType from "prop-types";
import "../styles/LocationDetails.css";

const locationDetails = (props) => {
  const { city, country } = props;
  return (
    <h1 className="header">
      {city}, {country}
    </h1>
  );
};

locationDetails.propType = {
  city: PropType.string.isRequired,
  country: PropType.string.isRequired,
};

export default locationDetails;
