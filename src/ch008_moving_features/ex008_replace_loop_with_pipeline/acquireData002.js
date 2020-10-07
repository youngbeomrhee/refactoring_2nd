function acquireData(input) {
  const lines = input.split("\n");
  // slice 함수로 대체
  // let firstLine = true;
  const result = [];
  // 루프 변수 만들기
  // 첫 번째 줄을 건너 뛰기 위해 slice
  const loopItems = lines.slice(1);
  for (const line of loopItems) {
    /* slice 함수로 대체
    if (firstLine) {
      firstLine = false;
      continue;
    }
    */
    if (line.trim() === "") continue;
    const record = line.split(",");
    if (record[1].trim() === "India") {
      result.push({city: record[0].trim(), phone: record[2].trim()});
    }
  }
  return result;
}

module.exports = {acquireData}
