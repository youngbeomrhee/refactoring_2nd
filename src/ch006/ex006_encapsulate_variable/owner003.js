let defaultOwner = {firstName: "Martin", lastName: "Fowler"};

function getDefaultOwner() {
  // 복사본을 전달
  return Object.assign({}, defaultOwner);
}

module.exports = {getDefaultOwner}
