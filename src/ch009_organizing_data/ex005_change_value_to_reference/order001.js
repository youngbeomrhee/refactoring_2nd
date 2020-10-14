class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
  }
  get customer() { return this._customer; }
}

// 각각의 Customer 인스턴스는 다른 참조값을 갖는다
class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() { return this._id; }
}

module.exports = { Order, Customer }