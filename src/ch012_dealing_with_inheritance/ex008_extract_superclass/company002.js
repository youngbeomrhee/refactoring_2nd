// 빈 클래스를 만들고, 두 클래스가 이를 확장하도록 한다
class Party {
  constructor(name) {
    // 필드 올리기
    this._name = name;
  }
  get name() {return this._name;}
}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    // super();
    super(name);
    this._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }
  get monthlyCost() {return this._monthlyCost;}
  // get name() {return this._name;}
  get id() {return this._id;}
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party{
  constructor(name, staff){
    // super();
    super(name);
    this._name = name;
    this._staff = staff;
  }
  get staff() {return this._staff.slice();}
  // get name() {return this._name;}
  get totalMonthlyCost() {
    return this.staff
    .map(e => e.monthlyCost)
    .reduce((sum, cost) => sum + cost);
  }
  get headCount() {
    return this.staff.length;
  }
  get totalAnnualCost() {
    return this.totalMonthlyCost * 12;
  }
}

module.exports = {Employee, Department}