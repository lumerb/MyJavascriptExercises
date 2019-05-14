var spinalCase = require("./spinalCase");

describe("spinalCase", () => {
  it("converts string to-spinal-case-like-this", () => {
    expect(spinalCase("I studied hard")).toEqual("i-studied-hard");
  });

  it("converts upper case to lower case letters", () => {
    expect(spinalCase("The Internet Is Full ofLearningMaterials")).toEqual(
      "the-internet-is-full-of-learning-materials"
    );
  });
});
