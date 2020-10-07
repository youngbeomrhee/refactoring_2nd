const { expect, assert } = require('chai');
const {renderPerson, listRecentPhotos} = require('../../src/ch008_moving_features/ex004_move_statements_to_callers/photo001');
const {renderPerson: renderPerson2, listRecentPhotos: listRecentPhotos2} = require('../../src/ch008_moving_features/ex004_move_statements_to_callers/photo002');
const {renderPerson: renderPerson3, listRecentPhotos: listRecentPhotos3} = require('../../src/ch008_moving_features/ex004_move_statements_to_callers/photo003');
const {renderPerson: renderPerson4, listRecentPhotos: listRecentPhotos4} = require('../../src/ch008_moving_features/ex004_move_statements_to_callers/photo004');

const date = new Date('May 10, 2019');
const fs = require('fs');

const aPerson = {
  name: "Alex",
  photo: {
    title: "holiday",
    location: "Greece",
    date: date
  }
};
const photos = [
  {
    title: "holiday 2020",
    location: "Greece",
    date: new Date('May 10, 2020')
  },
  {
    title: "holiday 2019",
    location: "Greece",
    date: new Date('May 10, 2019')
  },
  {
    title: "holiday 2018",
    location: "Greece",
    date: new Date('May 10, 2018')
  },
]

class MockStream {
  constructor() {
    this.data = [];
  }
  write(str) {
    this.data.push(str);
  }
  read() {
    return this.data.join('');
  }
}

describe('photo001', () => {
  it('renderPerson', () => {
    const mockStream = new MockStream();
    renderPerson(mockStream, aPerson);
    expect(mockStream.read()).to.equal(`<p>Alex</p>\n<image stream>\n<p>title: holiday</p>\n<p>date: Fri May 10 2019</p>\n<p>location: Greece</p>\n`);
  });
  it('listRecentPhotos', () => {
    const mockStream = new MockStream();
    listRecentPhotos(mockStream, photos);
    expect(mockStream.read()).to.equal(`<div>\n<p>title: holiday 2020</p>\n<p>date: Sun May 10 2020</p>\n<p>location: Greece</p>\n</div>\n`);
  });
});

describe('photo002', () => {
  const renderPerson = renderPerson2;
  const listRecentPhotos = listRecentPhotos2;

  it('renderPerson', () => {
    const mockStream = new MockStream();
    renderPerson(mockStream, aPerson);
    expect(mockStream.read()).to.equal(`<p>Alex</p>\n<image stream>\n<p>title: holiday</p>\n<p>date: Fri May 10 2019</p>\n<p>location: Greece</p>\n`);
  });
  it('listRecentPhotos', () => {
    const mockStream = new MockStream();
    listRecentPhotos(mockStream, photos);
    expect(mockStream.read()).to.equal(`<div>\n<p>title: holiday 2020</p>\n<p>date: Sun May 10 2020</p>\n<p>location: Greece</p>\n</div>\n`);
  });
});


describe('photo003', () => {
  const renderPerson = renderPerson3;
  const listRecentPhotos = listRecentPhotos3;

  it('renderPerson', () => {
    const mockStream = new MockStream();
    renderPerson(mockStream, aPerson);
    expect(mockStream.read()).to.equal(`<p>Alex</p>\n<image stream>\n<p>title: holiday</p>\n<p>date: Fri May 10 2019</p>\n<p>location: Greece</p>\n`);
  });
  it('listRecentPhotos', () => {
    const mockStream = new MockStream();
    listRecentPhotos(mockStream, photos);
    expect(mockStream.read()).to.equal(`<div>\n<p>title: holiday 2020</p>\n<p>date: Sun May 10 2020</p>\n<p>location: Greece</p>\n</div>\n`);
  });
});

describe('photo004', () => {
  const renderPerson = renderPerson4;
  const listRecentPhotos = listRecentPhotos4;

  it('renderPerson', () => {
    const mockStream = new MockStream();
    renderPerson(mockStream, aPerson);
    expect(mockStream.read()).to.equal(`<p>Alex</p>\n<image stream>\n<p>title: holiday</p>\n<p>date: Fri May 10 2019</p>\n<p>location: Greece</p>\n`);
  });
  it('listRecentPhotos', () => {
    const mockStream = new MockStream();
    listRecentPhotos(mockStream, photos);
    expect(mockStream.read()).to.equal(`<div>\n<p>title: holiday 2020</p>\n<p>date: Sun May 10 2020</p>\n<p>location: Greece</p>\n</div>\n`);
  });
});



// TODO : 파일 IO Stream으로 변경
// describe('photo001', () => {
//   it('renderPerson', () => {
//     // expect(photoDiv(aPerson.photo)).to.equal('<div>\n<p>title: holiday</p>\n<p>location: Greece</p>\n<p>date: Fri May 10 2019</p>\n</div>');
//     const personOutStream = fs.createWriteStream('./person001.txt');
//     renderPerson(personOutStream, aPerson);
//     personOutStream.end();
//   });
// });
// fileOutStream.write('test');
// fileOutStream.write('test2');
// fileOutStream.write('test3');
// fileOutStream.end();
//
// const fileReadStream = fs.createReadStream('D:/Repository/refactoring_2nd/test/ch008_moving_features/ex004.txt');
// const stringsFromStream = [];
// fileReadStream.on('data', chunk => {
//   stringsFromStream.push(chunk);
//   console.log(chunk.toString());
// });
// fileReadStream.on('end', _ => {
//   console.log(stringsFromStream);
//   // stringsFromStream.push(chunk);
// });

/*
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