import React from 'react';
import {render} from 'react-dom';

module.exports = function () {
  render(
    (
      <div>hello world</div>
    ),
    document.getElementsByTagName('body')[0]
  );
};
