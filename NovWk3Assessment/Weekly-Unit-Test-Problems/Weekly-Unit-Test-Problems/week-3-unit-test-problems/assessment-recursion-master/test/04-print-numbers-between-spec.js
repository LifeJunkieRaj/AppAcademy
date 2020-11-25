const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const printNumbersBetween = require("../problems/04-print-numbers-between.js");

describe("printNumbersBetween()", function() {
  afterEach(function() {
    chai.spy.restore(global);
  });

  it("should print numbers from 5 to 10", function() {

    let setConsoleLogSpy = chai.spy.on(console, "log");

    printNumbersBetween(5, 10);

    expect(setConsoleLogSpy).to.have.been.called.nth(1).with(5);
    expect(setConsoleLogSpy).to.have.been.called.nth(2).with(6);
    expect(setConsoleLogSpy).to.have.been.called.nth(3).with(7);
    expect(setConsoleLogSpy).to.have.been.called.nth(4).with(8);
    expect(setConsoleLogSpy).to.have.been.called.nth(5).with(9);
    expect(setConsoleLogSpy).to.have.been.called.nth(6).with(10);

  });

  it("should print numbers from 2 to -2", function() {

    let setConsoleLogSpy = chai.spy.on(console, "log");

    printNumbersBetween(2, -2);

    expect(setConsoleLogSpy).to.have.been.called.nth(1).with(2);
    expect(setConsoleLogSpy).to.have.been.called.nth(2).with(1);
    expect(setConsoleLogSpy).to.have.been.called.nth(3).with(0);
    expect(setConsoleLogSpy).to.have.been.called.nth(4).with(-1);
    expect(setConsoleLogSpy).to.have.been.called.nth(5).with(-2);

  });


});
