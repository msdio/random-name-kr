import { pickAnimal, pickPrefix } from "./utils/picker.mjs";

export const getName = () => {
  return pickPrefix() + " " + pickAnimal();
};

console.log(getName());
