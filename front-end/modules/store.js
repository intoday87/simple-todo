define(function () {
  var store;

  return {
    set: function (instance) {
      store = instance;
    },
    dispatch: function (action) {
      store.dispatch(action);
    },
    getState: function () {
      return store.getState();
    }
  };
});
