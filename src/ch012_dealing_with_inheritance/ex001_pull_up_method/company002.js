class SubclassResponsibilityError extends Error {
  constructor() {
    super('자식클래스에서 구현해야 될 메서드를 구현하지 않았습니다.');
  }
  get name() {
    return 'SubclassResponsibilityError';
  }
}

class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
  // 자식클래스에서 monthlyCost를 구현해야 한다는 사실을 알려준다
  get monthlyCost() {
    throw new SubclassResponsibilityError();
  }
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
  /*
  Super class로 이동시킨다
  get annualCost() {
    return this.monthlyCost * 12;
  }
  */
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
  // 두 메서드의 이름이 다르므로 함수 선언 바꾸기로 이름을 통일한다
  /* Super class로 이동시킨다
  get annualCost() {
    return this.monthlyCost * 12;
  }
  */
  // ...
}

// 필수메서드를 구현하지 않은 경우
class Company extends Party {
  constructor() {
    super();
  }
}

module.exports = {Employee, Department, Company, SubclassResponsibilityError}
