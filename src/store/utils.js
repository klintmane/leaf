const isArray = Array.isArray;
const isPlainObj = o => o && o.constructor === Object;

const stripQuotes = str => str.replace(/['"`]/g, "");

export const parsePath = (path = "") =>
  path
    .split(/[.\[\]]/)
    .filter(key => !!key)
    .map(key => (isNaN(key) ? stripQuotes(key) : parseInt(key)));

export const get = (obj, path, defaultValue) =>
  parsePath(path).reduce((val, key) => (val ? val[key] : defaultValue), obj);

export const set = (obj, path, value) =>
  parsePath(path).reduce((result, key, i, parsed) => {
    if (i < parsed.length - 1) {
      const nextKey = parsed[i + 1];
      const currentVal = result[key];

      const objVal = isPlainObj(currentVal) ? currentVal : {};
      const arrVal = isArray(currentVal) ? currentVal : [];

      result[key] = typeof nextKey === "number" ? arrVal : objVal;
      return result[key];
    }

    result[key] = value;
    return obj;
  }, obj);

export const contains = (a, b) => {
  for (let i = 0; i < b.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};
