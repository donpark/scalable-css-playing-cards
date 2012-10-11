# Suit font

Suit font was created in following steps, documented here for the purpose of maintenance:

1. Isolate suit symbols from Chris Aguilar's [vectorized-playing-cards](http://code.google.com/p/vectorized-playing-cards/) SVG files as individual SVG files of same dimensions as Arial suit characters in points (height of 2048 and varying widths).

2. Using trial version of [Glyphs](http://glyphsapp.com/) for Mac, created new font with same metrics.

3. Create four new glyphs mapped to appropriate Unicode codepoints (spade=U+2660,club= U+2663, heart=U+2665, diamond=U+2666).

4. Import suit symbols in SVG format to corresponding glyphs then position them to approximately same position as Arial suit characters.

5. Save as `suite.glyphs` and Export to `Suit-Regular.otf` file.

6. Use [CodeAndMore @font-face generator](http://fontface.codeandmore.com/) to convert `Suit-Regular.otf` to a set `@font-face` compatible set of font files.

