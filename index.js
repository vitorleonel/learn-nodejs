path 		= require('path')
fs 			= require('fs')
express 	= require('express')
bodyParser 	= require('body-parser')
sass 		= require('node-sass-middleware')
app			= express()
router 		= express.Router()

/**
 * Core
 */
require('./app/config')
require('./app/controllers')
require('./app/routes')

/**
 * Express set's
 */
app.set('views', './resources/views')
app.set('view engine', 'pug')

/**
 * Express use's
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

app.use('/css', sass({
	src: config.views.source,
	dest: config.views.output,
	outputStyle: config.views.style,
	debug: config.views.debug
}))

app.use(express.static(path.join(__dirname, 'public')))

/**
 * Starting a server.
 */
app.listen(config.port, function () {
	console.log('Application listening on port ' + config.port)
})