const convertHTML = (str) =>{
  let newStr = str;
  let regex = /\&|\<|\>|\"|'/g;

  try {
    str.match(regex).map((match)=>{
      let toReplace;
      if(match === '&'){
        toReplace = '&amp;'
      }else if(match === '<'){
        toReplace = "&lt;"
      }else if(match === '>'){
        toReplace = "&gt;"
      }else if(match === '"'){
        toReplace = "&quot;"
      }else if(match === "'"){
        toReplace = "&apos;"
      }
        newStr = newStr.replace(match,toReplace)
    })
  }catch(err){
    console.log(err)
  }
//I am just trying to use try and catch error in this exercise
  return newStr;
}

module.exports = convertHTML;
