function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo); // 추출한 함수 호출
  outStream.write(`<p>location: ${person.photo.location}</p>\n`);  // 피호출 함수를 호출자들로 하나씩 인라인
}
function recentDateCutoff() {
  return new Date('Jan 1, 2020');
}

function listRecentPhotos(outStream, photos) {
  photos
  .filter(p => p.date > recentDateCutoff())
  .forEach(p => {
    outStream.write("<div>\n");
    emitPhotoData(outStream, p); // 추출한 함수 호출
    outStream.write(`<p>location: ${p.location}</p>\n`);  // 피호출 함수를 호출자들로 하나씩 인라인
    outStream.write("</div>\n");
  });
}
// 기존 함수 삭제
// function emitPhotoData(outStream, photo) {
//   zztmp(outStream, photo);
// }
// 기존 함수 이름으로 변경
function emitPhotoData(outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>\n`);
  outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
}

function renderPhoto(outStream, aPhoto) {
  outStream.write("<image stream>\n");
}

module.exports = {renderPerson, listRecentPhotos}