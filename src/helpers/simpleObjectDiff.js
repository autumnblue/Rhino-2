export default function simpleObjectDiff(source, target) {
  const result = {};

  for (const [key, value] of Object.entries(source)) {
    if (value !== target[key]) {
      result[key] = value;
    }
  }

  return result;
}
