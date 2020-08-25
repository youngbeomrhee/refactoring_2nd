const { expect } = require('chai');
const { printOwing } = require('../../src/ch006/ex001_extract_function/printOwing001');
const { printOwing : printOwing2 } = require('../../src/ch006/ex001_extract_function/printOwing002');
const { printOwing : printOwing3 } = require('../../src/ch006/ex001_extract_function/printOwing003');
const { printOwing : printOwing4 } = require('../../src/ch006/ex001_extract_function/printOwing004');

let Clock = {
  today: {
    getFullYear() {
      return 2000;
    },

    getMonth() {
      return 0;
    },

    getDate() {
      return 1;
    }
  }
};

class Console {
  constructor() {
    this._content = "";
  }

  log(content) {
    this._content += content + "\n";
  }

  get content() {
    return this._content;
  }
}

describe('printOwing : 원래 함수', () => {
  it('should print owing', () => {
    let invoice = {
      "orders": [
        {"amount": 1}
      ],
      "customer": "JL"

    };

    let console = new Console();

    let expected = "***********************\n" +
        "**** Customer Owes ****\n" +
        "***********************\n" +
        "name: JL\n" +
        "amount: 1\n" +
        "due: 1/31/2000\n";

    printOwing(invoice, console, Clock);

    expect(console.content).to.equal(expected);
  });
});

describe('printOwing2 : 각각의 출력 부분을 함수로 추출', () => {
  it('should print owing', () => {
    let invoice = {
      "orders": [
        {"amount": 1}
      ],
      "customer": "JL"
    };

    let console = new Console();

    let expected = "***********************\n" +
        "**** Customer Owes ****\n" +
        "***********************\n" +
        "name: JL\n" +
        "amount: 1\n" +
        "due: 1/31/2000\n";

    printOwing2(invoice, console, Clock);

    expect(console.content).to.equal(expected);
  });
});


describe('printOwing3 : 지역 변수를 사용할 때', () => {
  it('should print owing', () => {
    let invoice = {
      "orders": [
        {"amount": 1}
      ],
      "customer": "JL"
    };

    let console = new Console();

    let expected = "***********************\n" +
        "**** Customer Owes ****\n" +
        "***********************\n" +
        "name: JL\n" +
        "amount: 1\n" +
        "due: 1/31/2000\n";

    printOwing3(invoice, console, Clock);

    expect(console.content).to.equal(expected);
  });
});

describe('printOwing4 : 지역 변수의 값을 변경할 때', () => {
  it('should print owing', () => {
    let invoice = {
      "orders": [
        {"amount": 1}
      ],
      "customer": "JL"
    };

    let console = new Console();

    let expected = "***********************\n" +
        "**** Customer Owes ****\n" +
        "***********************\n" +
        "name: JL\n" +
        "amount: 1\n" +
        "due: 1/31/2000\n";

    printOwing4(invoice, console, Clock);

    expect(console.content).to.equal(expected);
  });
});