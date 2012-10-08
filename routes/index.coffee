exports.configure = (config, app) ->

  pathview = (path, view, locals) ->
    locals ?= layout: false
    app.get path, (req, res) -> res.render view, locals

  pathview "/", "demo"
