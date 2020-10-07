function acquireData(input) {
  const lines = input.split("\n");
  const result = [];
  const loopItems = lines
    .slice(1)
    .filter(line => line.trim() !== "")
    .map(line => line.split(','))
    .filter(record => record[1].trim() === "India")
    .map(record => ({city: record[0].trim(), phone: record[2].trim()}))
  ;
  for (const line of loopItems) {
    const record = line;
    // 결과 레코드를 map 함수로 대체
    result.push(line);
  }
  return result;
}

module.exports = {acquireData}
