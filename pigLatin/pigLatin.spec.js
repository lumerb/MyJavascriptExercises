var pigLatin = require("./pigLatin");

describe("pigLatin", () => {
  it("transfers the first consonants to the end of the word and adds 'ay' at the end", () => {
    expect(pigLatin("poland")).toEqual("olandpay");
  });
});
