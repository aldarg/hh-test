import getArrays from "./application";
import readlineSync from "readline-sync";

export default () => {
  const n = readlineSync.question("Welcome, friend! Enter your number: ");
  console.log(getArrays(Number(n)));
};
