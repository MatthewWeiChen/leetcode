function birthdayCakeCandles(candles) {
  const sortedCandles = candles.sort((a, b) => a - b);
  let candleCount = 1;
  for (let i = sortedCandles.length - 2; i >= 0; i--) {
    if (sortedCandles[i] < sortedCandles[sortedCandles.length - 1]) {
      return candleCount;
    }
    if (sortedCandles[i] === sortedCandles[sortedCandles.length - 1]) {
      candleCount++;
    }
  }
  return candleCount;
}

function birthdayCakeCandles(n, ar) {
  // Complete this function
  var max = Math.max(...ar);
  var result = ar.filter((c) => c === max);
  return result.length;
}
