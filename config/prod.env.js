var merge = require('webpack-merge')
var mapsApiKey = require('./mapsApi.env')

module.exports = merge(mapsApiKey, {
  	NODE_ENV: '"production"'
})
