// using setter
class Organization {
  constructor(data) {
    this._data = data;
  }
  set name(aString) {
    this._data.name = aString;
  }
  get name() {
    return this._data.name;
  }
}

const organization = new Organization({name: "Acme Gooseberries", country: "GB"});

// removed
/*
function getRawDataOfOrganization() {
  return organization._data;
}
*/

function getOrganization() {
  return organization;
}

module.exports = {getOrganization}