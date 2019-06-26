import "jest";
import {splitByIndex, splitByIndexLeft} from "./utils";

describe("splitByIndex", () => {
  it("should split input string into two", () => {
    expect(splitByIndex("abcdefghijk", 3)).toEqual(["abc", "defghijk"]);
  });
});

describe("splitByIndexLeft", () => {
  it("should split input string into two (left)", () => {
    expect(splitByIndexLeft("abcdefghijk", 3)).toEqual(["abcdefgh", "ijk"]);
  });
});
