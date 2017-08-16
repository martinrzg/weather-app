import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import thunderstorm from '../images/Thunderstorm.png'
import drizzle from '../images/Drizzle.png'
import rain from '../images/Rain.png'
import snow from '../images/Snow.png'
import atmosphere from '../images/Atmosphere.png'
import clear from '../images/Clear.png'
import clouds from '../images/Cloudy.png'
import extreme from '../images/Extreme.png'
import defaultIcon from '../images/Partly-cloudy.png'




const styleSheet = createStyleSheet({
  flex: {
      display: 'flex',
   },
   root: {
     marginRight: 32,
   },
 });
function CurrentWeather(props) {
  const classes = props.classes
  const result = props.data

  var weather = result.weather[0].main
  let weatherIcon

  switch(weather) {
    case 'Thunderstorm':
        weatherIcon = thunderstorm
        break
    case 'Drizzle':
        weatherIcon = drizzle
        break
    case 'Rain':
        weatherIcon = rain
        break
    case 'Snow':
        weatherIcon = snow
        break
    case 'Atmosphere':
        weatherIcon = atmosphere
        break
    case 'Clear':
        weatherIcon = clear
        break
    case 'Clouds':
        weatherIcon = clouds
        break
    case 'Extreme':
        weatherIcon = extreme
        break
    default:
      weatherIcon = defaultIcon
}

const currentTemp = Math.round(result.temp.day)

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <img src={`${weatherIcon}`} alt="WeatherIcon" />
        <Typography type="display4"  >
          {`${currentTemp}°`}
        </Typography>
      </div>
    </div>
  );
}

CurrentWeather.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(CurrentWeather)
