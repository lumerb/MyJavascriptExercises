const compare = (arr1, arr2) => {
  let newArray = []

  newArray = arr1.filter(x => !arr2.includes(x));
  newArray = [...newArray, ...arr2.filter(x=>!arr1.includes(x))] 
  
  return newArray
}
const findSymmetricalDifference = (...args) => {
  let newArray = args.reduce(compare).sort()
  newArray = newArray.filter((x,y,arr)=>{
    return arr.indexOf(x) === y;
  })
  return newArray;

}

module.exports = findSymmetricalDifference;
console.log(findSymmetricalDifference([1,2,3],[2,3,5]));