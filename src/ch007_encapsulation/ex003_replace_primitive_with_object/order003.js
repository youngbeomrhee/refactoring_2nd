class Order {
  constructor(priority) {
    this._priority = priority;
  }
  // 새로운 Priority의 인스턴스를 사용하도록 수정
  get priority() { return this._priority.toString(); }
  set priority(aString) { this._priority = new Priority(aString); }
}

class Priority {
  constructor(value) {
    this._value = value;
  }
  toString() {return this._value;}
}

const orders = [new Order(new Priority("normal")), new Order(new Priority("high")), new Order(new Priority("rush"))];

const highPriorityCount = orders.filter(o => o.priority === 'high' || o.priority === 'rush').length;

module.exports = {highPriorityCount};