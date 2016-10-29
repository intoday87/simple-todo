define(function (require) {
  var tmpl = require('./main.hbs');
  var _ = require('underscore');

  return {
    reducer: function (state, action) {
      if (state === undefined) {
        return {
          email: '',
          name : ''
        }
      }

      switch (action.type) {
        case 'SAMPLE':
          return _.extend({}, state, {});
        default:
          return state;
      }
    },
    build  : function (option) {
      option.$parent.html(tmpl());
    }
  };
});
