import { pickAnimal, pickPrefix } from "./utils/picker.js";

export const getName = () => {
    return pickPrefix() + " " + pickAnimal();
};
