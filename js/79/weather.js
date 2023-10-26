
/*global $*/
(function () {
  'use strict';

  const appid = '4d940566413cbb48ddbe156f2b502364';

  const zipInput = $('#zip');
  const locationElem = $('#location');
  const tempElem = $('#temp');
  const descriptionElem = $('#description');
  const iconElem = $('#icon');
  const hasWeather = $('.has-weather');
  const noWeather = $('.no-weather');
  const errorElem = $('#error');

  zipInput.change(async () => {
    /*try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipInput.val()},US&appid=${appid}&units=imperial&lang=he`);

      const weatherData = await response.json();

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText} - ${weatherData.message}`);
      }

      noWeather.hide();
      hasWeather.show();

      locationElem.text(weatherData.name);
      tempElem.text(weatherData.main.temp);
      descriptionElem.text(weatherData.weather[0].description);
      iconElem.attr('src', `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`);
    } catch(e) {
      errorElem.text(e.message);
    }*/

    let theResponse;
    await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipInput.val()},US&appid=${appid}&units=imperial&lang=he`)
      .then(response => {
        theResponse = response;
        return response.json();
      })
      .then(weatherData => {
        if (!theResponse.ok) {
          throw new Error(`${theResponse.status} ${theResponse.statusText} - ${weatherData.message}`);
        }

        noWeather.hide();
        hasWeather.show();

        locationElem.text(weatherData.name);
        tempElem.text(weatherData.main.temp);
        descriptionElem.text(weatherData.weather[0].description);
        iconElem.attr('src', `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`);
      })
      .catch(e => errorElem.text(e.message));
  });
}());
