define([
    './main.hbs'
  ],
  function (tmpl) {
    return {
      build: function (option) {
        option.$parent.html(tmpl);
      }
    };
  });
