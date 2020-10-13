// 기존 필드명 변경
class Organization {
  constructor(data) {
    // title도 받아들일 수 있도록 조치
    this._title = data.title ? data.title : data.name;
    this._country = data.country;
  }
  set name(aString) {
    this._title = aString;
  }
  get name() {
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