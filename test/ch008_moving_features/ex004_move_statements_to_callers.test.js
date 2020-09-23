/*

const { expect, assert } = require('chai');
// const {photoDiv, renderPerson} = require('../../src/ch008_moving_features/ex004_move_statements_to_callers/photo001');

const date = new Date('May 10, 2019');
const fs = require('fs');
const fileOutStream = fs.createWriteStream('./ex004.txt');
fileOutStream.write('test');
fileOutStream.write('test2');
fileOutStream.write('test3');
fileOutStream.end();

const fileReadStream = fs.createReadStream('./ex004.txt');
const stringsFromStream = [];
fileReadStream.on('data', chunk => {
  stringsFromStream.push(chunk);
});
fileReadStream.on('end', _ => {
  console.log(stringsFromStream);
  // stringsFromStream.push(chunk);
});

const aPerson = {
  name: "Alex",
  photo: {
    title: "holiday",
    location: "Greece",
    date: date
  }
};
*/

//
// describe('photo001', () => {
//   it('photoDiv render a photo div', () => {
//     // expect(photoDiv(aPerson.photo)).to.equal('<div>\n<p>title: holiday</p>\n<p>location: Greece</p>\n<p>date: Fri May 10 2019</p>\n</div>');
//
//   });
// });