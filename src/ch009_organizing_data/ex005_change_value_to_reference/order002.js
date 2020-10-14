// 저장소 객체 생성
let _repositoryData;

function initialize() {
  _repositoryData = {};
  _repositoryData.customers = new Map();
}
function registerCustomer(id) {
  if (!_repositoryData.customers.has(id))
    _repositoryData.customers.set(id, new Customer(id));
  return findCustomer(id);
}
function findCustomer(id) {
  return _repositoryData.customers.get(id);
}

// 저장소의 객체를 얻어오도록 변경
class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = registerCustomer(data.customer);
  }
  get customer() { return this._customer; }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() { return this._id; }
}


module.exports = { Order, Customer, initialize, registerCustomer, findCustomer }