$ ->
  class Settings
    constructor: ->
      @width = 65
      @order = 'sorted'
      @rotation = 0
  settings = new Settings()

  deckModel = new PlayingCards.DeckModel null,
    front: true # show cards up initially
  
  deckView = new PlayingCards.DeckView
    el: $('#cards')
    model: deckModel
    templates: new PlayingCards.Templates()
  deckView.setCardWidth settings.width
  deckView.render()

  datgui = new dat.GUI()
  datgui.add(settings, 'width').min(10).max(500).step(1).onChange (value) ->
    deckView.setCardWidth value
  datgui.add(settings, 'order', ['sorted', 'random']).onChange (value) ->
    switch value
      when 'sorted' then deckView.sort()
      when 'random' then deckView.shuffle()
  datgui.add(settings, 'rotation').min(-180).max(180).step(1).onChange (value) ->
    deckView.$el.css
      '-ms-transform': "rotate(#{value}deg)"
      '-moz-transform': "rotate(#{value}deg)"
      '-webkit-transform': "rotate(#{value}deg)"
      'transform': "rotate(#{value}deg)"
