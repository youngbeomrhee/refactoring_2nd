class Order {
  constructor(priority) {
    this._priority = priority;
  }
  // 문자열을 리턴하므로 이름 변경
  get priorityString() { return this._priority.toString(); }
  set priority(aString) { this._priority = new Priority(aString); }
}

class Priority {
  constructor(value) {
    this._value = value;
  }
  toString() {return this._value;}
}

const orders = [new Order(new Priority("normal")), new Order(new Priority("high")), new Order(new Priority("rush"))];

const highPriorityCount = orders.filter(o => o.priorityString === 'high' || o.priorityString === 'rush').length;

module.exports = {highPriorityCount};