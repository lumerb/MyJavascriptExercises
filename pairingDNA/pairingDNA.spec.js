var pairingDNA = require('./pairingDNA');

describe("pairingDNA",()=>{
  it("pairs DNA",()=>{
    expect(pairingDNA("ATCGA")).toEqual([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
  })
  it("pairs DNA",()=>{
    expect(pairingDNA("CTCTA")).toEqual([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]);
  })
  it("pairs DNA",()=>{
    expect(pairingDNA("GTCGA")).toEqual([["G","C"],["T","A"],["C","G"],["G","C"],["A","T"]]);
  })


})
