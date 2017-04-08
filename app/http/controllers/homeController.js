/**
 * homeController
 */

homeController = {

	/**
	 * Display resource.
	 * 
	 * @param  request
	 * @param  response
	 */
	index: function(request, response) {
		
		response.render('index', {
			name: request.params.name ? request.params.name : 'Vitor Leonel'
		})
		
	},
}

module.exports = homeController