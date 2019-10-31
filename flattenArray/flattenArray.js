const flattenArray = (arr)=>{

  let newArray = [].concat(...arr)

    if(newArray.some(Array.isArray)){
      return flattenArray(newArray);
    }else{
      return newArray
    }
}

module.exports = flattenArray;
