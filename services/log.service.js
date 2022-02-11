import chalk from "chalk";
import dedent from "dedent-js";
import { windRosify } from "../helpers/winds.js";

export const printError = (error) => {
  console.log(`${chalk.bgRed.black.bold(" ERROR ")}: ${error}`);
};

export const printSuccess = (message) => {
  console.log(`${chalk.bgGreen.black.bold(" SUCCESS ")}: ${message}`);
};

export const printHelp = () => {
  console.log(
    dedent(`

    ${chalk.bgYellowBright.black.bold(" HELP ")}

    No params - shows weather
    -c [CITY] sets city (words in a city name should be separated by _)
    -h calls help
    -t [API_KEY] sets token

    `)
  );
};

export const printForecast = async (forecast) => {
  const {
    weather: [{ description, icon }],
    name,
    sys: { country },
    wind: { speed, deg },
    main: { temp, feels_like, pressure, humidity },
  } = forecast;

  console.log(
    dedent(`

    ${chalk.bgBlue.black.bold(" WEATHER ")}

      Today in ${name}, ${country} - ${description}
      Temperature: ${Math.round(temp)} degrees Celsius (feels like ${Math.round(feels_like)} degrees Celsius)
      Pressure: ${pressure} hPa
      Humidity: ${humidity} %
      Wind speed: ${Math.round(speed)} meter/sec
      Wind direction: ${deg} degrees / ${windRosify(deg).short} (${windRosify(deg).long})

    `)
  );
};
