const analyze = (arr) => {
  let min = arr[0] || 0;
  let max = arr[0] || 0;
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (min > arr[i]) {
      min = arr[i];
    } else if (max < arr[i]) {
      max = arr[i];
    }
    total += arr[i];
  }
  const { length } = arr;
  const average = total / length || 0;
  return {
    average,
    min,
    max,
    length,
  };
};

module.exports = analyze;