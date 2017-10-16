import { assert } from "chai";
import ElapsedTimeCheck from "../../src/check/ElapsedTimeCheck";

describe("ElapsedTimeCheck", () => {

  const sut = new ElapsedTimeCheck();

  describe("check", () => {

    it("should return true when elapsed time is below 200", () => {
      assert.isTrue(sut.check({
        elapsedTime: 100,
      }));
    });

    it("should return false when elapsed time equals 200", () => {
      assert.isFalse(sut.check({
        elapsedTime: 200,
      }));
    });

    it("should return false when elapsed time is above 200", () => {
      assert.isFalse(sut.check({
        elapsedTime: 300,
      }));
    });
  });
});
