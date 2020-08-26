function readingsOutsideRange(station, min, max) {
  return station.readings
  .filter(r => r.temp < min || r.temp > max);
}

class NumberRange {
  constructor(min, max) {
    this._data = {min: min, max: max};
  }
  get min() {return this._data.min;}
  get max() {return this._data.max;}

  contains(aNumber) {return (aNumber >= this.min && aNumber <= this.max);}
}
module.exports = {readingsOutsideRange}