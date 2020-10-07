// 알고리즘 교체하기
function youngestAge(people) {
  return Math.min(...people.map(p => p.age));
}

// 반복문을 파이프라인으로 바꾸기
function totalSalary(people) {
  return people.reduce((total, p) => total + p.salary, 0);
}

function report(people) {
  return `youngestAge: ${youngestAge(people)}, totalSalary: ${totalSalary(people)}`;
}

module.exports = {report}