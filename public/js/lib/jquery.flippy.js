/*

FLIPPY jQuery plugin (http://guilhemmarty.com/flippy)

@author : Guilhem MARTY (bonjour@guilhemmarty.com)

@version: 1.0

@changelog:

Feb 11 2012 - v1.0.1 : bug fix with IE9

Feb 11 2012 - v1.0 : First release

*/


(function($){
	var _Ang , _Step_ang , _Refresh_rate , _Depth , _W , _H , _nW , _nH , _cv_W, _cv_H, _CenterX , _CenterY , _Color , _Color_target , _Light , _Content , _Direction , _Midway , $this , _After, _Active;
	
	var _ColorsRef = {
		'aliceblue':'#f0f8ff',
		'antiquewhite':'#faebd7',
		'aqua':'#00ffff',
		'aquamarine':'#7fffd4',
		'azure':'#f0ffff',
		'beige':'#f5f5dc',
		'bisque':'#ffe4c4',
		'black':'#000000',
		'blanchedalmond':'#ffebcd',
		'blue':'#0000ff',
		'blueviolet':'#8a2be2',
		'brown':'#a52a2a',
		'burlywood':'#deb887',
		'cadetblue':'#5f9ea0',
		'chartreuse':'#7fff00',
		'chocolate':'#d2691e',
		'coral':'#ff7f50',
		'cornflowerblue':'#6495ed',
		'cornsilk':'#fff8dc',
		'crimson':'#dc143c',
		'cyan':'#00ffff',
		'darkblue':'#00008b',
		'darkcyan':'#008b8b',
		'darkgoldenrod':'#b8860b',
		'darkgray':'#a9a9a9',
		'darkgrey':'#a9a9a9',
		'darkgreen':'#006400',
		'darkkhaki':'#bdb76b',
		'darkmagenta':'#8b008b',
		'darkolivegreen':'#556b2f',
		'darkorange':'#ff8c00',
		'darkorchid':'#9932cc',
		'darkred':'#8b0000',
		'darksalmon':'#e9967a',
		'darkseagreen':'#8fbc8f',
		'darkslateblue':'#483d8b',
		'darkslategray':'#2f4f4f',
		'darkslategrey':'#2f4f4f',
		'darkturquoise':'#00ced1',
		'darkviolet':'#9400d3',
		'deeppink':'#ff1493',
		'deepskyblue':'#00bfff',
		'dimgray':'#696969',
		'dimgrey':'#696969',
		'dodgerblue':'#1e90ff',
		'firebrick':'#b22222',
		'floralwhite':'#fffaf0',
		'forestgreen':'#228b22',
		'fuchsia':'#ff00ff',
		'gainsboro':'#dcdcdc',
		'ghostwhite':'#f8f8ff',
		'gold':'#ffd700',
		'goldenrod':'#daa520',
		'gray':'#808080',
		'grey':'#808080',
		'green':'#008000',
		'greenyellow':'#adff2f',
		'honeydew':'#f0fff0',
		'hotpink':'#ff69b4',
		'indianred ':'#cd5c5c',
		'indigo  ':'#4b0082',
		'ivory':'#fffff0',
		'khaki':'#f0e68c',
		'lavender':'#e6e6fa',
		'lavenderblush':'#fff0f5',
		'lawngreen':'#7cfc00',
		'lemonchiffon':'#fffacd',
		'lightblue':'#add8e6',
		'lightcoral':'#f08080',
		'lightcyan':'#e0ffff',
		'lightgoldenrodyellow':'#fafad2',
		'lightgray':'#d3d3d3',
		'lightgrey':'#d3d3d3',
		'lightgreen':'#90ee90',
		'lightpink':'#ffb6c1',
		'lightsalmon':'#ffa07a',
		'lightseagreen':'#20b2aa',
		'lightskyblue':'#87cefa',
		'lightslategray':'#778899',
		'lightslategrey':'#778899',
		'lightsteelblue':'#b0c4de',
		'lightyellow':'#ffffe0',
		'lime':'#00ff00',
		'limegreen':'#32cd32',
		'linen':'#faf0e6',
		'magenta':'#ff00ff',
		'maroon':'#800000',
		'mediumaquamarine':'#66cdaa',
		'mediumblue':'#0000cd',
		'mediumorchid':'#ba55d3',
		'mediumpurple':'#9370d8',
		'mediumseagreen':'#3cb371',
		'mediumslateblue':'#7b68ee',
		'mediumspringgreen':'#00fa9a',
		'mediumturquoise':'#48d1cc',
		'mediumvioletred':'#c71585',
		'midnightblue':'#191970',
		'mintcream':'#f5fffa',
		'mistyrose':'#ffe4e1',
		'moccasin':'#ffe4b5',
		'navajowhite':'#ffdead',
		'navy':'#000080',
		'oldlace':'#fdf5e6',
		'olive':'#808000',
		'olivedrab':'#6b8e23',
		'orange':'#ffa500',
		'orangered':'#ff4500',
		'orchid':'#da70d6',
		'palegoldenrod':'#eee8aa',
		'palegreen':'#98fb98',
		'paleturquoise':'#afeeee',
		'palevioletred':'#d87093',
		'papayawhip':'#ffefd5',
		'peachpuff':'#ffdab9',
		'peru':'#cd853f',
		'pink':'#ffc0cb',
		'plum':'#dda0dd',
		'powderblue':'#b0e0e6',
		'purple':'#800080',
		'red':'#ff0000',
		'rosybrown':'#bc8f8f',
		'royalblue':'#4169e1',
		'saddlebrown':'#8b4513',
		'salmon':'#fa8072',
		'sandybrown':'#f4a460',
		'seagreen':'#2e8b57',
		'seashell':'#fff5ee',
		'sienna':'#a0522d',
		'silver':'#c0c0c0',
		'skyblue':'#87ceeb',
		'slateblue':'#6a5acd',
		'slategray':'#708090',
		'slategrey':'#708090',
		'snow':'#fffafa',
		'springgreen':'#00ff7f',
		'steelblue':'#4682b4',
		'tan':'#d2b48c',
		'teal':'#008080',
		'thistle':'#d8bfd8',
		'tomato':'#ff6347',
		'turquoise':'#40e0d0',
		'violet':'#ee82ee',
		'wheat':'#f5deb3',
		'white':'#ffffff',
		'whitesmoke':'#f5f5f5',
		'yellow':'#ffff00',
		'yellowgreen':'#9acd32'
	};
	
	$.fn.flippy = function(opts){
		if(!_Active){
			opts = $.extend({
				active_class:"flippy-active",
				step_ang:10,
				refresh_rate:15,
				duration:300,
				depth:0.12,
				color_target:"white",
				light:60,
				content:"",
				direction:"LEFT",
				onStart:function(){},
				onMidway:function(){},
				onFinish:function(){}
			}, opts);
			_Active_class="flippy-active";
			_Active = (_Active)? _Active : '';
			_Ang = 0;
			_Step_ang = (opts.refresh_rate/opts.duration)*200;
			_Refresh_rate = opts.refresh_rate;
			_Depth = opts.depth;
			_W = '';
			_H = '';
			_nW = '';
			_nH = '';
			_CenterX = (_CenterX != '')? _CenterX : '';
			_CenterY = (_CenterY != '')? _CenterY : '';
			_Color = (_Color != '')? _Color : '';
			_Color_target = convertColor(opts.color_target);
			_Direction = opts.direction;
			_Light = opts.light;
			_Content = opts.content;
			_Before = opts.onStart;
			_Midway = opts.onMidway;
			_After = opts.onFinish;
			_isIE = $.browser.msie;
			_isIE9 = ($.browser.version == "9.0");
			_isIE8 = ($.browser.version == "8.0");
			_isIE7 = ($.browser.version == "7.0");
			_isIE6 = ($.browser.version == "6.0");
			
			
			var _i = 1;
			return this.each(function(){
				$this = $(this);
				_nW = $this.width();
				_nH = $this.height();
				_W = $this.outerWidth();
				_H = $this.outerHeight();
				_Active = true;
				_Before();
				
				_Content = (typeof _Content == "object") ? _Content.html() : _Content;
				_Color = convertColor($this.css("background-color"));
				$this
					.empty()
					.data("color",$this.css("background-color"))
					.css({
						 "background":"none",
						 "position":"relative",
						 "overflow":"visible"
					});
					
					switch(_Direction){
						case "TOP":
							_CenterX = (Math.sin(Math.PI/2)*_nW*_Depth);
							_CenterY = _H/2;
							var cv_pattern = '<canvas id="flippy" width="'+(_W+(2*_CenterX))+'" height="'+_H+'"></canvas>';
							new_flippy(cv_pattern);
							$this.find("#flippy")
								.css({
									 "position":"absolute",
									 "top":"0",
									 "left":"-"+_CenterX+"px"
								});
						break;
						case "BOTTOM":
							_CenterX = (Math.sin(Math.PI/2)*_nW*_Depth);
							_CenterY = _H/2;
							var cv_pattern = '<canvas id="flippy" width="'+(_W+(2*_CenterX))+'" height="'+_H+'"></canvas>';
							new_flippy(cv_pattern);
							$this.find("#flippy")
								.css({
									 "position":"absolute",
									 "top":"0",
									 "left":"-"+_CenterX+"px"
								});
						break;
						case "LEFT":
							_CenterY = (Math.sin(Math.PI/2)*_nH*_Depth);
							_CenterX = _W/2;
							var cv_pattern = '<canvas id="flippy" width="'+_W+'" height="'+(_H+(2*_CenterY))+'"></canvas>';
							new_flippy(cv_pattern);
							$this.find("#flippy")
								.css({
									 "position":"absolute",
									 "top":"-"+_CenterY+"px",
									 "left":"0"
								});
						break;
						case "RIGHT":
							_CenterY = (Math.sin(Math.PI/2)*_nH*_Depth);
							_CenterX = _W/2;
							var cv_pattern = '<canvas id="flippy" width="'+_W+'" height="'+(_H+(2*_CenterY))+'"></canvas>';
							new_flippy(cv_pattern);
							$this.find("#flippy")
								.css({
									 "position":"absolute",
									 "top":"-"+_CenterY+"px",
									 "left":"0"
								});
						break;
					}
				drawFlippy();
			});
		}
	}
	
	function new_flippy(cv_pattern){
		if(_isIE && !_isIE9){
			if($this.attr('id') == ""){
				$this.attr("id","flippy_container");
			}
			var $that = document.getElementById($this.attr('id'));
			var cv = document.createElement(cv_pattern);
			
			$that.appendChild(cv);
		}else{
			$this.append(cv_pattern);
		}
	}
	
	function drawFlippy(){
		_Ang += _Step_ang;
		
		if(_Ang > 90 && _Ang <= (90+_Step_ang)){
			_Midway();
		}
		
		_Ang = (_Ang > (180+_Step_ang)) ? _Ang-(180+_Step_ang) : _Ang;
		var PI = Math.PI
		var rad = (_Ang/180)*PI;
		
		var canvas = document.getElementById("flippy");
		if(_isIE && !_isIE9){G_vmlCanvasManager.initElement(canvas);}
		var ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, _W+(2*_CenterX), _H+(2*_CenterY));
		ctx.beginPath();
		var deltaH = Math.sin(rad)*_H*_Depth;
		var deltaW = Math.sin(rad)*_W*_Depth;
		
		switch(_Direction){
			case "LEFT" :
				var X = Math.cos(rad)*(_W/2);
				ctx.fillStyle = (_Ang > 90) ? changeColor(_Color_target,Math.floor(Math.sin(rad)*_Light)) : changeColor(_Color,-Math.floor(Math.sin(rad)*_Light));
				ctx.moveTo(_CenterX-X,_CenterY+deltaH);//TL
				ctx.lineTo(_CenterX+X,_CenterY-deltaH);//TR
				ctx.lineTo(_CenterX+X,_CenterY+_H+deltaH);//BR
				ctx.lineTo(_CenterX-X,_CenterY+_H-deltaH);//BL
				ctx.lineTo(_CenterX-X,_CenterY);//loop
				ctx.fill();
			break;
			case "RIGHT" :
				var X = Math.cos(rad)*(_W/2);
				ctx.fillStyle = (_Ang > 90) ? changeColor(_Color_target,-Math.floor(Math.sin(rad)*_Light)) : changeColor(_Color,Math.floor(Math.sin(rad)*_Light));
				ctx.moveTo(_CenterX+X,_CenterY+deltaH);//TL
				ctx.lineTo(_CenterX-X,_CenterY-deltaH);//TR
				ctx.lineTo(_CenterX-X,_CenterY+_H+deltaH);//BR
				ctx.lineTo(_CenterX+X,_CenterY+_H-deltaH);//BL
				ctx.lineTo(_CenterX+X,_CenterY);//loop
				ctx.fill();
			break;
			case "TOP" :
				var Y = Math.cos(rad)*(_H/2);
				ctx.fillStyle = (_Ang > 90) ? changeColor(_Color_target,-Math.floor(Math.sin(rad)*_Light)) : changeColor(_Color,Math.floor(Math.sin(rad)*_Light));
				ctx.moveTo(_CenterX+deltaW,_CenterY-Y);//TL
				ctx.lineTo(_CenterX-deltaW,_CenterY+Y);//TR
				ctx.lineTo(_CenterX+_W+deltaW,_CenterY+Y);//BR
				ctx.lineTo(_CenterX+_W-deltaW,_CenterY-Y);//BL
				ctx.lineTo(_CenterX,_CenterY-Y);//loop
				ctx.fill();
			break;
			case "BOTTOM" :
				var Y = Math.cos(rad)*(_H/2);
				ctx.fillStyle = (_Ang > 90) ? changeColor(_Color_target,Math.floor(Math.sin(rad)*_Light)) : changeColor(_Color,-Math.floor(Math.sin(rad)*_Light));
				ctx.moveTo(_CenterX+deltaW,_CenterY+Y);//TL
				ctx.lineTo(_CenterX-deltaW,_CenterY-Y);//TR
				ctx.lineTo(_CenterX+_W+deltaW,_CenterY-Y);//BR
				ctx.lineTo(_CenterX+_W-deltaW,_CenterY+Y);//BL
				ctx.lineTo(_CenterX,_CenterY+Y);//loop
				ctx.fill();
			break;
		}
		
		if(_Ang < 180){
			setTimeout(drawFlippy,_Refresh_rate);
		}else{
			_Active = null;
			$this
				.css({
					 "background":_Color_target
				})
				.append(_Content)
				.find("#flippy")
					.remove();
				if($this.attr("id") == "flippy_container"){
					$this.attr("id","");
				}
			_After();
		}
	}
	
	function convertColor(thecolor){
		try{
			thecolor = (eval('_ColorsRef.'+thecolor) != null)? eval('_ColorsRef.'+thecolor) : thecolor;
		}catch(err){
		
		}
	
		if(thecolor.substr(0,4) == "rgb("){
			thecolor = "#"
				+toHex(eval(thecolor.substr(4,thecolor.length).split(',')[0]))
				+toHex(eval(thecolor.substr(3,thecolor.length).split(',')[1]))
				+toHex(eval(thecolor.substr(3,thecolor.length-4).split(',')[2]))
		};
		return thecolor;
	}
	
	function toDec(hex){
		var hexL = hex.length;
		var dec = 0;
		for(i=0;i<hexL;i++){
			var hexPow = Math.pow(16,hexL-i-1);
			var daHex = hex.substr(i,1)
			switch(daHex.toUpperCase()){
				case "A" : dec += 10*hexPow;break;
				case "B" : dec += 11*hexPow;break;
				case "C" : dec += 12*hexPow;break;
				case "D" : dec += 13*hexPow;break;
				case "E" : dec += 14*hexPow;break;
				case "F" : dec += 15*hexPow;break;
				default : dec += eval(daHex)*hexPow;break;
			};
		}
		return dec;
	}
	
	function toHex(dec){
		var modulos = new Array();
		while(Math.floor(dec)>16){
			modulos.push(dec%16);
			dec = Math.floor(dec/16);
		}
		
		var Hex;
		switch(dec){
			case 10 : Hex = "A"; break;
			case 11 : Hex = "B"; break;
			case 12 : Hex = "C"; break;
			case 13 : Hex = "D"; break;
			case 14 : Hex = "E"; break;
			case 15 : Hex = "F"; break;
			default : Hex = ""+dec; break;
		}
		for(i=modulos.length-1;i>=0;i--){
			switch(modulos[i]){
				case 10 : Hex += "A"; break;
				case 11 : Hex += "B"; break;
				case 12 : Hex += "C"; break;
				case 13 : Hex += "D"; break;
				case 14 : Hex += "E"; break;
				case 15 : Hex += "F"; break;
				default : Hex += ""+modulos[i]; break;
			}
		}
		if(Hex.length == 1 ){
			return "0"+Hex;
		}else{
			return Hex;
		}
	}
	
	function changeColor(colorHex,step){
		var redHex = colorHex.substr(1,2);
		var greenHex = colorHex.substr(3,2);
		var blueHex = colorHex.substr(5,2);
		
		var redDec = (toDec(redHex)+step > 255) ? 255 : toDec(redHex)+step;
		var greenDec = (toDec(greenHex)+step > 255) ? 255 : toDec(greenHex)+step;
		var blueDec = (toDec(blueHex)+step > 255) ? 255 : toDec(blueHex)+step;
		
		redHex = (redDec <= 0) ? "00" : toHex(redDec);
		greenHex = (greenDec <= 0) ? "00" : toHex(greenDec);
		blueHex = (blueDec <= 0) ? "00" : toHex(blueDec);
		
		return "#"+redHex+greenHex+blueHex;
	}
	
})(jQuery)