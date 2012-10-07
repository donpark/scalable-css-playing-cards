# requestAnimationFrame/cancelAnimationFrame polyfill

for vendor in ['ms', 'moz', 'webkit', 'o']
  break if window.requestAnimationFrame
  window.requestAnimationFrame = window["#{vendor}RequestAnimationFrame"]
  window.cancelAnimationFrame = window["#{vendor}CancelAnimationFrame"] or window["#{vendor}CancelRequestAnimationFrame"]

if window.requestAnimationFrame
  return if window.cancelAnimationFrame
  browserRaf = window.requestAnimationFrame
  canceled = {}
  window.requestAnimationFrame = (callback) ->
    id = browserRaf (time) ->
      if id of canceled then delete canceled[id]
      else callback time
  window.cancelAnimationFrame = (id) ->
    canceled[id] = true
else
  targetTime = 0
  window.requestAnimationFrame = (callback) ->
    targetTime = Math.max targetTime + 16, currentTime = +new Date
    window.setTimeout (-> callback +new Date), targetTime - currentTime
  window.cancelAnimationFrame = (id) -> clearTimeout id
