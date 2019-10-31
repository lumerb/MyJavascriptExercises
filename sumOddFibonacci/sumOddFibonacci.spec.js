var sumOddFibonacci = require('./sumOddFibonacci')

describe("SUMS ODD FIBONACCI",()=>{
  it("sums the odd fibonacci numbers below a number",()=>{
    expect(sumOddFibonacci(10)).toEqual(10)
  })
  it("sums the odd fibonacci numbers below a number",()=>{
    expect(sumOddFibonacci(4000000)).toEqual(4613732)
  })
  it("sums the odd fibonacci numbers below a number",()=>{
    expect(sumOddFibonacci(4)).toEqual(5)
  })
  it("sums the odd fibonacci numbers below a number",()=>{
    expect(sumOddFibonacci(75025)).toEqual(135721)
  })
})
