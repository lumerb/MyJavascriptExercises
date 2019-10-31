const sumOddFibonacci = (num) =>{
  let sum;
  let fibArr = [0];
  let prevNum = 0;
  let nextNum = 1;
  let currNum = 1;

  while(nextNum <= num){
    fibArr.push(currNum);
    currNum = nextNum + prevNum;
    prevNum = nextNum;
    nextNum = currNum;
  }

  sum = fibArr.reduce((acc, n) => {

    if(n%2!=0){
      return acc + n
    }else{
      return acc
    }

  })

  return sum
}

module.exports = sumOddFibonacci
