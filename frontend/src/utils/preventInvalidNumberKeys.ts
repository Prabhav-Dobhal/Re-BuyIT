import { KeyboardEvent } from "react";
//for preventing invalid number keys
export const preventInvalidNumberKeys = (e: KeyboardEvent<HTMLInputElement>) => {
  const invalidKeys = ["e", "E", "+", "-"];
  if (invalidKeys.includes(e.key)) {
    e.preventDefault();
  }
};
