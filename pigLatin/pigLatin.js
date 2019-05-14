// pigLatin is a made up language of transferring the first consonants of the word and
// placing it at the end of the word adding 'ay', in the case that the first letters
// of the word are vowels, just add 'way' at the end of the word

const pigLatin = str => {
  let findRegEx = /^[bcdfghjklmnpqrstvwxyz]{1,}/i; //regex to find the first consonants
  let consonant = str.match(findRegEx); //if the regex matches

  if (consonant != null) {

    return str.slice(consonant[0].length, str.length).concat(consonant[0], "ay").toLowerCase();

  } else {

    return str.concat('way');

  }
};

module.exports = pigLatin;
