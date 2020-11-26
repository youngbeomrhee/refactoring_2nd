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

class Scroll {
  // 생성자 수정
  // constructor(id, title, tags, dateLastCleaned) {
  // 건네지던 제목과 태그를 제거한다
  // constructor(id, title, tags, dateLastCleaned, catalogID, catalog) {
  constructor(id, dateLastCleaned, catalogID, catalog) {
    // 자신만의 id값을 갖도록 변경
    this._id = id;
    // 새로운 카탈로그 아이템을 만드는 대신 인수로 받은 카탈로그 ID를 사용해서 카탈로그 아이템을 얻어오게 한다    // this._catalogItem = new CatalogItem(id, title, tags);
    this._catalogItem = catalog.get(catalogID);
    this._lastCleaned = dateLastCleaned;
  }
  // get id() {return this._catalogItem.id;}
  get id() {return this._id;}
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


// 기존의 호출방식경
/*
const scrolls = aDocument
  .map(record => new Scroll(
      record.id,
      record.catalogData.title,
      record.catalogData.tags,
      LocalDate.parse(record.lastCleaned)
  ));
*/


// 각각의 Id를 전달할 수 있도록 변경
const scrolls = aDocument
  .map(record => new Scroll(
      record.id,
      // 건네지던 제목과 태그를 제거한다
      /*
      record.catalogData.title,
      record.catalogData.tags,
      */
      LocalDate.parse(record.lastCleaned),
      record.catalogData.id,
      catalog
  ));

