import { assert } from "chai";
import StatusCodeCheck from "../../src/check/StatusCodeCheck";

describe("StatusCodeCheck", () => {

  const sut = new StatusCodeCheck();

  describe("check", () => {

    it("should return true when status code equals or is above 200, but below 300", () => {
      assert.isTrue(sut.check({
        statusCode: 200,
      }));
      assert.isTrue(sut.check({
        statusCode: 202,
      }));
    });

    it("should return false when status code is 300 or above", () => {
      assert.isFalse(sut.check({
        statusCode: 300,
      }));
      assert.isFalse(sut.check({
        statusCode: 400,
      }));
      assert.isFalse(sut.check({
        statusCode: 500,
      }));
    });

    it("should return false when status code is above below 200", () => {
      assert.isFalse(sut.check({
        statusCode: 100,
      }));
    });
  });
});
