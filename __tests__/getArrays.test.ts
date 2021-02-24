import getArrays from "../src/application";

test("arrays count", () => {
  const arr = getArrays(3);
  expect(arr.length).toBe(3);
});

test("unique arrays' lengths", () => {
  const arr = getArrays(100);
  const lengths = arr.map((arr) => arr.length);
  const uniqueLengths = lengths.filter(
    (value, i, arr) => arr.indexOf(value) === i
  );

  expect(uniqueLengths.length).toBe(lengths.length);
});

test("sorting", () => {
  const result = getArrays(10);
  const isCorrectSorting = result.reduce((acc, arr, i) => {
    if (!acc) {
      return acc;
    }

    if ((i + 1) % 2 === 1) {
      for (let j = 1; j < arr.length; j++) {
        if (arr[j] > arr[j - 1]) {
          return false;
        }
      }

      return true;
    } else {
      for (let j = 1; j < arr.length; j++) {
        if (arr[j] < arr[j - 1]) {
          return false;
        }
      }

      return true;
    }
  }, true);

  expect(isCorrectSorting).toBeTruthy;
});
