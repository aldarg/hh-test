import getRandomArray from "./utils/getRandomArray";
import getRandomInt from "./utils/getRandomInt";

const compare: { [index: number]: (a: number, b: number) => any } = {
  0: (a, b) => a - b,
  1: (a, b) => b - a,
};

export default (n: number) => {
  const result: number[][] = [];
  const minArraySize = 1;
  const arraySizes: number[] = [];

  let size: number;
  for (let i = 1; i <= n; i++) {
    do {
      size = getRandomInt(minArraySize, n);
    } while (arraySizes.includes(size));

    const arr = getRandomArray(size);
    result.push(arr);
    arraySizes.push(size);
  }

  return result.map((arr, i) => arr.sort(compare[i % 2]));
};
