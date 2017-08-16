import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, {  CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import CurrentWeather from './CurrentWeather'
import WeatherDetails from './WeatherDetails'
import WeeklyWeather from './WeeklyWeather'

const styleSheet = createStyleSheet(theme => ({
  card: {
    minWidth: 275,
    marginBottom: 16,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  flex: {
      display: 'flex',
      flexWrap: 'wrap'
   },
}));

function SimpleCard(props) {
  const classes = props.classes;
  const result = props.data
  const cityName = result.city.name
  const country = result.city.country
  const today = new Date(result.list[0].dt * 1000)
  const weatherDescription = capitalizeFirstLetter( result.list[0].weather[0].description )
  const now = new Date()

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>

          <Typography type="display3"   >
          {`${cityName}, ${country}`}
          </Typography>
          <Typography type="display1"  >
            {`${today.toDateString()}, ${now.toLocaleTimeString()}`}
          </Typography>
          <Typography type="display1"  >
            {weatherDescription}
          </Typography>
          <div className={classes.flex}>
            <CurrentWeather data= {result.list[0]}/>
            <WeatherDetails data= {result.list[0]}/>
          </div>
          <div>
          <WeeklyWeather data={result.list}/>
          </div>
          


        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleCard);
