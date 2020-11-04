class PlacedOn {
  constructor(year, month, date) {
    this._sendDate = new Date(year, month-1, date);
    this._placedDate = new Date(year, month-1, date);
  }
  plusDays(addDays) {
    this._placedDate = this._sendDate.add({'days': addDays});
    return this;
  }
  minusDays(removeDays) {
    this._placedDate = this._sendDate.remove({'days': removeDays});
    return this;
  }
  get placedDate() {
    return this._placedDate.toFormat('YYYY-MM-DD');
  }
}

module.exports = {PlacedOn}