class Employee {
  constructor(name, id, monthlyCost) {
    this._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }
  // 공통부분
  get monthlyCost() {return this._monthlyCost;}
  // 공통부분
  get name() {return this._name;}
  get id() {return this._id;}
  // 공통부분
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department {
  constructor(name, staff){
    this._name = name;
    this._staff = staff;
  }
  get staff() {return this._staff.slice();}
  // 공통부분
  get name() {return this._name;}
  // 공통부분
  get totalMonthlyCost() {
    return this.staff
    .map(e => e.monthlyCost)
    .reduce((sum, cost) => sum + cost);
  }
  get headCount() {
    return this.staff.length;
  }
  // 공통부분
  get totalAnnualCost() {
    return this.totalMonthlyCost * 12;
  }
}

module.exports = {Employee, Department}