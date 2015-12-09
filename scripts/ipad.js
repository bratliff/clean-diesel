// JavaScript Document

if ($(window).width() < 1000) {
   alert("This site is optimized for landscape view."); 
}
	
window.addEventListener("orientationchange", function() {
  // Announce the new orientation number
  switch(window.orientation) {
	case 90:
	case -90:
	break;
	case 0:
	case 180:
	alert("This site is optimized for landscape view.");
	break;  
  }
}, false);

var menuTimer;
var focusMonitor = false;

$(document).ready(function(){

$('body').css('display', 'block');
$("#menu").css('position','fixed');
$("#menu").show('fast');	
	
$("#partner_bar").css({'bottom':'8px','z-index':'100','margin':'0','position':'absolute','left':'100px'});
$("#superContainer").css({'height':'4000px'});
$("#master, #container, #wrapper").css({'height':'4000px'});
$("#superContainer, #master, #container, #wrapper, .content").css({'width':'100%'});
$("#clouds1, #clouds2, #flares").css({'width':'100%'});
$("body, html, document").css({'width':'100%'});
$("body, html, document").css({'height':'4000px'});
$("h1#final_header").css({'margin':'300px auto 20px auto'});
$(".show_car").css({'top':'400px'});
$("#master").css({'background-position':'0 105%'});

//$('#master, #container, #wrapper').css({"border":"1px solid #F00"});
//$("#partners_frame").css("height","900px");
	
$(window).scroll(function () {
		newPosition = $('body, html').position().top;
		menuPos = (-newPosition);
		//$("#menu").css('display','none');
		
		//$("#menu").css("top", menuPos);
		backgroundScroller();

});

$('.show_car').html('<img src="images/audi_tablet.png" alt="audi" />');


/*$("#superContainer").bind('touchstart', function(event){

	$("#menu").css('display','none');
	})

jQuery(window).bind('scrollstart', function(){
	//$("#menu").css('display','none');
		
		});
		
jQuery(window).bind('scrollstop', function(e){
	      
	      newPosition = $('body, html').position().top;
		     menuPos = (-newPosition);
	        //$("#menu").css('position','absolute');
			$("#menu").css('display','block');
			$("#menu").css("top", menuPos);
			resetWindow();
		}); */
		
	
var currentContainer = 1;
var animSpeed = 1000;


function showMenu(){
	/*newPosition = $('body, html').position().top;
		menuPos = (-newPosition);
		//$("#menu").css('display','none');	
		//$("#menu").css("top", menuPos);
                $("#menu").show('fast');*/
}

$("#top_nav_bg").hide();
$("#footer_ext").hide();
	
function backgroundScroller(){
	var scrolled = $(window).scrollTop();
    
	if (scrolled < 300 || scrolled > 1440) {
		$("#mpg_frame").find(".horizontal").css("left","-1300px");
		    }; 
	
	if (scrolled < 1100 || scrolled > 2200) {	
		$("#performance_frame").find(".horizontal").css("left","-1300px");
    };
	
	if (scrolled < 1900 || scrolled > 3000) {
		$("#environment_frame").find(".horizontal").css("left","-1300px");
    };
	
}

	$('.scroll_down').click(function(){
                       $fixedElement=$('#menu');
                          topScrollTarget=$('#mpg_frame').position().top;
                        $('html, body').animate({
                            scrollTop: topScrollTarget
                        }, animSpeed, function(){
                        $fixedElement.css({ "position": "relative" });
                        window.scroll(0, topScrollTarget );
                        $fixedElement.css({ "position": "fixed" });
                        });
		
		});
	
	
	function resetWindow(){
		var howFar = $(window).scrollTop();
		console.log(howFar);
		$(".current_button").removeClass("current_button");
		
	if (howFar < 400)  {
		//$("html, body").animate({scrollTop:0}, 700);
		location.hash = "cleanDiesel";
		showMenu();
		hideCar();
		
	} else if (howFar > 400 && howFar < 1120) {
		$("li#mpgs a").addClass("current_button");
		showMenu();
		hideCar();
		if ($("#mpg_frame").find(".horizontal").position().left == -1300) {
		   location.hash = "mpgs"
		   $("#partner_bar").slideUp('fast');
		}
	    //$("html, body").animate({scrollTop:$('#mpg_frame').offset().top}, 700);
	} else if (howFar > 1120 && howFar < 2000) {
		$("li#performance a").addClass("current_button");
		showMenu();
		hideCar();
		if ($("#performance_frame").find(".horizontal").position().left == -1300) {
		   location.hash = "performance"
		   $("#partner_bar").slideUp('fast');
		}
		//$("html, body").animate({scrollTop:$('#performance_frame').offset().top}, 700);
	} else if (howFar > 2000 && howFar < 2800) {
		$("li#environment a").addClass("current_button");
		showMenu();
		hideCar();
		if ($("#environment_frame").find(".horizontal").position().left == -1300) {
		   location.hash = "environment"
		   $("#partner_bar").slideUp('fast');
		}
		//$("html, body").animate({scrollTop:$('#environment_frame').offset().top}, 700);
	} else if (howFar > 2800) {
		$("li#partners a").addClass("current_button");
		location.hash = "partners";
		showMenu();
		/*newPosition = $('body, html').position().top;
		partnerPos = (-newPosition+500);
		$("#partner_bar").css("top", partnerPos);*/
		
		$("#partner_bar").slideDown('fast');
	     //$("html, body").animate({scrollTop:$('#partners_frame').offset().top}, 700);	
	}
	};

$(window).hashchange( function(e) {
	showMenu();
	  var hash = location.hash;
	  switch(hash) {
		case "#cleanDiesel":
			$fixedElement=$('#menu');
                          topScrollTarget=0;
                        $('html, body').animate({
                            scrollTop: topScrollTarget
                        }, animSpeed, function(){
                        $fixedElement.css({ "position": "relative" });
                        window.scroll(0, topScrollTarget );
                        $fixedElement.css({ "position": "fixed" });
                        });
		break; 
		case "#mpgs":		
                        $fixedElement=$('#menu');
                          topScrollTarget=$('#mpg_frame').position().top;
                        $('html, body').animate({
                            scrollTop: topScrollTarget
                        }, animSpeed, function(){
                        $fixedElement.css({ "position": "relative" });
                        window.scroll(0, topScrollTarget );
                        $fixedElement.css({ "position": "fixed" });
                        });
		break; 
		case "#performance":
                        $fixedElement=$('#menu');
                          topScrollTarget=$('#performance_frame').position().top;
                        $('html, body').animate({
                            scrollTop: topScrollTarget
                        }, animSpeed, function(){
                        $fixedElement.css({ "position": "relative" });
                        window.scroll(0, topScrollTarget );
                        $fixedElement.css({ "position": "fixed" });
                        });
                
		break; 
		case "#environment":
			$fixedElement=$('#menu');
                          topScrollTarget=$('#environment_frame').position().top;
                        $('html, body').animate({
                            scrollTop: topScrollTarget
                        }, animSpeed, function(){
                        $fixedElement.css({ "position": "relative" });
                        window.scroll(0, topScrollTarget );
                        $fixedElement.css({ "position": "fixed" });
                        });
		break; 
		case "#partners":
			$fixedElement=$('#menu');
                          topScrollTarget=$('#partners_frame').position().top + 200;
                        $('html, body').animate({
                            scrollTop: topScrollTarget
                        }, animSpeed, function(){
                        $fixedElement.css({ "position": "relative" });
                        window.scroll(0, topScrollTarget );
                        $fixedElement.css({ "position": "fixed" });
                        });
                        
                        //scroller($('#partners_frame').position().top + 200);
			$("#partner_bar").slideDown('fast');
		break;
	  }
	});
	
	function scroller(topPos) {
		showMenu();
		console.log("scroller active");
	$('html, body').animate({
    		scrollTop:topPos
    	}, animSpeed, function() {
	    	backgroundScroller(); // Callback is required for iOS
		});
	}
	
	//$(".sources_link").attr('target','_blank');

	function manualHash (){
		showMenu();
	$(window).trigger( 'hashchange' );
	}
	
	function hideCar(){
		$('.show_car').html('');
		$('#partnerText').html('Starting with Audi, BMW, Bosch, Mercedes-Benz, Porsche and Volkswagen, Clean Diesel is gaining momentum worldwide with increasing development in all the major car manufacturers and others. Our partners include:');

	    };
	
	//var hashCheck = setTimeout(manualHash, 300);

	/*$(".nav").click(function() {
            $(".current_button").removeClass("current_button");
            hideCar();
            resetPage();
            
            switch($(this).attr('id')){
                case "performance":
                    alert("performance");
                    $fixedElement=$('#menu');
                    topScrollTarget=$('#performance_frame').position().top;
                $('html, body').animate({
                    scrollTop: topScrollTarget
                }, animSpeed, function(){
            $fixedElement.css({ "position": "relative" });
    	    window.scroll(0, topScrollTarget );
    	    $fixedElement.css({ "position": "fixed" });
        });
                break;
                case "mpgs":
                break;
                case "environment":
                break;
                case "partners":
                break;
            }
        })*/
	
	function resetPage() {
		showMenu();
		$("#smog").fadeOut(300);
		$("#animation").stop();
		clearInterval(runOil);
		$('#oil').stop();
		$(".barrels").remove();
		$('#oil').css("marginTop",60);
		$(".horizontal").css("left","-1300px");		
	}
	
	
	$('.moveleft').click(function(){
		showMenu();
		$("#menu").slideDown(400);
    	$($(this).closest(".horizontal")).animate({
    		left:'-=1205',
    	}, 400);
		$(".ui-autocomplete").hide();
		$("#animation").stop();
		$(".barrel").remove();
    	return false;
    });
	
	$('.moveright').click(function(){
		showMenu();
		$("#menu").slideDown(400);
    	$($(this).closest(".horizontal")).animate({
    		left:'+=1205',
    	}, 400);
		$(".ui-autocomplete").hide();
		
	$("#circle_container").animate( {height: "50%"}, 500);
		
    	return false;
    });
	
	$('.back_left,.back_right').click(function(){
		showMenu();
		currentHash = location.hash;
		currentHash = currentHash.substring(0, currentHash.indexOf('-'));
		updateURL(currentHash);
		sliderReset();
		goButtonReset();
    });
	
	$('.lateral_buttons_left').click(function(){
		menuTimer = setTimeout(showMenu, 100);
		newHash = location.hash + "-left";
		updateURL(newHash);
		switch ($(this).attr('id')) {
			case "tank_trips_btn":
			//window.location.href = "index.html#mpgs_left"
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
					marginTop:'-=60',
				}, 4000);
			break;
		}
    });
	
	$('.lateral_buttons_right').click(function(){
		    menuTimer = setTimeout(showMenu, 100);
			newHash = location.hash + "-right";
			updateURL(newHash);
		switch ($(this).attr('id')) {
			
			case "my_wallet_btn":
			$('li#wallet_badge').css('backgroundPosition', '100% 100%');
			$('li#wallet_badge').effect("pulsate", { times:2 }, 1000);
			$("#circle_container").delay(800).animate( {height: "110%"}, 500);
			break;
			case "hear_btn":
			//location.hash = "performance_right"
			$('li#hear_badge').css('backgroundPosition', '100% 100%');
			$('li#hear_badge').effect("pulsate", { times:2 }, 1000);
			animateSlow();
			break;
			case "smog_btn":
			//location.hash = "environment_right"
			$('li#smog_badge').css('backgroundPosition', '100% 100%');
			$('li#smog_badge').effect("pulsate", { times:2 }, 1000);
			newPosition = $('body, html').position().top;
			menuPos = (-newPosition);
			$("#smog").css("top", menuPos+95);
			$("#smog").css("left", -10);
			 $("#smog").fadeIn(1000);
			break;
		}
    });
	function sliderReset(){
		$("#errand_slider").slider("value", 0);
		$("#work_slider").slider("value", 0);
		$("#rec_slider").slider("value", 0);
		$("#other_slider").slider("value", 0);
		$(".result_box").html("0");
		}
	
	function updateURL(hash) {
       location.hash = hash;
     };
	
   $('#go_button').click(function(){
	    $("#go_button").css("opacity","0.3");
		$("#go_button").css("cursor","none");
		animateFast();
		menuTimer = setTimeout(showMenu, 100);
		return false;
    });
	
	function goButtonReset() {
		$("#go_button").css("opacity","1");
		$("#go_button").css("cursor","pointer");	
	}
	
	$('#oil_back_right').click(function(){
    	clearInterval(runOil);
		$('#oil').stop();
		$(".barrels").remove();
		$('#oil').css("marginTop",60);
	});
	
	$('#smog_back').click(function(){
    	$("#smog").fadeOut(1000);
	});
	
	$('a#oil_btn').click(function(){
	    runOil = setInterval(oilAnimation,50);
    });
	
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
   
   /* Scroll the background layers */
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
		$( "#work_slider" ).slider({value:0, min: 0, max: 100, slide: function( event, ui ) {
		     computeTotals();
			}
		});

	});	
	
	$(function() {
		$( "#rec_slider" ).slider({ value:0, min: 0, max: 100, slide: function( event, ui ) {
				 computeTotals();
			}
		});
	});	
	
	$(function() {
		$( "#other_slider" ).slider({ value:0, min: 0, max: 100, slide: function( event, ui ) {
				 computeTotals();
			}
		});
	});	
	
		$(function() {
		$( "#smog_slider" ).slider({ value:0, min: 10, max: 70,  stop: function(event, ui) { showMenu() }, slide: function( event, ui ) {
			    showMenu();
				var smogOpacity = 1 - ($("#smog_slider").slider("value") / 100); 
				var innerSmogOpacity = 1 - ($("#smog_slider").slider("value") / 50); 
				$("#smog").css("opacity",smogOpacity);
				$("#smog_inner").css("opacity",innerSmogOpacity);
			}
		});
	});	
	
	
