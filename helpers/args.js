export const getArgs = ([executer, file, ...rest]) => {
  const res = {};

  rest.forEach((value, index, array) => {
    if (value[0] === "-") {
      if (index === array.length - 1) {
        res[value.slice(1)] = true;
      } else if (array[index + 1][0] !== "-") {
        res[value.slice(1)] = array[index + 1].split("_").join(" ");
      } else {
        res[value.slice(1)] = true;
      }
    }
  });

  return res;
};
