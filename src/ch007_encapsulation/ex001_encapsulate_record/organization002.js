const organization = {name: "Acme Gooseberries", country: "GB"};

// encapsulate variable (ch6.6)
function getRawDataOfOrganization() {
  return organization;
}

module.exports = {getRawDataOfOrganization}