class DateUtil {
  constructor(dateString) {
    this.date = new Date(dateString);
  }
  isBefore(date) {
    if(date instanceof Date !== true) throw Error('Date 인스턴스만 비교 가능합니다.');
    return this.date - date < 0;
  }
  isAfter(date) {
    if(date instanceof Date !== true) throw Error('Date 인스턴스만 비교 가능합니다.');
    return this.date - date > 0;
  }
}

module.exports = { DateUtil }
