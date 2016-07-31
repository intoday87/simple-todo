var expect = require('chai').expect;
var sample = require('../components/sample.pc/main');

describe('Sample PC', function() {
  it('should not be undefined', function () {
    expect(sample).to.not.be.undefined;
  });
});
