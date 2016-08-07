describe('Sample mobile', function () {
  var should = require('should');
  var sinon = require('sinon');
  var sample;

  it('should not be undefined', function () {
    sample = require('../components/sample.mobile/main');
    should.exist(sample);
  });

  it('should call template function when it called build', function () {
    var optionMock = {
      html: function () {
      }
    };
    sinon.spy(optionMock, "html");

    var mainHbsSpy = sinon.spy();

    var sampleFactory = require('proxy!../components/sample.mobile/main');
    sample = sampleFactory({
        './main.hbs': mainHbsSpy
    });
    sample.build({
      $parent: optionMock
    });

    should.ok(optionMock.html.called, '$parent.html didn\'t called.');
    should.ok(mainHbsSpy.called, 'templete didn\'t called.');
  });
});
