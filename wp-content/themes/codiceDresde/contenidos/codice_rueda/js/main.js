var maya = {};

jQuery.fn.ForceNumericOnly =
	function()
{
	return this.each(function()
		{
			$(this).keydown(function(e)
				{
					var key = e.charCode || e.keyCode || 0;
					// allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
					// home, end, period, and numpad decimal
					return (
						key == 8 || 
						key == 9 ||
						key == 13 ||
						key == 46 ||
						key == 45 ||
						key == 110 ||
						key == 109 ||
						key == 189 ||
						(key >= 35 && key <= 40) ||
						(key >= 48 && key <= 57) ||
						(key >= 96 && key <= 105));
				});
		});

};


function init() {
	maya.stage = new createjs.Stage("canvas");
	createjs.MotionGuidePlugin.install();
	maya.stage.enableMouseOver();

	maya.c_small = new createjs.Bitmap("img/tzolkin_pequeno.png");
	maya.c_small.x = 649 +307/2;
	maya.c_small.y = 276 + 306/2;
	maya.stage.addChild(maya.c_small);
	maya.c_small.regX=307/2;
	maya.c_small.regY=306/2;
	maya.c_small.image.onload = function() {
		maya.stage.update();
	}

	maya.c_medium = new createjs.Bitmap("img/tzolkin_grande.png");
	maya.c_medium.x = 465+567/2 ;
	maya.c_medium.y = 149 + 566/2 ;
	maya.stage.addChild(maya.c_medium);
	maya.c_medium.regX=567/2;
	maya.c_medium.regY=566/2;
	maya.c_medium.image.onload = function() {
		maya.stage.update();
	}

	maya.c_grande = new createjs.Bitmap("img/tramo_verde.png");
	maya.c_grande.x = 1051 ;
	maya.c_grande.y = 0;
	maya.stage.addChild(maya.c_grande);
	maya.c_grande.image.onload = function() {
		maya.stage.update();
	}

	maya.caja_larga =  new createjs.Bitmap("img/1_kin_uinal.png");
	maya.caja_larga.x = 30;
	maya.caja_larga.y = 595;
	maya.stage.addChild(maya.caja_larga);
	maya.caja_larga.image.onload = function() {
		maya.stage.update();
	}

	maya.caja_corta =  new createjs.Bitmap("img/2_tzolkin_tzolkin.png");
	maya.caja_corta.x = 30;
	maya.caja_corta.y = 422;
	maya.stage.addChild(maya.caja_corta);
	maya.caja_corta.image.onload = function() {
		maya.stage.update();
	}


	maya.caja_gregoriano =  new createjs.Bitmap("img/3_gregorian.png");
	maya.caja_gregoriano.x = 30;
	maya.caja_gregoriano.y = 244;//635;
	maya.stage.addChild(maya.caja_gregoriano);
	maya.caja_gregoriano.image.onload = function() {
		maya.stage.update();
	}


	maya.caja1 =  new createjs.Bitmap("img/blue.png");

	// Arrow 
	maya.arrow =  new createjs.Bitmap("img/flecha_haab.png");
	maya.arrow.x = 1158;
	maya.arrow.y = 369;
	maya.stage.addChild(maya.arrow);
	maya.arrow.image.onload = function () {
		maya.stage.update();
	}

	//Text
	maya.haab = new createjs.Text("HAAB", "22px Ubuntu", "#1b807f");
	maya.haab.x = 1192;
	maya.haab.y = 439;
	maya.stage.addChild(maya.haab);

	//Text
	maya.txt_rueda = new createjs.Text("TZOLKIN", "22px Ubuntu", "#dde0bb");
	maya.txt_rueda.x = 757;
	maya.txt_rueda.y = 422;
	maya.stage.addChild(maya.txt_rueda);

	maya.marker = new createjs.Bitmap("img/fecha.png");
	maya.marker.x = 886 ;
	maya.marker.y = 412;
	maya.stage.addChild(maya.marker);

	maya.actual_haab = 0;

	// Cajas de Texto
	// CUENTA LARGA
	// Create and place our text field on the canvas

	createjs.Ticker.on("tick", tick);
	createjs.Ticker.setFPS(140);
	// Another
	function tick(event) {
		maya.stage.update();
	}

	setEvents();
	maya.wheel = [];
	//createWheel (10, 0, maya.stage );

	//Validate inputs
	jQuery("input").ForceNumericOnly();

	jQuery("input").change (function() {
		var max = parseInt($(this).attr("max"));
		var value = parseInt($(this).val());

		if (isNaN(value)) {
		    value = 1;
		}

		var id = $(this).attr("id");

		if (id == "y") {
			
			$(this).val( value );
			if  (  value < -3113 ) {
				$(this).val(-3113);
			}
			
			if (value > 4772) {
				$(this).val(4772);
			}

			
		} else {
			
			$(this).val(Math.abs(parseInt(value)));
			if ( value > max ) {
				$(this).val(max);
			}
		}


		changeInput(this);
	});


	maya.today = new Date();
	var day = new Date(maya.today).getDate();
	var month = (new Date(maya.today).getMonth())+1;
	var year = new Date(maya.today).getFullYear();

	$("#d").val(day);
	$("#m").val(month);
	$("#y").val(year);

	changeInput($("#y"));



	$( window ).resize(onResize);
	onResize();

}


