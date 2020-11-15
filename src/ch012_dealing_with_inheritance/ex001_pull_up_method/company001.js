class Party {
}

class Employee extends Party {
  constructor(salary) {
    super();
    this.salary = salary;
  }
  // ...
  get monthlyCost() {
    return this.salary + this.salary * 0.05;
  }
  // 같은 일을 수행하는 메서드
  get annualCost() {
    return this.monthlyCost * 12;
  }
  // ...
}

class Department extends Party {
  constructor(budget) {
    super();
    this.budget = budget;
  }
  // ...
  get monthlyCost() {
    return this.budget / 12 - this.budget * 0.03;
  }
  // 같은 일을 수행하는 메서드
  get totalAnnualCost() {
    return this.monthlyCost * 12;
  }
  // ...
}

module.exports = {Employee, Department}
