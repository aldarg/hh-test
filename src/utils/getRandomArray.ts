import getRandomInt from "./getRandomInt";

export default (size: number) => {
  const result = [];
  const multiplicator = 10;

  for (let i = 1; i <= size; i++) {
    result.push(getRandomInt(0, size * multiplicator));
  }

  return result;
};
