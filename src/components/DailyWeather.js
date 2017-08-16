import React from 'react';
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

 });

function DailyWeather(props){
  const result = props.data
  const date = new Date(result.dt * 1000)
  let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weather = result.weather[0].main
  let weatherIcon
  const maxTemp = Math.round(result.temp.max)
  const minTemp = Math.round(result.temp.min)


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


  return(
    <div>
      <center>
      <Typography type="display1">
        {weekday[date.getDay()]}
      </Typography>
      <img src={`${weatherIcon}`} alt="WeatherIcon" height="64" width="64" />
      <Typography type="subheading" >
        {`${maxTemp}° ${minTemp}°`}
      </Typography>
      </center>
    </div>
  )
}
export default withStyles(styleSheet)(DailyWeather)
