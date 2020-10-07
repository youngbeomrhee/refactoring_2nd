function acquireData(input) {
  const lines = input.split("\n");
  // const result = [];
  // const loopItems = lines
  const result = lines
    .slice(1)
    .filter(line => line.trim() !== "")
    .map(line => line.split(','))
    .filter(record => record[1].trim() === "India")
    .map(record => ({city: record[0].trim(), phone: record[2].trim()}))
  ;
  /*
  for (const line of loopItems) {
    const record = line;
    result.push(line);
  }
  */
  return result;
}

module.exports = {acquireData}
