var sumAllPrime = require("./sumAllPrime")

describe("SUM ALL PRIMES",()=>{
  it('sums all primes',()=>{
    expect(sumAllPrime(977)).toEqual(73156);
  })
  it('returns a number',()=>{
    expect(sumAllPrime(10)).toEqual(17);
  })
})
