/**
 * Application configuration
 */

config = {

	/**
	 * Server
	 */
	port: 80,


	/**
	 * Resources
	 */
	views: {
		style: 'compressed',
		debug: false,
		source: __dirname + '/../resources/assets/scss', 
		output: __dirname + '/../public/css',
	},


}