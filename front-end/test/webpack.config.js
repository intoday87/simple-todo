var path = require('path');

module.exports = {
  context: __dirname,
  module: {
    preLoaders: [
      {
        test   : /\.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'external')
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
