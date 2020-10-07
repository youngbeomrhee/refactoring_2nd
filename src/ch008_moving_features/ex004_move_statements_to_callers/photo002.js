function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}
function recentDateCutoff() {
  return new Date('Jan 1, 2020');
}

function listRecentPhotos(outStream, photos) {
  photos
  .filter(p => p.date > recentDateCutoff())
  .forEach(p => {
    outStream.write("<div>\n");
    emitPhotoData(outStream, p);
    outStream.write("</div>\n");
  });
}
function emitPhotoData(outStream, photo) {
  zztmp(outStream, photo);  // 함수로 추출
  outStream.write(`<p>location: ${photo.location}</p>\n`);
}
function zztmp(outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>\n`);
  outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
}

function renderPhoto(outStream, aPhoto) {
  outStream.write("<image stream>\n");
}

module.exports = {renderPerson, listRecentPhotos}