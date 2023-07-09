import { ANIMAL_NAMES } from "../constants/names.js";
import { PREFIX } from "../constants/prefix.js";

const generateRandomNumber = () => {
  const nameCount = ANIMAL_NAMES.length;
  const prefixCount = PREFIX.length;

  const nameIndex = (Date.now() * 17) % nameCount;
  const prefixIndex = (Date.now() * 23) % prefixCount;

  return { nameIndex, prefixIndex };
};

export const pickAnimal = () => {
  const { nameIndex } = generateRandomNumber();

  return ANIMAL_NAMES[nameIndex];
};

export const pickPrefix = () => {
  const { prefixIndex } = generateRandomNumber();

  return PREFIX[prefixIndex];
};
