#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printError, printForecast, printHelp, printSuccess } from "./services/log.service.js";
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token has not been passed");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token has been successfully saved");
  } catch (err) {
    printError(err.message);
  }
};

const saveCity = async (cityname) => {
  if (!cityname.length) {
    printError("City name has not been passed");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, cityname);
    printSuccess("City name has been successfully saved");
  } catch (err) {
    printError(err.message);
  }
};

const getForecast = async () => {
  try {
    const cityname = await getKeyValue(TOKEN_DICTIONARY.city);
    const weather = await getWeather(cityname);

    printForecast(weather);
  } catch (err) {
    if (err?.response?.status === 404) {
      printError("Passed city name is incorrect");
    } else if (err?.response?.status === 401) {
      printError("Incorrect token has been set");
    } else {
      printError(err.message);
    }
  }
};

const initCLI = async () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }

  if (args.c) {
    await saveCity(args.c);
  }

  if (args.t) {
    await saveToken(args.t);
  }

  getForecast();
};

initCLI();
