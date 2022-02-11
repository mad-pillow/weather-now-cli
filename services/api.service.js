import axios from "axios";
import https from "https";
import { getKeyValue } from "./storage.service.js";
import { TOKEN_DICTIONARY } from "./storage.service.js";

export const getWeather = async (city) => {
  const token = process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));

  if (!token) {
    throw new Error("API key not set. To set API key enter -t [API_KEY]");
  }

  const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: city,
      appid: token,
      lang: "en",
      units: "metric",
    },
  });
  return data;
};
