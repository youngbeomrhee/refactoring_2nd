function youngestAge(people) {
  let youngest = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
  }
  return youngest;
}

function totalSalary(people) {
  let totalSalary = 0;
  for (const p of people) {
    totalSalary += p.salary;
  }
  return totalSalary;
}

function report(people) {
  // 문장 슬라이드 후 반복문을 함수로 추출
  // 인라인하기
  return `youngestAge: ${youngestAge(people)}, totalSalary: ${totalSalary(people)}`;
}

module.exports = {report}