import getArrays from "../src/getArrays";

test("test 1", () => {
  const arr = getArrays(3);
  console.log(arr);
  expect(arr.length).toBe(3);
});
