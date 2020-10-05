// emitPhotoData() 함수를 인라인
// 함수명 변경
function emitPhotoData(p) {
  return [
    `<p>title: ${p.title}</p>`,
    `<p>location: ${p.location}</p>`,
    `<p>date: ${p.date.toDateString()}</p>`
  ].join("\n");
}

function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
}

function photoDiv(p) {
  return [
    "<div>",
    emitPhotoData(p),
    "</div>",
  ].join("\n");
}


function renderPhoto(aPhoto) {
  return '';
}

module.exports = {photoDiv, renderPerson}