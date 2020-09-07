const {assert} = require('chai');

class Book {
  constructor() {
    this._reservations = [];
    this._preReservations = [];
  }
  // addReservation(customer) {
  //   this.zz_addReservation(customer, false);
  // }
  addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    if(isPriority) {
      this._preReservations.push(customer);
    } else {
      this._reservations.push(customer);
    }
  }
  get reservationsCount() {
    return this._reservations.length;
  }
  get preReservationsCount() {
    return this._preReservations.length;
  }
}

module.exports = {Book}