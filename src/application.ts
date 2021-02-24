import getRandomArray from "./utils/getRandomArray";
import getRandomInt from "./utils/getRandomInt";

const comparator: { [index: number]: (a: number, b: number) => any } = {
  0: (a, b) => a - b,
  1: (a, b) => b - a,
};

export default (n: number) => {
  const result: number[][] = [];
  const minArraySize = 1;
  const existingArraySizes: number[] = [];

  let newArraySize: number;
  for (let i = 1; i <= n; i++) {
    do {
      newArraySize = getRandomInt(minArraySize, n);
    } while (existingArraySizes.includes(newArraySize));

    const newArray = getRandomArray(newArraySize);
    result.push(newArray);
    existingArraySizes.push(newArraySize);
  }

  return result.map((array, i) => array.sort(comparator[(i + 1) % 2]));
};
