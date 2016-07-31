var sh = require('shelljs');
var path = require('path');
var webpackConfig = require('../webpack.config.js');

sh.config.fatal = true;
sh.config.verbose = true;

if (sh.test('-d', webpackConfig.output.path)) {
  sh.rm('-r', webpackConfig.output.path);
}

var testBundlePath = path.resolve(__dirname, '..', 'test-bundle');
if (sh.test('-d', testBundlePath)) {
  sh.rm('-r', testBundlePath);
}
