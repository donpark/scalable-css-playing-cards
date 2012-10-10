/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'suit\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-suit-spades' : '&#x2660;',
			'icon-suit-clubs' : '&#x2663;',
			'icon-suit-diamonds' : '&#x2666;',
			'icon-suit-heart' : '&#x2665;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-suit-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};