import { getAnswer } from "../getAnswer.js";

const generateLinksStr = getAnswer(
  "../exercises/13-loops-objects/01-loop-through-object.js"
);

export const generateLinks = eval(`(links) => {
  ${generateLinksStr}
  return html;
}`);
