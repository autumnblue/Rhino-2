export default function mapArrayToObject(arr, value) {
  if (arr === null) {
    return null;
  }
  const ret = {};
  arr.forEach((e) => {
    ret[e] = value;
  });
  return ret;
}
