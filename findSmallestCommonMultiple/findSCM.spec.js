var findSCM = require("./findSCM");

describe("Smallest Common Multiple",()=>{
  it("finds the smallest common multiple",()=>{
    expect(findSCM([1,5])).toEqual(60)
  });
  it("finds the smallest common multiple",()=>{
    expect(findSCM([5,1])).toEqual(60)
  });
  it("finds the smallest common multiple",()=>{
    expect(findSCM([2,10])).toEqual(2520)
  });
  it("finds the smallest common multiple",()=>{
    expect(findSCM([1,13])).toEqual(360360)
  });
  it("finds the smallest common multiple",()=>{
    expect(findSCM([23,18])).toEqual(6056820)
  });

})