function computeTotals(){
	sum = $("#errand_slider").slider("value") + $("#work_slider").slider("value") + $("#rec_slider").slider("value") + $("#other_slider").slider("value");
	var fuelTrips = (sum * 365)/500;
	var dieselTrips = (sum * 365)/800;
	$("#fuel_amount").html(Math.round(fuelTrips*100)/100);
	$("#diesel_amount").html(Math.round(dieselTrips*100)/100);
};

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
			source: availableTags,
			select: renderStateValues()
		});
		
		return availableTags;
	});		
	
$('#state').focus(function (event) {
      $('#state').val("");
      focusMonitor = true;
	   
    });
    
 $('#state').blur(function() {
 
      focusMonitor = false;
	   
    });
	
$("ul.ui-autocomplete li").live("click", function(){
 renderStateValues();
 $(".ui-autocomplete").hide();
});
	
$('#state').keydown(function(e) {
  if(e.keyCode==13){
  renderStateValues();;
  }
});
	
$('#state_submit').click(function(){
	renderStateValues();
	});
	
$('#state').focus(function () {
       $('#state').val("");
    });
	
var motor1 = document.getElementById('motor1');
motor1.src = 'http://clearlybetterdiesel.org/audio/clean_diesel_clip.mp3';
  
var motor2 = document.getElementById('motor2');
motor2.src = 'http://clearlybetterdiesel.org/audio/old_diesel_clip.mp3';

	
//play sounds
$('.playMotor').click(function(){
  switch($(this).attr("id")) {	
  case "playMotor1":
  motor1.play();
  meterAnim1();
  break;
  case "playMotor2":
  motor2.play();
  meterAnim2();
  break;
  }
  
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
  
  });

function resetBar() {
$(".partner_links").css("background-position","0% 0%");
}

/* partner section link actions*/
$('#audi').click(function(){
	$('.show_car').html('<img src="images/car_audi.png" alt="audi" />');
	$('#partnerText').html('To learn more about the Audi TDI<sup>&reg;</sup> Clean Diesel technology, <a href="http://www.audiusa.com/us/brand/en/audi_tdi_clean_diesel_cars.html/" target="_blank">click here.</a>');
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
	$('#partnerText').html('To learn more about the Volkswagen TDI<sup>&reg;</sup> Clean Diesel technology, <a href="http://www.vw.com/en/tdi.html" target="_blank">click here.</a>');
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
              picture: 'images/fb_100x100_logo.jpg',
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


