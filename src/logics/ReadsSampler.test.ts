import "jest";
import {ReadsSampler} from "./ReadsSampler";

describe("ReadsSampler", () => {
  it("should split input sequence into small 'reads'", () => {
    const sequence = "abcdefghijklmnopqrstuvwxyz";
    const random: typeof Math.random = () => 0;
    const readsSampler = new ReadsSampler(sequence, random);

    expect(readsSampler.createReads(5)).toEqual([
      "abcdefghij",
      "fghijklmno",
      "klmnopqrst",
      "pqrstuvwxy",
      "uvwxyz"
    ]);
  });

  it("should contains 'read' size randomness", () => {
    const sequence = "abcdefghijklmnopqrstuvwxyz";
    const random: typeof Math.random = () => 3;
    const readsSampler = new ReadsSampler(sequence, random);

    expect(readsSampler.createReads(5)).toEqual([
      "abcdefghijklm",
      "ijklmnopqrstu",
      "qrstuvwxyz"
    ]);
  });
});
