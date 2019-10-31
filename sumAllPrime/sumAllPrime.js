const sumAllPrime = (num)=>{
  let sum;
  let arrPrimes = [];

  //a function that checks if the number is a prime
  const isPrime = (n)=>{

    for(let i = 2; i < n; i++){
      if(n%i==0 && n!=i){
        return false
      }
    }
    return true
  }

  if(num < 2){
    return num
  }

//loops through all the numbers less than and including the number if it is a prime,
//if it is a prime then it is added unto an array

  for(let i = 2; i<=num; i++){
    if(isPrime(i)){
      arrPrimes.push(i)
    }
  }

//using the Array.reduce() function, all numbers in the array is added
  sum = arrPrimes.reduce((acc,n)=>{
    return acc + n
  },0)

  return sum
}

module.exports = sumAllPrime
