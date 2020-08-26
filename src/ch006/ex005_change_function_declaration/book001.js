class Book {
  constructor() {
    this._reservations = [];
  }
  addReservation(customer) {
    this._reservations.push(customer);
  }
  get reservationCount() {
    return this._reservations.length;
  }
}

module.exports = {Book}