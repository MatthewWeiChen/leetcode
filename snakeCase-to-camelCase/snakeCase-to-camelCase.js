function toSnakeCase(str) {
  let snakeCaseStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      snakeCaseStr += "_" + str[i].toLowerCase();
    } else {
      snakeCaseStr += str[i];
    }
  }
  return snakeCaseStr;
}

function toCamelCase(str) {
  let camelCaseStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") {
      i++;
      camelCaseStr += str[i].toUpperCase();
    } else {
      camelCaseStr += str[i];
    }
  }
  return camelCaseStr;
}
