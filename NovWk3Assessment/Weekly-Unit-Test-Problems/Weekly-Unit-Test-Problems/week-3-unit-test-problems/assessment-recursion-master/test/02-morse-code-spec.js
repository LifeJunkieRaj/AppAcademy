const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const morseCode = require("../problems/02-morse-code.js");

describe("morseCode()", function() {
  afterEach(function() {
    chai.spy.restore(global);
  });

  it("should print out a dot with 100ms break", function(done) {
    let msecs = 100;
    this.timeout(msecs + 200);

    code = ['dot'];

    let setIntervalSpy;
    let setConsoleLogSpy;
    setTimeout(function() {
      expect(setIntervalSpy).to.have.been.called.nth(1).with(100);
      expect(setConsoleLogSpy).to.have.been.called.nth(1).with("dot");

      done();
    }, msecs + 100);
    setIntervalSpy = chai.spy.on(global, "setTimeout");
    setConsoleLogSpy = chai.spy.on(console, "log");

    morseCode(code);

  });

  it("should print out a dash with 300ms break", function(done) {
    let msecs = 300;
    this.timeout(msecs + 200);

    code = ['dash'];

    let setIntervalSpy;
    let setConsoleLogSpy;
    setTimeout(function() {
      expect(setIntervalSpy).to.have.been.called.nth(1).with(300);
      expect(setConsoleLogSpy).to.have.been.called.nth(1).with("dash");

      done();
    }, msecs + 100);
    setIntervalSpy = chai.spy.on(global, "setTimeout");
    setConsoleLogSpy = chai.spy.on(console, "log");

    morseCode(code);

  });

  it("should print out S.O.S. in morse code", function(done) {
    let msecs = 1500;
    this.timeout(msecs + 200);

    code = ['dot', 'dot', 'dot', 'dash', 'dash', 'dash', 'dot', 'dot', 'dot'];

    let setIntervalSpy;
    let setConsoleLogSpy;
    setTimeout(function() {
      expect(setIntervalSpy).to.have.been.called.nth(1).with(100);
      expect(setConsoleLogSpy).to.have.been.called.nth(1).with("dot");

      expect(setIntervalSpy).to.have.been.called.nth(2).with(100);
      expect(setConsoleLogSpy).to.have.been.called.nth(2).with("dot");

      expect(setIntervalSpy).to.have.been.called.nth(3).with(100);
      expect(setConsoleLogSpy).to.have.been.called.nth(3).with("dot");

      expect(setIntervalSpy).to.have.been.called.nth(4).with(300);
      expect(setConsoleLogSpy).to.have.been.called.nth(4).with("dash");

      expect(setIntervalSpy).to.have.been.called.nth(5).with(300);
      expect(setConsoleLogSpy).to.have.been.called.nth(5).with("dash");

      expect(setIntervalSpy).to.have.been.called.nth(6).with(300);
      expect(setConsoleLogSpy).to.have.been.called.nth(6).with("dash");

      expect(setIntervalSpy).to.have.been.called.nth(7).with(100);
      expect(setConsoleLogSpy).to.have.been.called.nth(7).with("dot");

      expect(setIntervalSpy).to.have.been.called.nth(8).with(100);
      expect(setConsoleLogSpy).to.have.been.called.nth(8).with("dot");

      expect(setIntervalSpy).to.have.been.called.nth(9).with(100);
      expect(setConsoleLogSpy).to.have.been.called.nth(9).with("dot");
      done();
    }, msecs + 100);
    setIntervalSpy = chai.spy.on(global, "setTimeout");
    setConsoleLogSpy = chai.spy.on(console, "log");

    morseCode(code);

  });

});
