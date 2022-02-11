export const windRosify = (dirDegrees) => {
  let dirCardinal = {};

  switch (Math.round(dirDegrees / 22.5)) {
    case 0:
      dirCardinal = { short: "N", long: "North" };
      break;
    case 1:
      dirCardinal = { short: "NNE", long: "North North East" };
      break;
    case 2:
      dirCardinal = { short: "NE", long: "North East" };
      break;
    case 3:
      dirCardinal = { short: "ENE", long: "East North East" };
      break;
    case 4:
      dirCardinal = { short: "E", long: "East" };
      break;
    case 5:
      dirCardinal = { short: "ESE", long: "East South East" };
      break;
    case 6:
      dirCardinal = { short: "SE", long: "South East" };
      break;
    case 7:
      dirCardinal = { short: "SSE", long: "South South East" };
      break;
    case 8:
      dirCardinal = { short: "S", long: "South" };
      break;
    case 9:
      dirCardinal = { short: "SSW", long: "South South West" };
      break;
    case 10:
      dirCardinal = { short: "SW", long: "South West" };
      break;
    case 11:
      dirCardinal = { short: "WSW", long: "West South West" };
      break;
    case 12:
      dirCardinal = { short: "W", long: "West" };
      break;
    case 13:
      dirCardinal = { short: "WNW", long: "West North West" };
      break;
    case 14:
      dirCardinal = { short: "NW", long: "North West" };
      break;
    case 15:
      dirCardinal = { short: "NNW", long: "North North West" };
      break;
    default:
      dirCardinal = { short: "N/A", long: "Not available" };
  }

  return dirCardinal;
};
