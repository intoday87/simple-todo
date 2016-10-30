define(function (require) {
  var redux = require('redux');
  var reduxImmutable = require('redux-immutable');
  var Immutable = require('immutable');
  var sample = require('sample.mobile/main');
  var store = require('store');

  return {
    createStore: function () {
      store.set(
        redux.createStore(reduxImmutable.combineReducers({
          sample: sample.reducer
        }), Immutable.Map(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
      );
      return store;
    }
  }
});