function onResize () {
	$( window ).width();
	//$("#content").css("margin-left", ($(window).width() - 1280)/2 );
}

function changeInput(input) {

	var parent_ = $(input).parent().attr("class");
	if (parent_ == "inputsCuentaLarga") {
		var d = {};
		$('.inputsCuentaLarga input').each( function () {
			var id=$(this).attr("id");
			d[id] = parseInt(this.value) ;
		});
		var fecha = mayaToGregoriano(d.baktun, d.katun, d.tun, d.uinal, d.kin);

		$("#d").val(fecha.DAY);
		$("#m").val(fecha.MONTH);
		$("#y").val(fecha.YEAR);

	} else {
		var day  = parseInt($("#d").val());
		var month = parseInt($("#m").val());
		var year = parseInt($("#y").val());
		var fecha =  gregorianoToMaya(day, month, year);

		var fecha2 =  mayaToGregoriano(fecha.baktun, fecha.katun, fecha.tun, fecha.uinal, fecha.kin);


		$("#kin").val(fecha.kin);
		$("#uinal").val(fecha.uinal);
		$("#tun").val(fecha.tun);
		$("#katun").val(fecha.katun);
		$("#baktun").val(fecha.baktun);
	}

	var dias_t =   maya_date.dias_total - 584283;
	var tzo, tzo_n;


	if ( ((dias_t+4)%13)==0 ) 
		tzo = 13 ;
	else  
		tzo = (dias_t + 4) % 13;

	tzo_n = dias_t % 20;

	var n = (dias_t-16);
	var d = 365;
	var habb = (n - d*Math.floor(n/d)) -1 ;
	if (habb==-1) habb = 364;


	 
	maya.stage.removeChild(maya.dia_maya);
	maya.stage.removeChild(maya.mes_maya);
	maya.stage.removeChild(maya.year_maya);

	maya.dia_maya = new createjs.Bitmap ("img/dias/"+tzo+".png");
	maya.dia_maya.x = 49;
	maya.dia_maya.y = 460;
	maya.stage.addChild(maya.dia_maya);

	maya.mes_maya = new createjs.Bitmap ("img/meses/"+tzo_n+".png");
	maya.mes_maya.x = 121;
	maya.mes_maya.y = 460;
	maya.stage.addChild(maya.mes_maya);

	maya.year_maya = new createjs.Bitmap ("img/haab/"+habb+".png");
	maya.year_maya.x = 200;
	maya.year_maya.y = 460;

	maya.stage.addChild(maya.year_maya);

	moveRuedasSelf(tzo, tzo_n, habb);


	maya.stage.addChild(maya.marker);
	


}

var d_start = 0;
var d_end =  365;

