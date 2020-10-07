function acquireData(input) {
  const lines = input.split("\n");
  const result = [];
  const loopItems = lines
    .slice(1)
    .filter(line => line.trim() !== "")
    .map(line => line.split(','))
    .filter(record => record[1].trim() === "India")
  ;
  for (const line of loopItems) {
    // 빈 줄을 제거하는 로직을 filter함수로 대체
    // if (line.trim() === "") continue;

    // map함수로 대체
    // const record = line.split(",");
    const record = line;

    // filter함수로 대체
    // if (record[1].trim() === "India") {
      result.push({city: record[0].trim(), phone: record[2].trim()});
    // }
  }
  return result;
}

module.exports = {acquireData}
