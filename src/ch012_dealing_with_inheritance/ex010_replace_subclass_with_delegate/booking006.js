class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }
  get hasTalkback() {
    return (this._premiumDelegate) ?
        this._premiumDelegate.hasTalkback : this._show.hasOwnProperty('talkback')  && !this.isPeakDay;
  }
  get basePrice() {
    let result = this._show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);다
    return (this._premiumDelegate)
        ? this._premiumDelegate.extendBasePrice(result) : result;
  }
  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
  // 분배로직을 추가한다
  get hasDinner() {
    return (this._premiumDelegate)
      ? this._premiumDelegate.hasDinner : undefined;
  }
}

// 모든 동작이 잘 작동하는지 확인되면 서브클래스를 삭제한다
// 삭제
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
  // 서브클래스에만 존재하는 메서드는 위임으로 옮긴다
  /*
  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
  }
  */
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
  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
  }
}

function createBooking(show, date) {
  return new Booking(show, date);
}
// 서브클래스의 동작을 모두 옮겼다면 팩터리 메서드가 슈퍼클래스를 반환하도록 수정한다.
function createPremiumBooking(show, date, extras) {
  // const result = new PremiumBooking(show, date, extras);
  const result = new Booking(show, date, extras);
  result._bePremium(extras);
  return result;
}

const aBooking = createBooking(show, date);
const aPremiumBooking = createPremiumBooking(show, date, extras);