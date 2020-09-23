// 총 두 곳에서 emitPhotoData를 호출, 바로 앞에 title이 나온다
// emitPhotoData 호출문과 함께 추출
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