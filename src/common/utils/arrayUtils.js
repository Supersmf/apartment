import { isObjectsEqual } from './objectUtils';

export const isArraysEqual = (firstArray, secondArray) =>
  firstArray.length === secondArray.length &&
  firstArray.every((item, idx) =>
    typeof item === 'object' && typeof secondArray[idx] === 'object'
      ? isObjectsEqual(item, secondArray[idx])
      : item === secondArray[idx],
  );
