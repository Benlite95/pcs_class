import { Component } from 'react'
import './App.css'
import WeatherDetails from './WeatherDetails';

export default class App extends Component {
  state = {
    zip: ''
  };

  async getWeather(zip) {
    const appid = '4d940566413cbb48ddbe156f2b502364';
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${/*this.state.*/zip},US&appid=${appid}&units=imperial&lang=he`);

      const weatherData = await response.json();

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText} - ${weatherData.message}`);
      }

      console.log(weatherData);

      this.setState({
        weather: {
          location: weatherData.name,
          temperature: weatherData.main.temp,
          description: weatherData.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
        }
      });
    } catch (e) {
      console.error(e);

      this.setState({
        error: e.message
      });
    }
  }

  /*componentDidMount() {
    setTimeout(() => {
      this.getWeather();
    }, 5000);
  }*/

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.zip);

    if (this.state.zip.length === 5 && prevState.zip !== this.state.zip) {
      this.getWeather(this.state.zip);
    }
  }

  zipChanged = /*async*/ e => {
    /*await*/ this.setState({
      zip: e.target.value
    });

    /*console.log(e.target.value, this.state.zip);

    if (this.state.zip.length === 5) {
      this.getWeather(this.state.zip);
    }*/
  }

  render() {
    // console.log('in render', this.state);
    const { /*zip,*/ weather, error } = this.state;

    return (
      <div className="container text-center">
        <div className="row justify-content-end">
          <div className="col-6 col-md-3">
            <input className="form-control" id="zip" placeholder="enter US zip code" value={this.state.zip} onChange={this.zipChanged}/>
          </div>
        </div>

        <WeatherDetails weather={weather} error={error}/>
      </div>
    );
  }
}
