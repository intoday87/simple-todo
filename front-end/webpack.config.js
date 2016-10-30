var path = require('path');

module.exports = {
  context: __dirname,
  entry  : {
    'sample.pc'    : './entries/sample.pc',
    'sample.mobile': './entries/sample.mobile'
  },

  output: {
    path: path.resolve(__dirname, '..', 'public/dist/bundle'),

    filename     : '[name].bundle.js',
    chunkFilename: '[id].chunk.js',

    library: 'Bundle'
  },

  module: {
    preLoaders: [
      {
        test   : /\.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
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

  externals: [
    {
      jquery: 'var $'
    }
  ],

  resolve: {
    modulesDirectories: [
      'node_modules',
      'components',
      'modules'
    ],

    alias: {}
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
