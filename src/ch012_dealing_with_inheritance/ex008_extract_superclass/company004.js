class Party {
  constructor(name) {
    this._name = name;
  }
  get name() {return this._name;}
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super(name);
    this._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }
  get monthlyCost() {return this._monthlyCost;}
  get id() {return this._id;}
  // 메서드 올리기
  /*
  get annualCost() {
    return this.monthlyCost * 12;
  }
  */
}

class Department extends Party{
  constructor(name, staff){
    super(name);
    this._name = name;
    this._staff = staff;
  }
  get staff() {return this._staff.slice();}
  get monthlyCost() {
    return this.staff
    .map(e => e.monthlyCost)
    .reduce((sum, cost) => sum + cost);
  }
  get headCount() {
    return this.staff.length;
  }
  // 메서드 올리기
  /*
  get annualCost() {
    return this.monthlyCost * 12;
  }
  */
}

module.exports = {Employee, Department}