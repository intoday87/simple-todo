var expect = require('chai').expect;
var sampleInjector = require('inject!../components/sample.mobile/main');
var sinon = require('sinon');
var mainHbsMock = sinon.spy();
var sample = sampleInjector({
  './main.hbs': mainHbsMock
});

describe('Sample mobile', function () {
  it('should not be undefined', function () {
    expect(sample).to.not.be.undefined;
  });

  it('should call template function when it called build', function () {
    var $mock = {
      html : function () {}
    };
    sinon.spy($mock, "html");
    sample.build({
      $parent: $mock
    });
    expect($mock.called).to.be.true;
  });
});
