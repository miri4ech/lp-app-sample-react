exports.exportPathMap = () => {
  return {
    '/': {page: '/', query: {}}
  }
}

exports.webpack = config => {
  config.module.rules.push({
    test: new RegExp('.css$'),
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {importLoaders: 1}
      },
      'postcss-loader'
    ]
  }, {
    test: new RegExp('.styl$'),
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {importLoaders: 1}
      },
      'stylus-loader'
    ]
  })
  return config
}
