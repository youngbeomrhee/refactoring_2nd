class CatalogItem {
  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }
  get id() {return this._id;}
  get title() {return this._title;}
  hasTag(arg) {return this._tags.includes(arg);}
}

// 상속관계를 끊는다
// class Scroll extends CatalogItem {
class Scroll  {
  constructor(id, title, tags, dateLastCleaned) {
    // super(id, title, tags);
    // CatalogItem을 참조하는 속성을 만들고 슈퍼클래스의 인스턴스를 새로 하나 만들어 대입하자
    this._catalogItem = new CatalogItem(id, title, tags);
    this._lastCleaned = dateLastCleaned;
  }
  // 서브클래스에서 사용되는 슈퍼클래스의 동작 각각에 대응하는 전달 메서드를 만든다
  get id() {return this._catalogItem.id;}
  get title() {return this._catalogItem.title;}
  hasTag(aString) {return this._catalogItem.hasTag(aString);}

  needsCleaning(targetDate) {
    const threshold = this.hasTag("revered") ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold ;
  }
  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}