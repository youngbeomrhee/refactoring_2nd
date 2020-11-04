function findMiscreant (people) {
  for (const p of people) {
    if (p === "Don") {
      return "Don";
    }
    if (p === "John") {
      return "John";
    }
  }
  return "";
}

// 알고리즘 교체하기를 통해 중복을 제거한다
function alertForMiscreant (people) {
  if(findMiscreant(people) !== "") setOffAlarms();
}

function setOffAlarms() {
  console.log('Alarms are off');
}

module.exports = {alertForMiscreant, findMiscreant}