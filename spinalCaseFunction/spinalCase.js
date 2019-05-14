//function that takes str : String type and converts it to lowercase separated by dashes.
const spinalCase = str => {
  let cleanStr = str.replace(/([a-z])([A-Z])/g, "$1 $2"); //clean strings without spaces
  let tempRegEx = /\s|\_|-/g; //regex to use in splitting to turn the str into an array
  let outputStr = cleanStr
    .toLowerCase()
    .split(tempRegEx)
    .join("-"); //convert to lower case, splitting making an array and finally join

  return outputStr;
};

module.exports = spinalCase;
