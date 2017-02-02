var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var mapsApiKey = require('./mapsApi.env')

module.exports = merge(merge(prodEnv, {
  		NODE_ENV: '"development"'
	}), mapsApiKey
)

