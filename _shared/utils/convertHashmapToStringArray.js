export default function convertHashmapToStringArray(obj) {
  return Object.keys(obj).filter((key) => obj[key]).map((key) => key);
}
