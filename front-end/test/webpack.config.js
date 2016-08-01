var path = require('path');
var context = path.resolve(__dirname, '..');

module.exports = {
  context: context,
  module: {
    preLoaders: [
      {
        test   : /\.js$/,
        exclude: [
          path.resolve(context, 'node_modules')
        ],
        loader : 'eslint'
      }
    ],
    loaders   : [
      {
        test  : /\.png$/,
        loader: 'url?limit=100000'
      },
      {
        test  : /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test  : /\.scss$/,
        loader: 'style!css!postcss!sass'
      },
      {
        test  : /\.hbs$/,
        loader: 'handlebars'
      }
    ]
  },

  resolve: {
    modulesDirectories: [
      'node_modules',
      'components'
    ],

    alias: {
    }
  },

  eslint: {
    formatter  : require('eslint-friendly-formatter'),
    failOnError: true
  },

  postcss: function (webpack) {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('autoprefixer')({
        browsers: [
          '> 5%'
        ]
      })
    ];
  }
};
