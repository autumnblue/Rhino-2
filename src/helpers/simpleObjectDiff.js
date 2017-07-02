export default function simpleObjectDiff(source, target) {
  const result = {};

  for (const [key, value] of Object.entries(source)) {
    console.log(key, value);
    if (value !== target[key]) {
      result[key] = value;
    }
  }

  return result;
}
