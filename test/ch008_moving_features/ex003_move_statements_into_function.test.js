const { expect, assert } = require('chai');
const {photoDiv, renderPerson} = require('../../src/ch008_moving_features/ex003_move_statements_into_function/photo001');
const {photoDiv: photoDiv2, renderPerson: renderPerson2} = require('../../src/ch008_moving_features/ex003_move_statements_into_function/photo002');
const {photoDiv: photoDiv3, renderPerson: renderPerson3} = require('../../src/ch008_moving_features/ex003_move_statements_into_function/photo003');

const date = new Date('May 10, 2019');
const os = 'file out stream';

const aPerson = {
  name: "Alex",
  photo: {
    title: "holiday",
    location: "Greece",
    date: date
  }
};

describe('photo001', () => {
  it('photoDiv render a photo div', () => {
    expect(photoDiv(aPerson.photo)).to.equal('<div>\n<p>title: holiday</p>\n<p>location: Greece</p>\n<p>date: Fri May 10 2019</p>\n</div>');
  });

  it('renderPerson has bankCharge of 4.5 when daysOverdrawn is 0', () => {
    expect(renderPerson(os, aPerson)).to.equal('<p>Alex</p>\n\n<p>title: holiday</p>\n<p>location: Greece</p>\n<p>date: Fri May 10 2019</p>');
  });
});
