import { customAlphabet } from "nanoid";

// String
export const getRandomText = () =>
  customAlphabet("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 16)();

// Number
export const radianToDegree = (radian: number) => radian * (180 / Math.PI);

export const degreeToRadian = (degree: number) => degree * (Math.PI / 180);

export const round = (number: number, fractionDigits = 0) => {
  const digit = Math.pow(10, fractionDigits);
  return Math.round(number * digit) / digit;
};
