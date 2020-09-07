const { expect, assert } = require('chai');
const {circum} = require('../../src/ch006_basic_refactoring/ex005_change_function_declaration/circum001');
const {circumference} = require('../../src/ch006_basic_refactoring/ex005_change_function_declaration/circum002');
const {circum: circum2, circumference: circumference2} = require('../../src/ch006_basic_refactoring/ex005_change_function_declaration/circum003');
const {Book} = require('../../src/ch006_basic_refactoring/ex005_change_function_declaration/book001');
const {Book: Book2} = require('../../src/ch006_basic_refactoring/ex005_change_function_declaration/book002');
const {inNewEngland} = require('../../src/ch006_basic_refactoring/ex005_change_function_declaration/inNewEngland001');
const {inNewEngland: inNewEngland2} = require('../../src/ch006_basic_refactoring/ex005_change_function_declaration/inNewEngland002');
const {inNewEngland: inNewEngland3} = require('../../src/ch006_basic_refactoring/ex005_change_function_declaration/inNewEngland003');

describe('circum', () => {
  it('circum before refactoring : should calculate circumference given a radius', () => {
    expect(circum(100)).to.equal(628.3185307179587);
  });

  it('after change to circumference : should calculate circumference given a radius', () => {
    expect(circumference(100)).to.equal(628.3185307179587);
  });

  it('after migragation from circum to circumference : both return the same value', () => {
    expect(circum2(100)).to.equal(circumference2(100));
  });
});

describe('Book', () => {
  it('Book addReservation', () => {
    const book = new Book();
    expect(book.reservationCount).to.equal(0);
    book.addReservation({
      name: 'yb',
      title: 'Refactoring 2nd'
    });
    expect(book.reservationCount).to.equal(1);
  });

  it('Book addReservation 마이그레이션', () => {
    const Book = Book2;
    const book = new Book();

    expect(book.reservationsCount).to.equal(0);
    book.addReservation({
      name: 'yb',
      title: 'Refactoring 2nd'
    }, false);
    expect(book.reservationsCount).to.equal(1);

    expect(book.preReservationsCount).to.equal(0);
    book.addReservation({
      name: 'yb',
      title: 'Refactoring 2nd'
    }, true);
    expect(book.preReservationsCount).to.equal(1);
  });
});


describe('inNewEngland', () => {
  it('inNewEngland : before refactoring', () => {
    expect(inNewEngland({address: {state: 'MA'}})).to.be.true;
    expect(inNewEngland({address: {state: 'XX'}})).to.be.false;
  });

  it('inNewEngland : after extracting variable', () => {
    expect(inNewEngland2({address: {state: 'MA'}})).to.be.true;
    expect(inNewEngland2({address: {state: 'XX'}})).to.be.false;
  });

  it('inNewEngland : after extracting function and inline function', () => {
    expect(inNewEngland3('MA')).to.be.true;
    expect(inNewEngland3('XX')).to.be.false;
  });

});