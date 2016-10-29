define(function (require) {
  var redux = require('redux');
  var sample = require('sample.mobile/main');

  return redux.createStore(sample.reducer);
});
