/**
 * Autoload controllers.
 */

fs.readdirSync(__dirname + '/http/controllers/').forEach(filename => {
    require(__dirname + '/http/controllers/' + filename)
})