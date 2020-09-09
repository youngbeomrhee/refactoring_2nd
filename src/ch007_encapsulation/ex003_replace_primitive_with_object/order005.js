class Order {
  constructor(priority) {
    this._priority = priority;
  }
  // priority 객체를 제공
  get priority() { return this._priority; }
  get priorityString() { return this._priority.toString(); }
  set priority(aString) { this._priority = new Priority(aString); }
}

class Priority {

  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this._value = value;
    } else {
      throw new Error(`<${value}> is invalid for Priority`);
    }
  }
  toString() {return this._value;}
  // 메서드 추
  get _index() {return Priority.legalValues().findIndex(s => s === this._value);}
  static legalValues() {return ['low', 'normal', 'high', 'rush'];}

  equals(other) {return this._index === other._index;}
  higherThan(other) {return this._index > other._index;}
  lowerThan(other) {return this._index < other._index;}
}

const orders = [new Order(new Priority("normal")), new Order(new Priority("high")), new Order(new Priority("rush"))];

const highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority('normal'))).length;

module.exports = {highPriorityCount};