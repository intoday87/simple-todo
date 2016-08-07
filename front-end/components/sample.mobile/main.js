define(function (require) {
    var tmpl = require('./main.hbs');
    return {
      build: function (option) {
        option.$parent.html(tmpl());
      }
    };
  });
