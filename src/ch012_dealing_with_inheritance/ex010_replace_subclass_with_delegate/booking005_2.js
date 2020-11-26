class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }
  get hasTalkback() {
    return (this._premiumDelegate) ?
        this._premiumDelegate.hasTalkback : this._show.hasOwnProperty('talkback')  && !this.isPeakDay;
  }
  // 위임클래스의 메서드를 기반 메서드의 확장 형태로 재호출한다
  get basePrice() {
    let result = this._show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);다
    return (this._premiumDelegate)
        ? this._premiumDelegate.extendBasePrice(result) : result;
  }
  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
}

class PremiumBooking extends Booking {
  constructor(show, date, extras) {
    super(show, date);
    this._extras = extras;
  }
  get hasTalkback() {
    return this._premiumDelegate.hasTalkback;
  }
  get basePrice() {
    return Math.round(super.basePrice + this._extras.primiumFee);
  }
  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
  }
}

class PremiumBookingDelegate {
  constructor(hostBooking, extras) {
    this._host = hostBooking;
    this._extras = extras;
  }
  get hasTalkback() {
    return this._host.show.hasOwnProperty('talkback');
  }
  extendBasePrice(base) {
    return Math.round(base + this._extras.premiumFee);
  }
}

function createBooking(show, date) {
  return new Booking(show, date);
}
function createPremiumBooking(show, date, extras) {
  const result = new PremiumBooking(show, date, extras);
  result._bePremium(extras);
  return result;
}

const aBooking = createBooking(show, date);
const aPremiumBooking = createPremiumBooking(show, date, extras);