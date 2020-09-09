let {customerData} = require('./customerData');
let _ = require('lodash');

class CustomerData {
  constructor(data) {
    this._data = data;
  }
  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
  get rawData() {
    return _.cloneDeep(this._data);
  }
  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }
}

const customer = new CustomerData(customerData);

function getCustomerData() { return customer; }
function getRawDataOfCustomers() { return customer._data; }
function setRawDataOfCustomers(arg) { customerData = new CustomerData(arg); }

// 복제된 데이터를 제공
function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().rawData[customerID].usages[laterYear][month];
  const earlier = getCustomerData().rawData[customerID].usages[laterYear - 1][month];
  return {laterAmount: later, change: later - earlier};
}

module.exports = {compareUsage}