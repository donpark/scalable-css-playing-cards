exports.configure = (config, app) ->

  pathview = (path, view, locals) ->
    locals ?= title: "PokerHall"
    app.get path, (req, res) -> res.render view, locals

  pathview "/", "demo"
