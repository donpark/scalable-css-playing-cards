
###
Module dependencies.
###
express = require("express")
app = module.exports = express.createServer()

# stylus = require('stylus')
# nib = require('nib')

# Configuration
app.configure ->
  app.set "views", __dirname + "/views"
  app.set "view engine", "jade"
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router
  # app.use stylus.middleware
  #   src: __dirname
  #   compile: (str, path) ->
  #     stylus(str).set('filename', path).set('compress', false).use(nib())
  app.use express.static(__dirname + "/public")

app.configure "development", ->
  app.use express.errorHandler(
    dumpExceptions: true
    showStack: true
  )

app.configure "production", ->
  app.use express.errorHandler()


# Routes
require('./routes/index').configure(null, app)

app.listen 3000, ->
  console.log "Express server listening on port %d in %s mode", app.address().port, app.settings.env

