import React from "react";
import PropType from "prop-types";

const locationDetails = (props) => {
  const { city, country } = props;
  return (
    <h1>
      {city} {country}
    </h1>
  );
};

locationDetails.propType = {
  city: PropType.string.isRequired,
  country: PropType.string.isRequired,
};

export default locationDetails;
