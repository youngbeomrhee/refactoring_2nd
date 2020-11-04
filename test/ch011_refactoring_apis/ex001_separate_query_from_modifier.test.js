const { expect, assert } = require('chai');
const { alertForMiscreant } = require('../../src/ch011_refactoring_apis/ex001_separate_query_from_modifier/miscreant001');
const { alertForMiscreant: alertForMiscreant2, findMiscreant } = require('../../src/ch011_refactoring_apis/ex001_separate_query_from_modifier/miscreant002');
const { alertForMiscreant: alertForMiscreant3, findMiscreant: findMiscreant2 } = require('../../src/ch011_refactoring_apis/ex001_separate_query_from_modifier/miscreant003');

describe('miscreant', () => {
  it('find Don and set off alarm', () => {
    alertForMiscreant(["Tom", "Helen", "Don"]);
  });
  it('find Don and set off alarm', () => {
    const alertForMiscreant = alertForMiscreant2;

    // 원래의 변경 함수를 호출하는 코드를 바로 아래 삽입
    const found = findMiscreant(["Tom", "Helen", "Don"])
    alertForMiscreant([found]);
  });

  it('find Don and set off alarm', () => {
    const alertForMiscreant = alertForMiscreant3;
    const findMiscreant = findMiscreant2;

    // 원래의 변경 함수를 호출하는 코드를 바로 아래 삽입
    const found = findMiscreant(["Tom", "Helen", "Don"])
    alertForMiscreant([found]);
  });

});
