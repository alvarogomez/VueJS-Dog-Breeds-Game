var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  // loaders: utils.cssLoaders({
  //   sourceMap: isProduction
  //     ? config.build.productionSourceMap
  //     : config.dev.cssSourceMap,
  //   extract: isProduction
  // }),
  loaders:   {
    // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
    // the "scss" and "sass" values for the lang attribute to the right configs here.
    // other preprocessors should work out of the box, no loader config like this necessary.
    'scss': 'vue-style-loader!css-loader!sass-loader',
    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
  },
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
