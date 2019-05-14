/*jshint esversion: 6 */
const searchReplace = (sentence,word,replace)=>{
  let newWordArray = [];
  sentence.split(' ').map((item)=>{

    if(item == word){

      if(/[A-Z]/.test(word[0])){
          newWordArray.push(replace.charAt(0).toUpperCase().concat(replace.slice(1)));
      }else{
        newWordArray.push(replace);
      }

    }else{

      newWordArray.push(item);

    }

  });

  return newWordArray.join(' ');
};

module.exports = searchReplace;
