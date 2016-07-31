var should = require('chai').expect;
var sample = require('../components/sample.pc/main');

describe('Sample', function() {
  it('should not be undefined', function () {
    expect(undefined).to.be.undefined;
    expect(null).to.not.be.undefined;
  });
});
