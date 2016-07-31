var expect = require('chai').expect;
var sample = require('../components/sample.mobile/main');

describe('Sample mobile', function() {
  it('should not be undefined', function () {
    expect(sample).to.not.be.undefined;
  });
});
