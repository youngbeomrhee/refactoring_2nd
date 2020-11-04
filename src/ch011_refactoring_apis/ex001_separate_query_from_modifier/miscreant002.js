// 함수를 복제하고 질의 목적에 맞는 이름짓기
function findMiscreant (people) {
  for (const p of people) {
    if (p === "Don") {
      // 부수효과를 낳는 부분을 제거
      // setOffAlarms();
      return "Don";
    }
    if (p === "John") {
      // 부수효과를 낳는 부분을 제거
      // setOffAlarms();
      return "John";
    }
  }
  return "";
}

// 변경 함수에서 질의 관련 코드를 없앤다
function alertForMiscreant (people) {
  for (const p of people) {
    if (p === "Don") {
      setOffAlarms();
      return;
    }
    if (p === "John") {
      setOffAlarms();
      return;
    }
  }
  return "";
}

function setOffAlarms() {
  console.log('Alarms are off');
}

module.exports = {alertForMiscreant, findMiscreant}