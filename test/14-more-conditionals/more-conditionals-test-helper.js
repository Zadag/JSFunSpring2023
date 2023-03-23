import { getAnswer } from "../getAnswer.js";

const isEvenOrOddStr = getAnswer(
  "../exercises/14-more-conditionals/01-ternary-operator.js"
);

const errorMessageStr = getAnswer(
  "../exercises/14-more-conditionals/02-short-circuiting.js"
);

export const isEvenOrOdd = eval(`(num) => {
  ${isEvenOrOddStr}
  return isEvenOrOdd;
}`);

export const getErrorMessage = eval(`(error) => {
  ${errorMessageStr}
  return errorMessage;
}`);