function setEvents () {
	/*  maya.c_grande.on("mousedown", function(evt) {
	maya.y_init = evt.stageY;
    });
    maya.c_grande.on("pressmove", function(evt) {
	var y = evt.stageY;
	moveEngranaje(y-maya.y_init, "big");
	maya.y_init = y;
    });*/
	maya.c_grande.cursor ="move" ;



	var a= new Impetus({
		source: document.getElementById("container_bar"),
		friction:.95,
		update: function(x, y) {
			if (!maya.last_y) maya.last_y = 0;
			moveEngranaje(y-maya.last_y, "big");
			maya.last_y  = y;

			maya.is_rolling =  true;
			calculateHaab();

		},
		end: function () {
			maya.is_rolling = false;
			calculateHaab();
			$("#d").trigger("change");
		}

	});


	$(".ayuda").hover(function () {
	    $(this).css("background-image", "url(img/info_over.png)");
		
	});

	$(".ayuda").mouseleave(function () {
	    $(this).css("background-image", "url(img/info_off.png)");
	});


	$(".ayuda").click(function () {
	    $("#help_image").show();
	    $("body").css("background", "rgb(26,26  ,23  )");;
	});

	$("#help_image").click (function () {
	    $("#help_image").hide();
	    $("body").css("background", "#30302D");;
	}) ;



	
	/*maya.c_medium.cursor ="move" ;
	maya.c_medium.on("mousedown", function(evt) {
		maya.y_init = evt.stageY;
		maya.x_init = evt.stageX;
	});
	maya.c_medium.on("pressmove", function(evt) {
		var y = evt.stageY;
		var x = evt.stageX;

		var angle = calculateAngle(maya.x_init, maya.y_init, x, y);

		//if (y > maya.c_medium.y) {
		moveEngranaje(angle, "medium");
//}
//else 
//moveEngranaje(angle, "medium");
		maya.x_init = x;
		maya.y_init = y;

	});
	maya.c_medium.cursor ="move" ;
	*/

}
function createWheel ( range, day ) {

	maya.actual_haab = day;

	if (maya.wheel_container) {
		for (var i =0 ; i < maya.wheel.length; i++ )  {
			maya.wheel_container.removeChildAt(i);
		}
	    
	}


	delete maya.wheel;
	delete maya.wheel_container;
	maya.wheel = [];
	

	maya.wheel_container = new createjs.Container();    
	for (var i = -range; i<= range; i++) {
		var day_ =  getDayfromPosition(day, i);
		maya.wheel.push(createDay(469 + 92*(i)  , day_, maya.wheel_container));
	}
	maya.stage.addChild(maya.wheel_container);
}

function getDayfromPosition ( day, position ) {
	var index = day-position;
	if (index<0) 
		index =  365+ index ;

	if (index >= 365) index = index-365;
	return index;
}

function createDay (position, day,  parent) {
	var center_position =  465;
	var w_container =  92;
	var container = new createjs.Container();
	container.x = 1053;
	container.regY =  92/2;
	container.y = position;
	container.day = day;

	var imagen = new createjs.Bitmap("img/haab/"+day+".png");
	imagen.x =  45; imagen.y = 12;
	imagen.regX = 78/2; imagen.regY = 40/2;

	container.addChild(imagen);

	/*
	var text = new createjs.Text(day, "10px Arial", "#ff7700");
	text.x =  0, text.y = 0;
	container.addChild(text);*/

	var engrane = new createjs.Bitmap("img/haab_engrane.png");
	engrane.x = 0; engrane.y = 0;
	engrane.regX=14; engrane.regy=27/2;
	container.addChild(engrane);

	parent.addChild(container);
	maya.stage.addChild(maya.marker);	
	return container;
}

function moveWheel (pixel ) {
	for (var i =0 ; i < maya.wheel.length; i++ ) {
		maya.wheel[i].y = maya.wheel[i].y + pixel;

	}

	var first = maya.wheel[0];
	var last  = maya.wheel[maya.wheel.length-1];

	if (first.y > (-92*5) )  {
		//Metemos uno al principio y sacamos otro del último
		var new_day  = createDay(first.y-92, getDayfromPosition(first.day, -1),  maya.wheel_container );
		maya.wheel.unshift(new_day);
		maya.wheel.pop();
	}

	if (last.y <  (800+92*5) ) {
		//metemos uno al final y sacamos uno al principio
		var new_day  = createDay(last.y+92, getDayfromPosition(last.day, 1),  maya.wheel_container );
		maya.wheel.push(new_day);
		maya.wheel.shift();
	}
}

