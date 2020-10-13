// 기존 필드명 변경
class Organization {
  constructor(data) {
    // name을 사용할 수 있게 하던 코드 제거
    this._title = data.title;
    this._country = data.country;
  }
  // 접근자 이름 변경
  set title(aString) {
    this._title = aString;
  }
  get title() {
    return this._title;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
  get country() {
    return this._country;
  }
}

// 생성자를 호출할 때 title을 사용하도록 하나씩 수정
const organization = new Organization({title: "Acme Gooseberries", country: "GB"});

module.exports = {organization}