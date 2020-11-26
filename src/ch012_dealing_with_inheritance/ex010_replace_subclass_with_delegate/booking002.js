class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }
  get hasTalkback() {
    return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
  }
  get basePrice() {
    let result = this._show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);
    return result;
  }
}

class PremiumBooking extends Booking {
  constructor(show, date, extras) {
    super(show, date);
    this._extras = extras;
  }
  get hasTalkback() {
    return this._show.hasOwnProperty('talkback');
  }
  get basePrice() {
    return Math.round(super.basePrice + this._extras.primiumFee);
  }
  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
  }
}

// client 측 코드
// 생성자를 팩터리 함수로 바꿔서 생성자 호출 부분을 캡슐화화자
function createBooking(show, date) {
  return new Booking(show, date);
}
function createPremiumBooking(show, date, extras) {
  return new PremiumBooking(show, date, extras);
}

const aBooking = createBooking(show, date);
const aPremiumBooking = createPremiumBooking(show, date, extras);