var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it should add numbers', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 5)
  })

  it('it should subtract numbers', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 4)
  })

  it('it should multiply numbers', function(){
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 15)
  })

  it('it should divide numbers', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3)
  })

  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(7);
    assert.equal(calculator.runningTotal, 127)
  })

  it('it should chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 6)
  })

  it('it should clear the running total', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0)
    assert.equal(calculator.previousTotal, 8)
  })

});
