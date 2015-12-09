// JavaScript Document

$(document).ready(function(){
	
var currentContainer = 1;
var animSpeed = 1000;
var runOil;
var hashCheck;


if(typeof console === "undefined") {
	    console = {
	        log: function() { },
	        debug: function() { }
	    };
	}

$('a').removeAttr('name');

/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	backgroundScroller();
	});
	
	jQuery(window).bind('scrollstart', function(){
		
		});
		
		jQuery(window).bind('scrollstop', function(e){
		    resetWindow();
		}); 
	
	
	function resetWindow(){
		/*$(".nav a:link").removeClass('current_button');*/
		
		
		var howFar = $(window).scrollTop();
		console.log(howFar);
		/*$("#partner_bar").hide('fast');*/
	   $(".nav a").removeClass('current_button');
	    
	if (howFar < 400)  {
		$("#smog").fadeOut(300);
		$("#partner_bar").hide('fast');
		$("html, body").animate({scrollTop:0}, 700);
		$("#performance_frame").find(".horizontal").css("left","-1300px");
		$("#environment_frame").find(".horizontal").css("left","-1300px");
		$("#mpg_frame").find(".horizontal").css("left","-1300px");
		location.hash = "cleanDiesel";
		hideCar();
	} else if (howFar > 400 && howFar < 1120) {
		$("#smog").fadeOut(300);
		$("#partner_bar").hide('fast');
		$("li#mpgs a:link").addClass("current_button");
		$("#performance_frame").find(".horizontal").css("left","-1300px");
		$("#environment_frame").find(".horizontal").css("left","-1300px");
		$("li#mpg a").addClass("current_button");
		currentPos = $("#mpg_frame").find(".horizontal").position();
		if (currentPos.left == -1300) {
		   location.hash = "mpgs"
		}
		hideCar();
	    $("html, body").animate({scrollTop:$('#mpg_frame').offset().top}, 700);
	} else if (howFar > 1120 && howFar < 2000) {
		resetOil();
		$("#partner_bar").hide('fast');
		$("#smog").fadeOut(300);
		$("li#performance a:link").addClass("current_button");
		$("#mpg_frame").find(".horizontal").css("left","-1300px");
		$("#environment_frame").find(".horizontal").css("left","-1300px");
		$("li#performance a").addClass("current_button");
		if (currentPos.left == -1300) {
		  location.hash = "performance"
		};
		hideCar();
		$("html, body").animate({scrollTop:$('#performance_frame').offset().top}, 700);
	} else if (howFar > 2000 && howFar < 2800) {
		$("#partner_bar").hide('fast');	     
		$("#mpg_frame").find(".horizontal").css("left","-1300px");
		$("#performance_frame").find(".horizontal").css("left","-1300px");
		console.log("environment part");
		$("html, body").animate({scrollTop:$('#environment_frame').offset().top}, 700);
		$("li#environment a").addClass("current_button");
		hideCar();
		if (currentPos.left == -1300) {
		  location.hash = "environment"
		};
	} else if (howFar > 2800) {
		$("#partner_bar").show('fast');
		resetOil();
		$("#smog").fadeOut(300);
		$("li#partners a").addClass("current_button")
		 
	     $("html, body").animate({scrollTop:$('#partners_frame').offset().top}, 700);	
		 $("#performance_frame").find(".horizontal").css("left","-1300px");
		$("#environment_frame").find(".horizontal").css("left","-1300px");
		$("#mpg_frame").find(".horizontal").css("left","-1300px");
		if (howFar < 3800) {
		  finalReset = setTimeout(frameReset, 1000);
		}
	}
	};
	
	function frameReset() {
		 $("html, body").animate({scrollTop:$('#partners_frame').offset().top}, 700);	
	}
	
	
	$("#clean_diesel").click(function(){
		scroller(0);
		hideCar();
		return false;
	});
	
	$("#mpgs").click(function(){
		scroller($('#mpg_frame').offset().top);
		$(".nav a").removeClass('current_button');
		$("li#mpgs a").addClass("current_button");
		hideCar();
		return false;
	});
	
	$("#performance").click(function(){
		$("#mpg_frame").find(".horizontal").css("left","-1300px");
		scroller($('#performance_frame').offset().top);
		$(".nav a").removeClass('current_button');
		$("li#performance a").addClass("current_button");
		hideCar();
		return false;
	});
	
	$("#environment").click(function(){
		scroller($('#environment_frame').offset().top);
		$(".nav a").removeClass('current_button');
		$("li#environment a").addClass("current_button");
		hideCar();
		return false;
	});
	
	$("#partners").click(function(){
		$(".nav a").removeClass('current_button');
		$("li#partners a").addClass("current_button");
		scroller($('#partners_frame').offset().top);
		return false;
	});
	
	
	function hideCar(){
		$('.show_car').html('');
		$('#partnerText').html('Starting with Audi, BMW, Bosch, Mercedes-Benz, Porsche and Volkswagen, Clean Diesel is gaining momentum worldwide with increasing development in all the major car manufacturers and others. Our partners include:');

	};
	
	
	
		$('#first_scroll').click(function(){
			  
				scroller($('#mpg_frame').offset().top);
		});
		
		
	
	/*$(window).hashchange( function(e) {
	  var hash = location.hash;
	  switch(hash) {
		case "#cleanDiesel":
		    scroller(0);
		break; 
		case "#mpgs":
			scroller(800);
		break; 
		case "#performance":
			scroller(1600);
		break; 
		case "#environment":
			scroller(2400);
		break; 
		case "#partners":
			scroller(3200);
		break;
	  }
	
	});

	function manualHash(){
		console.log(manualHash);
	$(window).trigger( 'hashchange' );
	}
	
	var hashCheck = setTimeout(manualHash, 300);*/

	
	function scroller(topPos) {
		console.log("scroller active");
	$('html, body').animate({
    		scrollTop:topPos
    	}, animSpeed, function() {
	    	backgroundScroller(); // Callback is required for iOS
		});
		return false;
	}
	
	
	$('.moveleft').click(function(){
    	$($(this).closest(".horizontal")).animate({
    		left:'-=1200'
    	}, 400);
		$(".ui-autocomplete").hide();
		$("#animation").stop();
		$(".barrel").remove();
    	return false;
    });
	
	$('.moveright').click(function(){
    	$($(this).closest(".horizontal")).animate({
    		left:'+=1200'
    	}, 400);
		$(".ui-autocomplete").hide();
		$("#circle_container").animate( {height: "50%"}, 500);
		
    	return false;
    });
	
	$('.lateral_buttons_left').click(function(){
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
	
	$('a#speed_up').click(function(){
		animateFast();
		return false;
    });
	
	$('#oil_back_right').click(function(){
		resetOil();
	});
	

	
	$('#smog_back').click(function(){
    	$("#smog").fadeOut(1000);
	});

	
   
   /* Scroll the background layers */
function backgroundScroller(){
	var scrolled = $(window).scrollTop();
	$('#clouds1').css('top',(0-(scrolled*.50))+'px');
	$('#clouds2').css('top',(0-(scrolled*.70))+'px');
	$('#flares').css('top',(0-(scrolled*.20))+'px');
    
	/*if (scrolled < 300 || scrolled > 1400) {
		$("#mpg_frame").find(".horizontal").css("left","-1300px");
    }; 
	
	if (scrolled < 1100 || scrolled > 2200) {
		$("#performance_frame").find(".horizontal").css("left","-1300px");
    };
	
	if (scrolled < 1900 || scrolled > 3000) {
		$("#environment_frame").find(".horizontal").css("left","-1300px");
    };*/
	
}



function animateSlow() {
	$("#animation").stop();
	$("#car").stop();
	$("#car").animate({left:0},{easing:"swing",duration:1000} );	
	$("#animation").animate({left:"-=4122"},{easing:"linear",duration:13000,
			complete: function(){
				$("#animation").stop();
				$("#animation").css("left", 0);
				animateSlow();
			 }
  			});	
}

function animateFast() {
	$("#animation").stop();
	$("#car").stop();
	$("#animation").animate({left:"-=3800"},{easing:"linear",duration:7000,
			complete: function(){
				$("#animation").css("left", 0);
				animateFast();
			 }
  			});	
	$("#car").animate({left:300},{easing:"swing",duration:1000} );	
}


function oilAnimation() {
	 
	 if($("#barrels").children().length < 95) {
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


function resetOil(){
		clearInterval(runOil);
		$('#oil').stop();

		$('#oil').css("marginTop",60);
		$("#barrels").children().remove();
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
	console.log(lowerCaseState);
	
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
			case "deleware":
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

 //$('#state').val("Enter Your State");

var firstSearch;

$(function() {
		var availableTags = [
			"Alabama",
			"Alaska",
			"Arizona",
			"Arkansas",
			"California",
			"Colorado",
			"Connecticut",
			"Deleware",
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
			/*position: {
        	offset: '0 0' 
    		},*/
    		open: function(){
    			
    			if (firstSearch) {
    				menuCompletePos = $("ul.ui-autocomplete").offset();
    				firstSearch = false;
    			} else {
    				$("ul.ui-autocomplete").offset({top:menuCompletePos.top,left:menuCompletePos.left});
    				
    			}
    			
    		},
			source: availableTags,
			select: renderStateValues()
		});
		
		return availableTags;
	});			
	
$('#state').focus(function () {
      
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
motor1.src = 'clean_diesel_audio.wav';
  
var motor2 = document.getElementById('motor2');
motor2.src = 'old_diesel_audio.wav';

	
//play sounds
$('.playMotor').click(function(){
  switch($(this).attr("id")) {	
  case "playMotor1":
  motor2.pause();
   motor1.play();
  meterAnim1();
  break;
  case "playMotor2":
    motor1.pause();
  motor2.play();
  meterAnim2();
  break;
  }
  
function meterAnim1() {
	 $("#meter1").effect("shake", { times:5, direction:"down", distance:"3" }, 90);
	 $("#meter2").effect("shake", { times:3, direction:"up", distance:"2" }, 110);
	 $("#meter3").effect("shake", { times:7, direction:"down", distance:"1" }, 70);
	 $("#meter4").effect("shake", { times:6, direction:"up", distance:"4" }, 30);
	 $("#meter5").effect("shake", { times:5, direction:"up", distance:"3" }, 60);
	 $("#meter5").effect("shake", { times:4, direction:"up", distance:"4" }, 70);
	 $("#meter6").effect("shake", { times:7, direction:"up", distance:"5" }, 100);
	 $("#meter7").effect("shake", { times:6, direction:"up", distance:"2" }, 90);
	 $("#meter8").effect("shake", { times:5, direction:"up", distance:"4" }, 110);
	 $("#meter9").effect("shake", { times:9, direction:"up", distance:"6" }, 80);
	 $("#meter10").effect("shake", { times:2, direction:"up", distance:"2" }, 30);
	 $("#mete11").effect("shake", { times:5, direction:"up", distance:"1" }, 100);
	 $("#meter12").effect("shake", { times:6, direction:"up", distance:"5" }, 60);
	 $("#meter13").effect("shake", { times:3, direction:"up", distance:"4" }, 110);
	 $("#meter14").effect("shake", { times:8, direction:"up", distance:"3" }, 100);
	 $("#meter15").effect("shake", { times:5, direction:"up", distance:"2" }, 60);
	 $("#meter16").effect("shake", { times:3, direction:"up", distance:"4" }, 80);
	
}

function meterAnim2() {
	 $("#meter1").effect("shake", { times:5, direction:"down", distance:"5" }, 90);
	 $("#meter2").effect("shake", { times:3, direction:"up", distance:"7" }, 110);
	 $("#meter3").effect("shake", { times:7, direction:"down", distance:"6" }, 70);
	 $("#meter4").effect("shake", { times:6, direction:"up", distance:"8" }, 30);
	 $("#meter5").effect("shake", { times:5, direction:"up", distance:"12" }, 60);
	 $("#meter5").effect("shake", { times:4, direction:"up", distance:"10" }, 70);
	 $("#meter6").effect("shake", { times:7, direction:"up", distance:"13" }, 100);
	 $("#meter7").effect("shake", { times:6, direction:"up", distance:"9" }, 90);
	 $("#meter8").effect("shake", { times:5, direction:"up", distance:"7" }, 110);
	 $("#meter9").effect("shake", { times:9, direction:"up", distance:"10" }, 80);
	 $("#meter10").effect("shake", { times:2, direction:"up", distance:"6" }, 30);
	 $("#mete11").effect("shake", { times:5, direction:"up", distance:"5" }, 100);
	 $("#meter12").effect("shake", { times:6, direction:"up", distance:"12" }, 60);
	 $("#meter13").effect("shake", { times:3, direction:"up", distance:"7" }, 110);
	 $("#meter14").effect("shake", { times:8, direction:"up", distance:"6" }, 100);
	 $("#meter15").effect("shake", { times:5, direction:"up", distance:"8" }, 60);
	  $("#meter16").effect("shake", { times:5, direction:"up", distance:"6" }, 80);
}
  
  });
  
  
  /* partner section link actions*/
$('#audi').click(function(){
	$('.show_car').html('<img src="images/car_audi.png" alt="audi" />');
	$('#partnerText').html('To learn more about the Audi TDI Clean Diesel technology, <a href="http://www.audiusa.com/us/brand/en/audi_tdi_clean_diesel_cars.html/">click here.</a>');
	});

$('#benz').click(function(){
	$('.show_car').html('<img src="images/car_benz.png" alt="mercedes benz" />');	
	$('#partnerText').html('To learn more about the Mercedes-Benz BlueTEC Clean Diesel technology, <a href="http://www.mbusa.com/mercedes/benz/green/diesel_bluetec">click here.</a>');
	});
	
$('#porsche').click(function(){
	$('.show_car').html('<img src="images/car_porsche.png" alt="porsche" />');	
	$('#partnerText').html('To learn more about the Porsche Clean Diesel technology, <a href="http://www.porscheusa.com/cleandiesel">click here.</a>');
	});
	
$('#bosch').click(function(){
	$('.show_car').html('<img src="images/car_bosch.png" alt="bosch" />');	
	$('#partnerText').html('To learn more about Bosch technology, <a href="http://www.future-with-diesel.com">click here.</a>');
	});
	
$('#bmw').click(function(){
	$('.show_car').html('<img src="images/car_bmw.png" alt="bmw" />');	
	$('#partnerText').html('To learn more about the BMW Advanced Diesel technology, <a href="http://www.audiusa.com/us/brand/en/audi_tdi_clean_diesel_cars.html/">click here.</a>');
	});
$('#vw').click(function(){
	$('.show_car').html('<img src="images/car_vw.png" alt="vw" />');	
	$('#partnerText').html('To learn more about the Volkswagen TDI Clean Diesel technology, <a href="http://www.vw.com/en/tdi.html">click here.</a>');
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


/*$(document).pngFix();*/

<!-- end document ready -->	
});



