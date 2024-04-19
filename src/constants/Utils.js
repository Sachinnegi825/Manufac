export function calculateMean(numbers) {
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return parseFloat((sum / numbers.length).toFixed(3));
}

export function calculateMode(numbers) {
  if (numbers.length === 0) return null;

  const counts = {};
  let mode = numbers[0];
  let maxCount = 1;

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > maxCount) {
      mode = num;
      maxCount = counts[num];
    }
  }

  return parseInt(mode);
}

export function calculateMedian(numbers) {
  const sorted = numbers.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  } else {
    return sorted[middleIndex];
  }
}

export default function CalculateData(dataSet) {
  const mean = calculateMean(dataSet);
  const median = calculateMedian(dataSet);
  const mode = calculateMode(dataSet);

  return { mean, median, mode };
}
