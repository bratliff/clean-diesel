// JavaScript Document


var VERBOSE;
var firstSearch = true;

$(document).ready(function(){
    $('body').css('display', 'block');
	if(typeof console === "undefined") {
	    console = {
	        log: function() { },
	        debug: function() { },
	    };
	}

VERBOSE = false;

var currentContainer = 1;
var animSpeed = 500;
var runOil;
var hashCheck;
var scroll_timer;
var setURL;
var currentHash;
var resetTimer;
var finalReset;
var currentPos;
var howFar;

/* this function is for positioning page after back button is used*/
pagePosition();


function pagePosition() {
	var target;
	if (location.hash.indexOf("#mpgs") !=-1) {
		target = "#mpg_frame";
	} else if (location.hash.indexOf("#performance") !=-1)  {
		target = "#performance_frame";
	} else if (location.hash.indexOf("#environment") !=-1) {
		target = "#environment_frame";
	}
	
	if (location.hash.indexOf("-left") !=-1) {
	  $(target).find(".horizontal").css("left","-100px");
	} else if (location.hash.indexOf("-right") !=-1) {
		$(target).find(".horizontal").css("left","-2500px");
	}
};

/* Scroll event handler */



    $(window).bind('scroll',function(e){
    	backgroundScroller();
		
		
	});
	
	jQuery(window).bind('scrollstart', function(){
		/*$("#scroll_down_fade").hide("fast");*/
		clearTimeout(setURL);
		clearTimeout(resetTimer);
		
		
		});
		
		jQuery(window).bind('scrollstop', function(e){
			clearTimeout(finalReset);
		    resetTimer = setTimeout(resetWindow, 100);	
		}); 
	
	
	function resetWindow(){
		clearTimeout(resetTimer);
		$(".nav a").removeClass('current_button');
		howFar = $(window).scrollTop();

	
	if (howFar < 400)  {
		$("#smog").fadeOut(300);
		//$("html, body").animate({scrollTop:$('#clean_diesel_frame').offset().top}, 700);
		$("#performance_frame").find(".horizontal").css("left","-1300px");
		$("#environment_frame").find(".horizontal").css("left","-1300px");
		$("#mpg_frame").find(".horizontal").css("left","-1300px");
		$("#partner_bar").slideUp('fast');
		location.hash = "cleanDiesel";
		hideCar();
		
	} else if (howFar > 400 && howFar < 1120) {
		$("#smog").fadeOut(300);
		$("li#mpgs a").addClass("current_button");
		$("#performance_frame").find(".horizontal").css("left","-1300px");
		$("#environment_frame").find(".horizontal").css("left","-1300px");
	    //$("html, body").animate({scrollTop:$('#mpg_frame').offset().top}, 700);
		hideCar();
		currentPos = $("#mpg_frame").find(".horizontal").position();
		if (currentPos.left == -1300) {
		   location.hash = "mpgs"
		}
		$("#partner_bar").slideUp('fast');
		//scroll_timer = setTimeout(showScroll, 2000);
	} else if (howFar > 1120 && howFar < 2000) {
		resetOil();
		$("#smog").fadeOut(300);
		$("li#performance a").addClass("current_button");
		$("#mpg_frame").find(".horizontal").css("left","-1300px");
		$("#environment_frame").find(".horizontal").css("left","-1300px");
		//$("html, body").animate({scrollTop:$('#performance_frame').offset().top}, 700);
		$("#partner_bar").slideUp('fast');
		hideCar();
		currentPos = $("#performance_frame").find(".horizontal").position();
		if (currentPos.left == -1300) {
		  location.hash = "performance"
		};
	} else if (howFar > 2000 && howFar < 2800) {
		$("li#environment a").addClass("current_button");
		$("#mpg_frame").find(".horizontal").css("left","-1300px");
		$("#performance_frame").find(".horizontal").css("left","-1300px");
		hideCar();
		//$("html, body").animate({scrollTop:$('#environment_frame').offset().top}, 700);
		$("#partner_bar").slideUp('fast');
		currentPos = $("#environment_frame").find(".horizontal").position();
		if (currentPos.left == -1300) {
		  location.hash = "environment"
		};
		//scroll_timer = setTimeout(showScroll, 2000);
	} else if (howFar > 2800) {
		if (VERBOSE){
			console.log("partners section");
		}
		
		resetOil();
		$("#smog").fadeOut(300);
		$("li#partners a").addClass("current_button");
		 $("#performance_frame").find(".horizontal").css("left","-1300px");
		$("#environment_frame").find(".horizontal").css("left","-1300px");
		$("#mpg_frame").find(".horizontal").css("left","-1300px");
		location.hash = "partners"
		if (howFar < 3800) {
		  finalReset = setTimeout(frameReset, 1000);
		}
	}
	};
	
	function frameReset() {
		 $("html, body").animate({scrollTop:$('#partners_frame').offset().top}, 700);	
	}
	
	
	/* Next/prev and primary nav btn click handlers */
	
	$(".nav").click(function(){
		$("#partner_bar").slideUp('fast');
		$(".nav a").removeClass('current_button');
		$("#smog").fadeOut(300);
		resetOil();
		$(".horizontal").animate({
    		left:-1300
    	}, 400);
			
		switch($(this).attr('id')) {
		    case "clean_diesel":
				scroller(0);	 
			break;
			case "performance":
			    $("li#performance a").addClass("current_button");
			    scroller($('#performance_frame').offset().top);
				hideCar();
			break;
			case "mpgs":
				$("li#mpgs a").addClass("current_button");
			    scroller($('#mpg_frame').offset().top);
				hideCar();
			break;
			case "partners":
			   $("li#partners a").addClass("current_button");
			    scroller($('#partners_frame').offset().top);
				$("#partner_bar").slideDown('fast');
			break;
			case "environment":
			    $("li#environment a").addClass("current_button");
				scroller($('#environment_frame').offset().top);
				hideCar();
			break;
			
		}
	
		});
		
		$('.scroll_down').click(function(){
			  
				scroller('+=800');
		});
		
		$('#first_scroll').click(function(){
			location.hash = "mpgs"
		});		
		
		function hideCar(){
		$('.show_car').html('');
		$('#partnerText').html('Starting with Audi, BMW, Bosch, Mercedes-Benz, Porsche and Volkswagen, Clean Diesel is gaining momentum worldwide with increasing development in all the major car manufacturers and others. Our partners include:');

	    };
		
	
	$(window).hashchange( function(e) {
		if(VERBOSE){console.log("hasChange");}
	 	
	  var hash = location.hash;
	  switch(hash) {
		case "#cleanDiesel":
			scroller(0);
		break; 
		case "#mpgs":
			scroller($('#mpg_frame').offset().top);
		break; 
		case "#performance":
			scroller($('#performance_frame').offset().top);
		break; 
		case "#environment":
			scroller($('#environment_frame').offset().top);
		break; 
		case "#partners":
			scroller($('#partners_frame').offset().top);
			$("#partner_bar").slideDown('fast');
		break;
	  }
	});
	
	function manualHash(){
		if(VERBOSE){
			console.log("manualHash");
		}
		
	$(window).trigger( 'hashchange' );
	}
	
	function sliderReset(){
		$("#errand_slider").slider("value", 0);
		$("#work_slider").slider("value", 0);
		$("#rec_slider").slider("value", 0);
		$("#other_slider").slider("value", 0);
		$(".result_box").html("0");
		}
	
	function scroller(topPos) {
		if(VERBOSE){
		console.log("scroller active");
		}
	$('html, body').animate({
    		scrollTop:topPos
    	}, animSpeed, function() {
	    	backgroundScroller(); // Callback is required for iOS
		});
	}
	
	
	$('.moveleft').click(function(){
    	$($(this).closest(".horizontal")).animate({
    		left:'-=1200'
    	}, 400, function(){
    		setHash($(this).position().left);
    		});
		$(".ui-autocomplete").hide();
		$("#animation").stop();
		$(".barrel").remove();
    	return false;
    });
	
	$('.moveright').click(function(){
		
		$("#scroll_down_fade").hide("fast");
    	$($(this).closest(".horizontal")).animate({
    		left:'+=1200'
    	}, 400, function(){
    		setHash($(this).position().left);
    	});
		$(".ui-autocomplete").hide();
		$("#circle_container").animate( {height: "50%"}, 500);
		return false;
    });
    
    function setHash(leftPos){
    	if(VERBOSE){
    		console.log(leftPos);
    	}
    	howFar = $(window).scrollTop();
     if (howFar > 400 && howFar < 1120) {
			 if(leftPos < -2000){
			 	location.hash = "mpgs-right";
			 } else if(leftPos > -1000) {
			 	location.hash = "mpgs-left";
			 }	 		
		} else if (howFar > 1120 && howFar < 2000) {
			if(leftPos < -2000){
			 	location.hash = "performance-right";
			 } else if(leftPos > -1000) {
			 	location.hash = "performance-left";
			 }
		} else if (howFar > 2000 && howFar < 2800) {
			if(leftPos < -2000){
			 	location.hash = "environment-right";
			 } else if(leftPos > -1000) {
			 	location.hash = "environment-left";
			 }
		} 
    };
	
	$('.back_left,.back_right').click(function(){
		currentHash = location.hash;
		currentHash = currentHash.substring(0, currentHash.indexOf('-'));
		updateURL(currentHash);
		sliderReset();
		goButtonReset();
    });
	
	
	$('.lateral_buttons_left').click(function(){
		//newHash = location.hash + "-left";
		//updateURL(newHash);
		$("#scroll_down_fade").hide("fast");
		clearTimeout(scroll_timer);
		switch ($(this).attr('id')) {
			case "tank_trips_btn":
			$('li#tank_badge').css('backgroundPosition', '100% 100%');
			$('li#tank_badge').effect("pulsate", { times:2 }, 1000);
			break;
			case "watch_btn":
			$('li#watch_badge').css('backgroundPosition', '100% 100%');
			$('li#watch_badge').effect("pulsate", { times:2 }, 1000);
			animateSlow();
			break;
			case "oil_btn":
			$('li#oil_badge').css('backgroundPosition', '100% 100%');
			$('li#oil_badge').effect("pulsate", { times:2 }, 1000);
			 runOil = setInterval(oilAnimation,50);
				$('#oil').delay(300).animate({
					marginTop:'-=60'
				}, 4000);
			break;
		}
    });
	
	$('.lateral_buttons_right').click(function(){
		//newHash = location.hash + "-right";
		//updateURL(newHash);
		$("#scroll_down_fade").hide("fast");
		clearTimeout(scroll_timer);
		switch ($(this).attr('id')) {
			case "my_wallet_btn":
			$('li#wallet_badge').css('backgroundPosition', '100% 100%');
			$('li#wallet_badge').effect("pulsate", { times:2 }, 1000);
			$("#circle_container").delay(800).animate( {height: "110%"}, 500);
			break;
			case "hear_btn":
			$('li#hear_badge').css('backgroundPosition', '100% 100%');
			$('li#hear_badge').effect("pulsate", { times:2 }, 1000);
			animateSlow();
			break;
			case "smog_btn":
			$('li#smog_badge').css('backgroundPosition', '100% 100%');
			$('li#smog_badge').effect("pulsate", { times:2 }, 1000);
			 $("#smog").fadeIn(1000);
			break;
		}
    });
	
	
	function updateURL(hash) {
       location.hash = hash;
     };
	
	$('#go_button').bind('click',function(e){
		$("#go_button").css("opacity","0.3");
		$("#go_button").css("cursor","none");
		animateFast();
		return false;
    });
	
	$('#oil_back_right').click(function(){
		resetOil();
	});
	
	function resetOil(){
		clearInterval(runOil);
		$('#oil').stop();
		$(".barrels").remove();
		$('#oil').css("marginTop",60);
	};
	
	$('#smog_back').click(function(){
    	$("#smog").fadeOut(1000);
	});

	
   
   /* Scroll the background layers */
function backgroundScroller(){
	var scrolled = $(window).scrollTop();
	$('#clouds1').css('top',(0-(scrolled*.50))+'px');
	$('#clouds2').css('top',(0-(scrolled*.70))+'px');
	$('#flares').css('top',(0-(scrolled*.20))+'px');
	
}



function animateSlow() {
	$("#animation").stop();
	$("#car").stop();
	$("#car").animate({left:0},{easing:"swing",duration:1000} );	
	$("#animation").animate({left:"-=2725"},{easing:"linear",duration:13000,
			complete: function(){
				$("#animation").stop();
				$("#animation").css("left", 0);
				animateSlow();
			 }
  			});	
}

function goButtonReset() {
	$("#go_button").css("opacity","1");
	$("#go_button").css("cursor","pointer");	
}

function animateFast() {
	$("#animation").stop();
	$("#car").stop();
	$("#animation").animate({left:"-=2725"},{easing:"linear",duration:7000,
			complete: function(){
				$("#animation").css("left", 0);
				animateFast();
			 }
  			});	
	$("#car").animate({left:300},{easing:"swing",duration:1000} );	
}


function oilAnimation() {
	 
	 if($(".barrel").length < 95) {
		var barrel = document.createElement("img");
		barrel.setAttribute("class","barrel");
		barrel.setAttribute("src","images/barrel_static.png");
		$("#barrels").append(barrel);
		$(".barrel").fadeIn('fast');
		if($(".barrel").length > 95) {
		     clearInterval(runOil);	
		}
	 }
};



jQuery.fn.rotate=
function(deg){
                $(this).css({ 'transform': 'rotate('+deg+'deg)','-ms-transform': 'rotate('+deg+'deg)', '-moz-transform': 'rotate('+deg+'deg)', 
                    '-o-transform': 'rotate('+deg+'deg)', '-webkit-transform': 'rotate('+deg+'deg)' });
                return this;
             };



var errandValue = 30;
var workValue = 30;
var recValue = 30;
var otherValue = 30;
var sum = errandValue + workValue + recValue + otherValue;

$(function() {
	     var startVal;
		 var slideVal;
		
		$( "#errand_slider" ).slider({value:0, min: 0, max: 100,
		 slide: function( event, ui ) {
			 computeTotals();
			}
		});
	});
	
$(function() {
		$( "#work_slider" ).slider({value:0, min: 0, max: 50, slide: function( event, ui ) {
		     computeTotals();
			}
		});

	});	
	
	$(function() {
		$( "#rec_slider" ).slider({ value:0, min: 0, max: 50, slide: function( event, ui ) {
				 computeTotals();
			}
		});
	});	
	
	$(function() {
		$( "#other_slider" ).slider({ value:0, min: 0, max: 50, slide: function( event, ui ) {
				 computeTotals();
			}
		});
	});	
	
	$(function() {
		$( "#smog_slider" ).slider({ value:0, min: 10, max: 70, slide: function( event, ui ) {
				var smogOpacity = 1 - ($("#smog_slider").slider("value") / 100); 
				var innerSmogOpacity = 1 - ($("#smog_slider").slider("value") / 50); 
				$("#smog").css("opacity",smogOpacity);
				$("#smog_inner").css("opacity",innerSmogOpacity);
			}
		});
	});	
	
	
function computeTotals(){
	sum = $("#errand_slider").slider("value") + $("#work_slider").slider("value") + $("#rec_slider").slider("value") + $("#other_slider").slider("value");
	var fuelTrips = (sum * .71);
	var dieselTrips = (sum * .46);
	$("#fuel_amount").html(Math.round((fuelTrips*100)/100));
	$("#diesel_amount").html(Math.round((dieselTrips*100)/100));
};

// JavaScript Document


function renderStateValues() {
	
	var savingsAmount = "$0.00"
	
	var lowerCaseState = $("#state").val().toLowerCase();
	if(VERBOSE){
		console.log(lowerCaseState);
	}
		switch(lowerCaseState) {
			case "al":
			case "alabama":
			savingsAmount = "$340.17";
			break;	
			case "alaska":
			case "ak":
			savingsAmount = "$642.91";
			break;	
			case "arizona":
			case "az":
			savingsAmount = "$544.80";
			break;
			case "arkansas":
			case "ar":
			savingsAmount = "$379.62";
			break;		
			case "california":
			case "ca":
			savingsAmount = "$588.28";
			break;	
			case "colorado":
			case "co":
			savingsAmount = "$586.05";
			break;	
			case "connecticut":
			case "ct":
			savingsAmount = "$503.70";
			break;
			case "delaware":
			case "de":
			savingsAmount = "$466.56";
			break;
			case "district of columbia":
			case "dc":
			savingsAmount = "$478.06";
			break;
			case "florida":
			case "fl":
			savingsAmount = "$396.19";
			break;
			case "georgia":
			case "ga":
			savingsAmount = "$378.30";
			break;
			case "hawaii":
			case "hi":
			savingsAmount = "$557.00";
			break;
			case "idaho":
			case "id":
			savingsAmount = "$565.80";
			break;
			case "illinois":
			case "il":
			savingsAmount = "$521.34";
			break;
			case "indiana":
			case "in":
			savingsAmount = "$447.28";
			break;
			case "iowa":
			case "ia":
			savingsAmount = "$501.51";
			break;
			case "kansas":
			case "ks":
			savingsAmount = "$486.23";
			break;
			case "kentucky":
			case "kt":
			savingsAmount = "$414.85";
			break;
			case "louisiana":
			case "la":
			savingsAmount = "$382.05";
			break;
			case "maine":
			case "me":
			savingsAmount = "$455.42";
			break;
			case "maryland":
			case "md":
			savingsAmount = "$455.92";
			break;
			case "massachusetts":
			case "ma":
			savingsAmount = "$458.14";
			break;
			case "michigan":
			case "mi":
			savingsAmount = "$517.72";
			break;
			case "minnesota":
			case "mn":
			savingsAmount = "$497.62";
			break;
			case "mississippi":
			case "ms":
			savingsAmount = "$354.38";
			break;
			case "missouri":
			case "mo":
			savingsAmount = "$456.30";
			break;
			case "montana":
			case "mt":
			savingsAmount = "$540.80";
			break;
			case "nebraska":
			case "ne":
			savingsAmount = "$527.30";
			break;
			case "nevada":
			case "nv":
			savingsAmount = "$566.23";
			break;
			case "new hampshire":
			case "nh":
			savingsAmount = "$465.12";
			break;
			case "new jersey":
			case "mj":
			savingsAmount = "$454.80";
			break;
			case "new mexico":
			case "nm":
			savingsAmount = "$470.32";
			break;
			case "new york":
			case "ny":
			savingsAmount = "$471.91";
			break;
			case "north carolina":
			case "nc":
			savingsAmount = "$377.82";
			break;
			case "north dakota":
			case "nd":
			savingsAmount = "$514.55";
			break;
			case "ohio":
			case "oh":
			savingsAmount = "$448.07";
			break;
			case "oklahoma":
			case "ok":
			savingsAmount = "$467.26";
			break;
			case "oregon":
			case "or":
			savingsAmount = "$551.53";
			break;
			case "pennsylvania":
			case "pa":
			savingsAmount = "$419.97";
			break;
			case "rhode island":
			case "ri":
			savingsAmount = "$478.94";
			break;
			case "south carolina":
			case "sc":
			savingsAmount = "$323.61";
			break;
			case "south dakota":
			case "sd":
			savingsAmount = "$543.32";
			break;
			case "tennessee":
			case "tn":
			savingsAmount = "$341.67";
			break;
			case "texas":
			case "tx":
			savingsAmount = "$407.39";
			break;
			case "utah":
			case "ut":
			savingsAmount = "$566.72";
			break;
			case "vermont":
			case "vt":
			savingsAmount = "$490.96";
			break;
			case "virginia":
			case "va":
			savingsAmount = "$397.28";
			break;
			case "washington":
			case "wa":
			savingsAmount = "$552.78";
			break;
			case "west virgina":
			case "wv":
			savingsAmount = "$452.08";
			break;
			case "wisconsin":
			case "wi":
			savingsAmount = "$500.67";
			break;
			case "wyoming":
			case "wy":
			savingsAmount = "$511.49";
			break;
	}
	$("#savings").html(savingsAmount);
};

var menuCompletePos;

$(function() {
		var availableTags = [
			"Alabama",
			"Alaska",
			"Arizona",
			"Arkansas",
			"California",
			"Colorado",
			"Connecticut",
			"Delaware",
			"District of Columbia",
			"Florida",
			"Georgia",
			"Hawaii",
			"Idaho",
			"Illinois",
			"Indiana",
			"Iowa",
			"Kansas",
			"Kentucky",
			"Louisiana",
			"Maine",
			"Maryland",
			"Massachusetts",
			"Michigan",
			"Minnesota",
			"Mississippi",
			"Missouri",
			"Montana",
			"Nebraska",
			"Nevada",
			"New Hampshire",
			"New Jersey",
			"New Mexico",
			"New York",
			"North Carolina",
			"Ohio",
			"Oklahoma",
			"Oregon",
			"Pennsylvania",
			"Puerto Rico",
			"Rhode Island",
			"South Carolina",
			"South Dakota",
			"Tennessee",
			"Texas",
			"Utah",
			"Vermont",
			"Virginia",
			"Washington",
			"Wisconsin",
			"Wyoming"
		];
		
		
		$( "#state" ).autocomplete({
			
    		open: function(){
    			
    			if (firstSearch) {
    				menuCompletePos = $("ul.ui-autocomplete").offset();
    				console.log("top: " + menuCompletePos.top + " left: " + menuCompletePos.left);
    				firstSearch = false;
    			} else {
    				console.log("hit the catch")
    				$("ul.ui-autocomplete").offset({top:menuCompletePos.top,left:menuCompletePos.left});
    				
    			}
    			
    		},
			source: availableTags,
			select: renderStateValues()
		});
		
		return availableTags;
	});	
	
//$('#state').watermark("ENTER YOUR STATE");	
	
$('#state').focus(function () {
		
       //$('#state').val("");
	   
    });
	
$("ul.ui-autocomplete li").live("click", function(){

 renderStateValues();
 $(".ui-autocomplete").hide();
});
	
$('#state').keydown(function(e) {
  if(e.keyCode==13){
  renderStateValues();
  $(".ui-autocomplete").hide();
  }
});
	
$('#state_submit').click(function(){
	renderStateValues();
	$(".ui-autocomplete").hide();
	});


var motor1 = document.getElementById('motor1');
motor1.src = 'audio/clean_diesel_clip.wav';
  
var motor2 = document.getElementById('motor2');

motor2.src = 'audio/old_diesel_clip.wav';

/*if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 && navigator.userAgent.indexOf('Firefox') == -1 && navigator.userAgent.indexOf('Opera') == -1){
motor1.src = 'http://www.2bitcreative.com/cd/clean_diesel_audio.mp3';
motor2.src = 'http://www.2bitcreative.com/cd/old_diesel_audio.mp3';
motor2.src = 'audio/old_diesel_clip.wav';

/*if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 && navigator.userAgent.indexOf('Firefox') == -1 && navigator.userAgent.indexOf('Opera') == -1){
motor1.src = 'audio/clean_diesel_clip.mp3';
motor2.src = 'audio/old_diesel_clip.mp3';
>>>>>>> c77efdce5a2ff993ac568c571b0ef37fbaa26681
};*/

if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
 var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
 if (ieversion>=9)
  motor1.src = 'audio/clean_diesel_clip.mp3';
  motor2.src = 'audio/old_diesel_clip.mp3';
}

$("#jquery_jplayer_1").jPlayer({
    ready: function () {
    },
      play: function(){
      	sound_playing=true;
      },
      stop: function(){
      	sound_playing=false;
      },
      swfPath: "scripts",
      supplied: "mp3, ogg, wav"
});


//play sounds
$('.playMotor').click(function(){
  switch($(this).attr("id")) {	
	  case "playMotor1":
		  $("#jquery_jplayer_1").jPlayer('stop');
		  $("#jquery_jplayer_1").jPlayer("setMedia", {
				mp3: 'audio/clean_diesel_clip.mp3',
                                oga: "audio/clean_diesel_clip.ogg",
                                wav: 'audio/clean_diesel_clip.wav'
		  });
		  $("#jquery_jplayer_1").jPlayer('play');
		  meterAnim1();
		  break;
	  case "playMotor2":
		  $("#jquery_jplayer_1").jPlayer('stop');
		  $("#jquery_jplayer_1").jPlayer("setMedia", {
				mp3: 'audio/old_diesel_clip.mp3',
                                oga: "audio/old_diesel_clip.ogg",
                                wav: 'audio/old_diesel_clip.wav'
		  });
		  $("#jquery_jplayer_1").jPlayer('play');
		  meterAnim2();
		  break;
	  }
});

function meterAnim1() {

	 $("#meter1").effect("shake", { times:25, direction:"down", distance:"3" }, 90);
	 $("#meter2").effect("shake", { times:23, direction:"up", distance:"2" }, 100);
	 $("#meter3").effect("shake", { times:27, direction:"down", distance:"1" }, 80);
	 $("#meter4").effect("shake", { times:26, direction:"up", distance:"4" }, 90);
	 $("#meter5").effect("shake", { times:24, direction:"up", distance:"4" }, 110);
	 $("#meter6").effect("shake", { times:24, direction:"up", distance:"5" }, 80);
	 $("#meter7").effect("shake", { times:26, direction:"up", distance:"2" }, 90);
	 $("#meter8").effect("shake", { times:25, direction:"up", distance:"4" }, 90);
	 $("#meter9").effect("shake", { times:29, direction:"up", distance:"6" }, 80);
	 $("#meter10").effect("shake", { times:22, direction:"up", distance:"2" }, 90);
	 $("#meter11").effect("shake", { times:25, direction:"up", distance:"1" }, 80);
	 $("#meter12").effect("shake", { times:26, direction:"up", distance:"5" }, 100);
	 $("#meter13").effect("shake", { times:23, direction:"up", distance:"4" }, 110);
	 $("#meter14").effect("shake", { times:28, direction:"up", distance:"3" }, 90);
	 $("#meter15").effect("shake", { times:25, direction:"up", distance:"2" }, 80);
	 $("#meter16").effect("shake", { times:23, direction:"up", distance:"4" }, 70);
	
}

function meterAnim2() {
	 $("#meter1").effect("shake", { times:25, direction:"down", distance:"5" }, 90);
	 $("#meter2").effect("shake", { times:23, direction:"up", distance:"7" }, 90);
	 $("#meter3").effect("shake", { times:27, direction:"down", distance:"6" }, 70);
	 $("#meter4").effect("shake", { times:26, direction:"up", distance:"8" }, 80);
	 $("#meter5").effect("shake", { times:25, direction:"up", distance:"8" }, 60);
	 $("#meter6").effect("shake", { times:27, direction:"up", distance:"7" }, 100);
	 $("#meter7").effect("shake", { times:26, direction:"up", distance:"5" }, 70);
	 $("#meter8").effect("shake", { times:25, direction:"up", distance:"7" }, 80);
	 $("#meter9").effect("shake", { times:29, direction:"up", distance:"3" }, 80);
	 $("#meter10").effect("shake", { times:22, direction:"up", distance:"6" }, 90);
	 $("#meter11").effect("shake", { times:25, direction:"up", distance:"5" }, 100);
	 $("#meter12").effect("shake", { times:26, direction:"up", distance:"6" }, 120);
	 $("#meter13").effect("shake", { times:23, direction:"up", distance:"7" }, 110);
	 $("#meter14").effect("shake", { times:28, direction:"up", distance:"6" }, 100);
	 $("#meter15").effect("shake", { times:25, direction:"up", distance:"5" }, 90);
	  $("#meter16").effect("shake", { times:25, direction:"up", distance:"6" }, 80);
}

function resetBar() {
$(".partner_links").css("background-position","0% 0%");
}

/* partner section link actions*/
$('#audi').click(function(){
	$('.show_car').html('<img src="images/car_audi.png" alt="audi" />');
	$('#partnerText').html('To learn more about the Audi TDI&reg; Clean Diesel technology, <a href="http://www.audiusa.com/us/brand/en/audi_tdi_clean_diesel_cars.html/" target="_blank">click here.</a>');
	resetBar();
	$(this).css("background-position","100% 0%");
	});

$('#benz').click(function(){
	resetBar();
	$('.show_car').html('<img src="images/car_benz.png" alt="mercedes benz" />');	
	$('#partnerText').html('To learn more about the Mercedes-Benz BlueTEC Clean Diesel technology, <a href="http://www.mbusa.com/mercedes/benz/green/diesel_bluetec" target="_blank">click here.</a>');
	$(this).css("background-position","100% 0%");
	});
	
$('#porsche').click(function(){
	resetBar();
	$('.show_car').html('<img src="images/car_porsche.png" alt="porsche" />');	
	$('#partnerText').html('To learn more about the Porsche Clean Diesel technology, <a href="http://www.porscheusa.com/cleandiesel" target="_blank">click here.</a>');
	$(this).css("background-position","100% 0%");
	});
	
$('#bosch').click(function(){
	resetBar();
	$('.show_car').html('<img src="images/car_bosch.png" alt="bosch" />');	
	$('#partnerText').html('To learn more about Bosch technology, <a href="http://www.future-with-diesel.com" target="_blank">click here.</a>');
	$(this).css("background-position","100% 0%");
	});
	
$('#bmw').click(function(){
	resetBar();
	$('.show_car').html('<img src="images/car_bmw.png" alt="bmw" />');	
	$('#partnerText').html('To learn more about the BMW Advanced Diesel technology, <a href="http://www.bmwusa.com/diesel" target="_blank">click here.</a>');
	$(this).css("background-position","100% 0%");
	});
$('#vw').click(function(){
	resetBar();
	$('.show_car').html('<img src="images/car_vw.png" alt="vw" />');	
	$('#partnerText').html('To learn more about the Volkswagen TDI&reg; Clean Diesel technology, <a href="http://www.vw.com/en/tdi.html" target="_blank">click here.</a>');
	$(this).css("background-position","100% 0%");
	});
	
/***************************** Facebook Shore Functionality ***************************/

FB.init( {
              appId : '403668456356714',
              status : true, // check login status
              cookie : true, // enable cookies to allow the server to access the session
              oauth:true,
              xfbml : true
       // parse XFBML
       });
 

$("li#facebook").click(function(){ 
FB.ui({
              method: 'feed',
              name: 'Clean Diesel. Clearly Better.',
              link: 'http://www.clearlybetterdiesel.org',
              picture: 'http://www.2bitcreative.com/graphic/fb_100x100_logo.jpg',
              description: "This is not your grandfather's diesel. No way. Clean Diesel technology has changed everything. Learn how it can help improve your driving experience — and help you stop fewer times at the pump."
       },
       function(response) {
              if (response && response.post_id) {
                     // alert('Post was published.');
              } else {
                     //alert('Post was not published.');
              }
       }
       ); 
 });


<!-- end document ready -->	
});



