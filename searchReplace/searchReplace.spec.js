var searchReplace = require('./searchReplace');

describe("Search and Replace",()=>{
  it("searches a word in the sentence and replace it with another word",()=>{
    expect(searchReplace("Being clever is good","clever","smarter")).toEqual("Being smarter is good");
  });
  it("also converts the first letter of the word if the word to replace starts with a capital letter",()=>{
      expect(searchReplace("My Cat is the best", "Cat","Dog")).toEqual("My Dog is the best");
  })
})
