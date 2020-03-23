export const isObjectsEqual = (firstObject, secondObject) =>
  Object.keys(firstObject).length === Object.keys(secondObject).length &&
  Object.keys(firstObject).every(p => firstObject[p] === secondObject[p]);
