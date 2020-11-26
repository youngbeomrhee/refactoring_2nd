// 구조가 갖춰졌으니 다음은 기능을 옮긴다
class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }
  // 위임이 존재하면 위임을 사용하는 분배 로직을 슈퍼클래스 메서드에 추가한다
  get hasTalkback() {
    return (this._premiumDelegate) ?
        this._premiumDelegate.hasTalkback : this._show.hasOwnProperty('talkback')  && !this.isPeakDay;
  }
  get basePrice() {
    let result = this._show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);
    return result;
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
  // 함수 옮기기를 적용해 서브클래스의 메서드를 위임으로 옮긴다.
  // 슈퍼클래스의 데이터를 사용하는 부분은 모두 _host를 통하도록 고친다
  get hasTalkback() {
    return this._host.show.hasOwnProperty('talkback');
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