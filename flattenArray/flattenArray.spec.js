var flattenArray = require("./flattenArray");

describe("Flatten Nested Arrays",()=>{
  it("flattens nested arrays",()=>{
    expect(flattenArray([1,[1]])).toEqual([1,1])
  });
  it("flattens nested arrays",()=>{
    expect(flattenArray([1,[1],[[[3]]]])).toEqual([1,1,3])
  });
})