function moveEngranaje (step, target) {
	var w_grande=  92;
	var r_medium =  18;
	var r_small =  27.69;

	var percent = 0; 

	if (target=="big") {
		percent = (step/w_grande);
		moveWheel(step);
		maya.c_small.rotation =  maya.c_small.rotation + r_small*percent;
		maya.c_medium.rotation =  maya.c_medium.rotation + r_medium*percent;
	}
	if (target == "medium") {
		percent = (step/r_medium);
		moveWheel(w_grande*percent);
		maya.c_small.rotation =  maya.c_small.rotation + r_small*percent;
		maya.c_medium.rotation =  maya.c_medium.rotation + step;
	}
	if (target == "small") {
		percent = (step/r_small);
		moveWheel(w_grande*percent);
		maya.c_small.rotation =  maya.c_small.rotation + step;
		maya.c_medium.rotation =  maya.c_medium.rotation + r_medium*percent;
	}

}

function calculateAngle(x1,y1,x2,y2){
	// cos -1 (2r2 -c2     /    2r2)
	//
	var c =  Math.sqrt(Math.pow( (x2-x1), 2) + Math.pow(y2-y1,2));
	var r = Math.sqrt(Math.pow( (maya.c_medium.x - x2  ), 2) + Math.pow( maya.c_medium.y  - y2,2));

	return Math.acos((2*r*r-(c*c))/(2*r*r) ) ;  
}

function moveRuedasSelf (dia, mes, year_mata) {
	maya.c_small.rotation = (27.69)*(dia-1);
	maya.c_medium.rotation = (360/20) *(mes);

	maya.stage.removeChild(maya.wheel_container);
	delete maya.wheel_container;

	createWheel ( 10, year_mata, maya.stage );
}





// Algoritmo Gregoriano Maya


var ad = 0 ;
var md = 0;
var A = 0;
var B = 0;
var C= 0 ;
var D = 0;
var DJ = 0;


var day;
var month;
var year;

var baktun;
var katun ;
var tun ;
var uinal;
var kin ;

var date_maya = {};
function gregorianoToMaya(_day,_month,_year) {

	day = _day;
	month = _month;
	year =  _year;


	ad = month<3?year-1:year;
	md = month<3?month+12:month;
	A = Math.trunc(ad/100);
	B = (  (year>1582)+((year==1582)*(month>10))+((year==1582)*(month==10)*(day>=15))      )  ?  2-A+ Math.trunc(A/4) : 0      ;
	C = (ad < 0) ? Math.trunc((365.25*ad)-0.75) :  Math.trunc(  365.25*ad  ) ;
	D   = Math.trunc (  30.6001*(md+1)  ); 
	DJ  = B + C + D + day + 1720994.5 + .5;
	

	baktun = ((DJ-584283+0.5) / 144000).toFixed(14); 
	katun = (((baktun- Math.trunc(baktun))*144000)/7200).toFixed(14);
	tun  = (((katun-Math.trunc(katun))*7200/360)).toFixed(14);
	uinal  = (((tun-Math.trunc(tun))*360/20)).toFixed(14);
	kin = (((uinal-Math.trunc(uinal))*20)).toFixed(14);


	if (day>31 || month > 12) return false;

	if (Math.trunc(baktun) > 19)
		return false; 
	else 
		date_maya.baktun = Math.trunc(baktun);


	if (   Math.trunc(katun) > 19 )
		date_maya.katun = date_maya.baktun + 1;
	else 
		date_maya.katun = Math.trunc(katun);

	if (   Math.trunc(tun) > 19 )
		date_maya.tun = date_maya.katun + 1;
	else 
		date_maya.tun = Math.trunc(tun);

	if (   Math.trunc(uinal) > 17 )
		date_maya.uinal = date_maya.tun + 1;
	else 
		date_maya.uinal = Math.trunc(uinal);

	if (   Math.trunc(kin) > 19 )
		date_maya.kin = date_maya.uinal + 1;
	else 
		date_maya.kin = Math.trunc(kin);


	return date_maya;



}

function getTzolkin() {


}

