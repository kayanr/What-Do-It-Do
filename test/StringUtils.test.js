const StringUtils = require("../js/StringUtils");

require("../js/StringUtils");

test("String Tool 1 Test 1", () => {
  let strUtil = new StringUtils();

  let expected = 4;

  let actual = strUtil.strTool01("auspice");

  expect(actual).toEqual(expected);
});

test("String Tool 1 Test 2", () => {
  let strUtil = new StringUtils();

  let expected = 3;

  let actual = strUtil.strTool01("Vulgate");

  expect(actual).toEqual(expected);
});

test("String Tool 1 Test 3", () => {
  let strUtil = new StringUtils();

  let expected = 4;

  let actual = strUtil.strTool01("Simpatico");

  expect(actual).toEqual(expected);
});

test("String Tool 1 Test 4", () => {
  let strUtil = new StringUtils();

  let expected = 7;

  let actual = strUtil.strTool01("Amuse-gueule");

  expect(actual).toEqual(expected);
});

test("String Tool 2 Test 1", () => {
  let strUtil = new StringUtils();

  let expected = "Resistance Is Futile";

  let actual = strUtil.strTool02("resistance is futile");

  expect(actual).toEqual(expected);
});

test("String Tool 2 Test 2", () => {
  let strUtil = new StringUtils();

  let expected = "To The Batmobile";

  let actual = strUtil.strTool02("To the batmobile");

  expect(actual).toEqual(expected);
});
