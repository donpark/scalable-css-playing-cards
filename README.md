# Intro

This project is a heavily modified version of Zack Waugh's [Helveticards](http://zachwaugh.com/helveticards/index.html) with following notable differences:

1. Cards are scalable.
2. Card size may be specific to individual cards or set of cards.
3. Face cards have standard Anglo-American court images rendered from Chris Aguilar's [vectorized-playing-cards](http://code.google.com/p/vectorized-playing-cards/) SVG files.
4. Cards can be flipped to show the back-side.

At lesat for now, this is not a *fire-and-forget* project to me so please do suggest features and file issues.

# Compatibility

Supported browsers are:

* Recent versions of Chrome, Firefox, Safari
* IE9
* Mobile Safari [1]

[1] Renders and resizes just fine on Mobile Safari but dat-gui gets quirky to use.

# Notable Issues

* [Android has *weird* clipping, likely a font metric difference issue](issues/1)