var maya_date ={} ;
function mayaToGregoriano (baktun, katun,tun,uinal,kin) {
	maya_date.dias_total  =  baktun*144000+katun*7200+tun*360+uinal*20+kin + 584283;

	maya_date.I = Math.trunc(maya_date.dias_total+0.5);
	maya_date.F = maya_date.dias_total+0.5-maya_date.I;
	maya_date.A = Math.trunc((maya_date.I-1867216.25)/36524.24);
	maya_date.B = maya_date.I>2299160? maya_date.I+1+maya_date.A-Math.trunc(maya_date.A/4):maya_date.I;
	maya_date.C = maya_date.B + 1524;
	maya_date.D = Math.trunc((maya_date.C-122.1)/365.25);
	maya_date.E = (Math.trunc(365.25*maya_date.D));
	maya_date.G = Math.trunc(((maya_date.C -  maya_date.E)/30.6001 ));


	maya_date.DAY = maya_date.C - maya_date.E + maya_date.F - Math.trunc ( 30.6001*maya_date.G )-0.5;
	maya_date.MONTH = ( maya_date.G < 13.5  ) ?  maya_date.G -1 : maya_date.G - 13 ;
	maya_date.YEAR = ( maya_date.MONTH > 2.5  ) ?  maya_date.D - 4716 : maya_date.D - 4715 ;


	return maya_date;

}

function diasTotalGregoriano (diff) {
	
	maya_date.dias_total =  maya_date.dias_total + diff ;
	maya_date.I = Math.trunc(maya_date.dias_total+0.5);
	maya_date.F = maya_date.dias_total+0.5-maya_date.I;
	maya_date.A = Math.trunc((maya_date.I-1867216.25)/36524.24);
	maya_date.B = maya_date.I>2299160? maya_date.I+1+maya_date.A-Math.trunc(maya_date.A/4):maya_date.I;
	maya_date.C = maya_date.B + 1524;
	maya_date.D = Math.trunc((maya_date.C-122.1)/365.25);
	maya_date.E = (Math.trunc(365.25*maya_date.D));
	maya_date.G = Math.trunc(((maya_date.C -  maya_date.E)/30.6001 ));


	maya_date.DAY = maya_date.C - maya_date.E + maya_date.F - Math.trunc ( 30.6001*maya_date.G )-0.5;
	maya_date.MONTH = ( maya_date.G < 13.5  ) ?  maya_date.G -1 : maya_date.G - 13 ;
	maya_date.YEAR = ( maya_date.MONTH > 2.5  ) ?  maya_date.D - 4716 : maya_date.D - 4715 ;

	return maya_date;
}


function calculateHaab () {
	for (var i =0 ; i < maya.wheel.length; i++ )  {


		var limit_i = 465-20;
		var limit_k = 465+20;



		if (   maya.wheel[i].y > limit_i &&  maya.wheel[i].y< limit_k   ) {


			if  (  maya.actual_haab  != maya.wheel[i].day   ) {


				var diff ;
				if (maya.actual_haab > 330 && maya.wheel[i].day < 100 ) {
					// Hay que sumar.
					diff =365- maya.actual_haab + maya.wheel[i].day;
				} else if  (maya.actual_haab < 130 && maya.wheel[i].day > 330 )  {
					diff = -maya.actual_haab - (365- maya.wheel[i].day);
				} else {
					diff = (maya.wheel[i].day - maya.actual_haab  );
				}



				/*
				var day = parseInt($("#d").val());
				var month = parseInt($("#m").val()-1);
				var year = parseInt($("#y").val());

				var new_date = new Date(year, month, day);

				new_date = new_date.setDate(new_date.getDate() + diff );

				var day = new Date(new_date).getDate();
				var month = (new Date(new_date).getMonth())+1;
				var year = new Date(new_date).getFullYear();

				$("#d").val(day);
				$("#m").val(month);
				$("#y").val(year);
				*/

				// New algorithm
				var date = diasTotalGregoriano(diff);

				$("#d").val(date.DAY);
				$("#m").val(date.MONTH);
				$("#y").val(date.YEAR);

				

				maya.actual_haab = maya.wheel[i].day;

				//c_small
				var grade_small = getGrades(maya.c_small.rotation);
				var tzolkin =  Math.round((grade_small/27.69+1));

				//c_medium
				var grade_medium = getGrades (maya.c_medium.rotation);
				var tzolkin_n = Math.round((grade_medium/18));
				//haabConverter();
			}
		}   
	}


}

function getGrades ( grades ) {
	var grades = grades%360;
	if (grades < 0 )
		grades = 360 +  grades;

	return grades;
}
