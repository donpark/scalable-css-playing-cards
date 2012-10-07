#=========================================================================================================
# Utility
#=========================================================================================================

# Templates

class Templates
  ###
  Returns HTML rendered using named template.
  IMPL: Templates are expected to be textual content of a DOM SCRIPT element
  which is retrieved by ID, compiled into a function, cached, and rendered
  on first-use. Subsequent access retrieves template rendering function from
  cache then rendered with template parameters.
  ###
  compiledTemplates: []
  get: (name) ->
    template = @compiledTemplates[name]
    return template if template
    elem = document.getElementById(name)
    text = $(elem).text() if elem
    @compiledTemplates[name] = Hogan.compile(text) if text
  render: (name, context) -> @get(name)?.render(context)

#=========================================================================================================
# Lib.card
#=========================================================================================================

SUITE =
  club:
    name: 'club'
    symbol: '♣'
    color: 'black'
  diamond:
    name: 'diamond'
    symbol: '♦'
    color: 'red'
  spade:
    name: 'spade'
    symbol: '♠'
    color: 'black'
  heart:
    name: 'heart'
    symbol: '♥'
    color: 'red'

SUITES = [
  SUITE.club
  SUITE.diamond
  SUITE.spade
  SUITE.heart
]

RANK = RANK =
  ace:
    name: 'ace'
    symbol: 'A'
  two:
    name: 'two'
    symbol: '2'
  three:
    name: 'three'
    symbol: '3'
  four:
    name: 'four'
    symbol: '4'
  five:
    name: 'five'
    symbol: '5'
  six:
    name: 'six'
    symbol: '6'
  seven:
    name: 'seven'
    symbol: '7'
  eight:
    name: 'eight'
    symbol: '8'
  nine:
    name: 'nine'
    symbol: '9'
  ten:
    name: 'ten'
    symbol: '10'
  jack:
    name: 'jack'
    symbol: 'J'
  queen:
    name: 'queen'
    symbol: 'Q'
  king:
    name: 'king'
    symbol: 'K'

RANKS = RANKS = [
  RANK.ace
  RANK.two
  RANK.three
  RANK.four
  RANK.five
  RANK.six
  RANK.seven
  RANK.eight
  RANK.nine
  RANK.ten
  RANK.jack
  RANK.queen
  RANK.king
]

class CardModel extends Backbone.Model
  defaults:
    front: false

class CardView extends Backbone.View
  className: 'card'
  events:
    'click': 'flip'
    # 'touchend': 'flip'

  initialize: ->

  flip: ->
    @model.set 'front', !(@model.get 'front')
    @$el.flippy
      content: @content "<div />"
      onStart: =>
        @$el.addClass 'noshadow'
      onFinish: =>
        @$el.removeClass 'noshadow'

  content: (wrap) ->
    front = @model.get 'front'
    if front
      rank = @model.get 'rank'
      suite = @model.get 'suite'
      $content = $ @options.templates.render "card-#{rank.name}",
        rank: rank
        suite: suite
      $content.addClass suite.name
    else
      $content = $ @options.templates.render "card-back"
    if wrap
      $wrap = $ wrap
      $wrap.wrapInner $content
      $content = $wrap
    $content

  render: ->
    @$el.attr 'id', @cid
    @$el.empty()
    @$el.append @content()
    @

class DeckModel extends Backbone.Collection
  initialize: (models, options) ->
    front = options.front or false
    for suite in SUITES
      for rank in RANKS
        card = new CardModel
          rank: rank
          suite: suite
          front: front
        @add card
  sort: ->
    @models = _.sortBy @models, (model) ->
      suite = model.get 'suite'
      rank = model.get 'rank'
      suiteOrder = SUITES.indexOf(suite)
      rankOrder = RANKS.indexOf(rank)
      suiteOrder * 13 + rankOrder
  shuffle: ->
    @models = _.shuffle @models

class DeckView extends Backbone.View
  setCardWidth: (pixels) ->
    fontsize = pixels * 12.5 / 200
    @$el.css
      'font-size': "#{fontsize}px"
  sort: ->
    @model.sort()
    @clear()
    @render()
  shuffle: ->
    @model.shuffle()
    @clear()
    @render()
  render: ->
    @$el.empty()
    @model.each (cardModel) =>
      cardView = new CardView
        model: cardModel
        className: "card"
        templates: @options.templates
      @$el.append cardView.render().$el
    @
  clear: ->
    @$el.empty()
    @

NAMESPACE = window ? this
NAMESPACE.PlayingCards =
  RANK: RANK
  SUITE: SUITE
  RANKS: RANKS
  SUITES: SUITES
  CardModel: CardModel
  CardView: CardView
  DeckModel: DeckModel
  DeckView: DeckView
  Templates: Templates
