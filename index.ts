import { pickAnimal, pickPrefix } from "./src/utils/picker.js";

export const getName = () => {
  return pickPrefix() + " " + pickAnimal();
};
