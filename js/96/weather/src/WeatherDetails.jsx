import React from 'react';
import './WeatherDetails.css';
import PropTypes from 'prop-types'

export default function WeatherDetails(props) {
  if (props.weather) {
    const { location, icon, temperature, description } = props.weather;

    return (
      <div className="row justify-content-center">
        <div>
          The weather in {location}
        </div>
        <img id="icon" src={icon} />
        <div>
          is {temperature} and {description}
        </div>
      </div>
    );
  }
  else {
    return (<div className="row">
      <div>
        Please enter a US zip to see the weather
      </div>
      <div className="error">{props.error}</div>
    </div>);
  }
}

WeatherDetails.propTypes = {
  weather: PropTypes.shape({
    location: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  })
}
