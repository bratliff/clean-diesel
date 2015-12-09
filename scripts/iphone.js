// JavaScript Document

var showMenu;
var newPosition;
var menuPos;
var device_width;
var device_height;

window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    switch(window.orientation) {
        case 90:
        case -90:
            alert("This site is optimized for portrait view.");
            break;
        case 0:
        case 180:
            break;  
    }
}, false);



$(document).ready(function(){ 
    $('body').css('display', 'block');
    device_width = $(window).width();
    device_height = $(window).height();
    $('.device-width').css('width',device_width);
    $('body, html').css('width',device_width);
    $('#wrapper').css('width',device_width);
    $('#superContainer').css('width',device_width);
    $('#master').css('width',device_width);
    $('.content').css('width',device_width);
    $('#mobile_div').css('width',device_width);
    $('#mobile_div').css('background-position','center top');
    $('#final_frame').css('width',device_width);
    $('#menu').css('height',device_height);
   

    /*
$("#container").bind('touchstart', function(event){
	
	$("#menu_btn").hide('fast');
	})


jQuery(window).bind('scrollstart', function(){
		
		$("#menu_btn").show('fast');
		
		
		});
		
jQuery(window).bind('scrollstop', function(e){
	     newPosition = $('body, html').position().top;
		 menuPos = (-newPosition);
		$("#menu_btn").css("top", menuPos);
		$("#menu").css("top", "0px");
		$("#mobile_div").css("top", menuPos);
			$("#menu_btn").css('display','block');
			//var menuTimer = setTimeout(showMenu, 200);
			resetWindowScroll();
}); 
*/		
    function showMenu() {
        $("#menu_btn").show('fast');
        clearTimeout(menuTimer);
    }
	
	
    function resetWindowScroll(){
	
        var howFar = $(window).scrollTop();

	
        if (howFar < 400)  {
            //$("html, body").animate({scrollTop:0}, 700);
            $("#performance_frame").find(".horizontal").css("left","-920px");
            $("#environment_frame").find(".horizontal").css("left","-920x");
            $("#mpg_frame").find(".horizontal").css("left","-920px");
            $('.tanks_back').slideUp('fast').removeClass("tanks_back");
            $('.wallet_back').slideUp('fast').removeClass("wallet_back");
            resetOilAnim();
	
        } else if (howFar > 400 && howFar < 1500) {

            $("#performance_frame").find(".horizontal").css("left","-920px");
            $("#environment_frame").find(".horizontal").css("left","-920px");
            //$("html, body").animate({scrollTop:$('#mpg_frame').offset().top - 25}, 700);
            $('.watch_back').slideUp('fast').removeClass("watch_back");
            $('.hear_back').slideUp('fast').removeClass("hear_back");
            resetOilAnim();
	
        } else if (howFar > 1500 && howFar < 2000) {
	
            $("#mpg_frame").find(".horizontal").css("left","-920px");
            $("#environment_frame").find(".horizontal").css("left","-920px");
            $('.tanks_back').slideUp('fast').removeClass("tanks_back");
            $('.oil_back').slideUp('fast').removeClass("oil_back");
            $('.smog_back').slideUp('fast').removeClass("smog_back");
            $('.wallet_back').slideUp('fast').removeClass("wallet_back");
            resetOilAnim();
        //$("html, body").animate({scrollTop:$('#performance_frame').offset().top - 30}, 700);
        } else if (howFar > 2000 && howFar < 2800) {
		
            $("#mpg_frame").find(".horizontal").css("left","-920px");
            $("#performance_frame").find(".horizontal").css("left","-920px");
            $('.watch_back').slideUp('fast').removeClass("watch_back");
            $('.hear_back').slideUp('fast').removeClass("hear_back");
        //$("html, body").animate({scrollTop:$('#environment_frame').offset().top - 30}, 700);
        } else if (howFar > 2800) {
            $('.oil_back').slideUp('fast').removeClass("oil_back");
            $('.smog_back').slideUp('fast').removeClass("smog_back");
            //$("html, body").animate({scrollTop:$('#partners_frame').offset().top}, 700);	
            $("#performance_frame").find(".horizontal").css("left","-920px");
            $("#environment_frame").find(".horizontal").css("left","-920px");
            $("#mpg_frame").find(".horizontal").css("left","-920px");
            resetOilAnim();
        }
	
    }
	
    function buttonWindowReset(){
        var howFar = $(window).scrollTop();
	
        if (howFar < 400)  {
	
            $("html, body").animate({
                scrollTop:0
            }, 700);
            $("#performance_frame").find(".horizontal").css("left","-920px");
            $("#environment_frame").find(".horizontal").css("left","-920x");
            $("#mpg_frame").find(".horizontal").css("left","-920px");
	
        } else if (howFar > 400 && howFar < 1500) {

            $("#performance_frame").find(".horizontal").css("left","-920px");
            $("#environment_frame").find(".horizontal").css("left","-920px");
            $("html, body").animate({
                scrollTop:$('#mpg_frame').offset().top - 35
                }, 700);
	
        } else if (howFar > 1500 && howFar < 2000) {
	
            $("#mpg_frame").find(".horizontal").css("left","-920px");
            $("#environment_frame").find(".horizontal").css("left","-920px");
            $('.tanks_back').slideUp('fast').removeClass("tanks_back");
            $("html, body").animate({
                scrollTop:$('#performance_frame').offset().top - 35
                }, 700);
        } else if (howFar > 2000 && howFar < 2800) {
		
            $("#mpg_frame").find(".horizontal").css("left","-920px");
            $("#performance_frame").find(".horizontal").css("left","-920px");
            $("html, body").animate({
                scrollTop:$('#environment_frame').offset().top
                }, 700);
        } else if (howFar > 2800) {
		
            $("html, body").animate({
                scrollTop:$('#partners_frame').offset().top
                }, 700);	
            $("#performance_frame").find(".horizontal").css("left","-920px");
            $("#environment_frame").find(".horizontal").css("left","-920px");
            $("#mpg_frame").find(".horizontal").css("left","-920px");
        }
	
    }

    $('span#oil_text').html('1 = 28,000 BARRELS OF OIL<br /><span class="oil_sources"><a href="info.html" class="sources_link">SOURCES</a></span>');	
    $('.back_right, .back_left').not('#oil_back_right').hide();
    
    $('#oil_back_right').click(function(){
        $('.mobile_right, .mobile_left').hide();
        resetOilAnim();
    });

    $(".vert_divider").hide();

    function sliderReset(){
        $("#errand_slider").slider("value", 0);
        $("#work_slider").slider("value", 0);
        $("#rec_slider").slider("value", 0);
        $("#other_slider").slider("value", 0);
        $(".result_box").html("0");
    }

    $('#menu_btn').off().on('click', function(){
        $("#menu").toggle('fast');	
        $('.mobile_right').slideUp();
        $('.mobile_left').slideUp();
    });


    $('.sources_link').click(function(){
        $('html, body').animate({
            scrollTop:$('#info_frame').offset().top
        }, animSpeed);
        return false;
	
    }); 

    $('.scroll_down').click(function(){

        switch ($(this).attr('id')) {
            case "first_scroll":
                scrollDest = $('#mpg_frame').position().top - 30;
                break;
            case "mpg_scroll":
                scrollDest = $('#performance_frame').position().top - 30
                break;
            case "performance_scroll":
                scrollDest = $('#environment_frame').position().top;
                break;
            case "environment_scroll":
                scrollDest = $('#partners_frame').position().top+40;
                break;
        }

        $('html, body').animate({
            scrollTop:scrollDest
        }, 500);


    });

    var animSpeed = 500;

/* Next/prev and primary nav btn click handlers */
	$('#cd_logo').click(function(){
		$("#menu").hide('fast');
		$fixedElement=$('#mobile_div');
		topScrollTarget=0;
    	$('html, body').animate({
    		scrollTop: topScrollTarget
    	}, animSpeed,function(){
    		$fixedElement.css({ "position": "relative" });
    	    window.scroll(0, topScrollTarget );
    	    $fixedElement.css({ "position": "fixed" });
    	});
		
    });
    $('li#performance').click(function(){
		$("#menu").hide('fast');
		$fixedElement=$('#mobile_div');
		topScrollTarget=$('#performance_frame').offset().top -35;
    	$('html, body').animate({
    		scrollTop: topScrollTarget
    	}, animSpeed,function(){
    		$fixedElement.css({ "position": "relative" });
    	    window.scroll(0, topScrollTarget );
    	    $fixedElement.css({ "position": "fixed" });
    	});
		
    });
    $('li#mpgs').click(function(){
		$("#menu").hide('fast');
		$fixedElement=$('#mobile_div');
		topScrollTarget=$('#mpg_frame').offset().top-35;
		buttonWindowReset();
		$('html, body').animate({
    		scrollTop: topScrollTarget
    	}, animSpeed, function(){
		    $("#mobile_div").css("top","0");
    		$fixedElement.css({ "position": "relative" });
    	    window.scroll(0, topScrollTarget );
    	    $fixedElement.css({ "position": "fixed" });
		});

    })
    $('li#environment').click(function(){
        buttonWindowReset();
        $("#menu").hide('fast');
        $fixedElement=$('#mobile_div');
        topScrollTarget=$('#environment_frame').offset().top;
        $('html, body').animate({
            scrollTop:topScrollTarget
        }, animSpeed,function(){
            $fixedElement.css({
                "position": "relative"
            });
            window.scroll(0, topScrollTarget );
            $fixedElement.css({
                "position": "fixed"
            });
        });
       
    });
	
	$('li#partners').click(function(){
		buttonWindowReset();
		$("#menu").hide('fast');
		$fixedElement=$('#mobile_div');
		topScrollTarget=$('#partners_frame').offset().top;
    	$('html, body').animate({
    		scrollTop: topScrollTarget
    	}, animSpeed,function(){
    		$fixedElement.css({ "position": "relative" });
    	    window.scroll(0, topScrollTarget );
    	    $fixedElement.css({ "position": "fixed" });
    	});
    });
	
	$('li#info').click(function(){
		buttonWindowReset();
		$("#menu").hide('fast');
		$fixedElement=$('#mobile_div');
		topScrollTarget=$('#info_frame').offset().top;
    	$('html, body').animate({
    		scrollTop: topScrollTarget
    	}, animSpeed,function(){
    		$fixedElement.css({ "position": "relative" });
    	    window.scroll(0, topScrollTarget );
    	    $fixedElement.css({ "position": "fixed" });
    	});
    });
	
    $('#sources_text a').click(function(){
		
        //showMenu = setTimeout(menuDrop, 500);
        $("#menu").hide('fast');
        $('html, body').animate({
            scrollTop:$('#info_frame').offset().top
        }, animSpeed);
        return false;
    });
	
	
    function menuDrop(){
        $('#menu_btn').show('fast');
    }
	
	
    $('.moveleft').click(function(){
        $($(this).closest(".horizontal")).animate({
            left:'-=720',
        }, 400);
        if($(this).attr('id') !== 'oil_back_right') {
        $('.mobile_left').slideDown("fast");
        }
        $(".ui-autocomplete").hide();
        $("#animation").stop();
        $(".barrel").remove();
		
        return false;
    });
	
    $('.moveright').click(function(){
        $($(this).closest(".horizontal")).animate({
            left:'+=720',
        }, 400);
        $('.mobile_right').slideDown("fast");
        $(".ui-autocomplete").hide();
		
        return false;
    });
	
    $('.mobile_left').click(function(){
        buttonWindowReset();
        $("#circle_container").animate( {
            width: "50%"
        }, 500);
        $('.horizontal').animate({
            left:-922,
        }, 400);
        $('.mobile_left').slideUp();
    });
	
    $('.mobile_right').click(function(){
	    
        buttonWindowReset();
        $('.mobile_right').slideUp();
        $('.horizontal').animate({
            left:-922,
        }, 400);
        resetOilAnim();
        sliderReset();
    });
	
    function resetOilAnim() {
        //clearInterval(runOil);
        $('#oil').stop();
        $(".barrels").remove();
        $('#oil').css("marginTop",60);
    }
	
    $('.lateral_buttons_left').click(function(){
        buttonWindowReset();
        switch ($(this).attr('id')) {
            case "tank_trips_btn":
                $('.mobile_right').addClass("tanks_back");
                break;
            case "watch_btn":
                $('.mobile_right').addClass("watch_back");
                animateSlow();
                break;
            case "oil_btn":
                $('.mobile_right').addClass("oil_back");
                $('li#oil_badge').css('backgroundPosition', '100% 100%');
                $('li#oil_badge').effect("pulsate", {
                    times:2
                }, 1000);
                var runOil = setInterval(oilAnimation,50);
                $('#oil').delay(300).animate({
                    marginTop:'-=60',
                }, 4000);
                break;
        }
    });
	
    $('.lateral_buttons_right').click(function(){
        buttonWindowReset();
        switch ($(this).attr('id')) {
            case "my_wallet_btn":
                $('.mobile_left').addClass("wallet_back");
                $("#circle_container").delay(1000).animate( {
                    width: "100%"
                }, 500);
                break;
            case "hear_btn":
                $('.mobile_left').addClass("hear_back");
                break;
            case "smog_btn":
                $('.mobile_left').addClass("smog_back");
                break;
        }
    });

    $('#go_button').click(function(){
        animateFast();
        return false;
    });
	
    $('#oil_back_right').click(function(){
        resetOIlAnim();
    });
	
    $('#smog_back').click(function(){
        $("#smog").fadeOut(1000);
    });
	
    /* info button listeners */

    $("ul.info_list > li > div").click(function() {
        switch($(this).attr("id")) {	
            case "playMotor1":
                break;
            case "playMotor2":
                break;
        }
    });

   
    /* Scroll the background layers */
    var errandValue = 30;
    var workValue = 30;
    var recValue = 30;
    var otherValue = 30;
    var sum = errandValue + workValue + recValue + otherValue;

    $(function() {
        var startVal;
        var slideVal;
		
        $( "#errand_slider" ).slider({
            value:0, 
            min: 0, 
            max: 100,
            slide: function( event, ui ) {
                computeTotals();
            }
        });
    });
	
    $(function() {
        $( "#work_slider" ).slider({
            value:0, 
            min: 0, 
            max: 100, 
            slide: function( event, ui ) {
                computeTotals();
            }
        });

    });	
	
    $(function() {
        $( "#rec_slider" ).slider({
            value:0, 
            min: 0, 
            max: 100, 
            slide: function( event, ui ) {
                computeTotals();
            }
        });
    });	
	
    $(function() {
        $( "#other_slider" ).slider({
            value:0, 
            min: 0, 
            max: 100, 
            slide: function( event, ui ) {
                computeTotals();
            }
        });
    });	
	
    $(function() {
        $( "#smog_slider" ).slider({
            value:0, 
            min: 0, 
            max: 70, 
            slide: function( event, ui ) {
                var smogOpacity = 1- ($("#smog_slider").slider("value") / 100); 
                $("#smog_mobile").css("opacity",smogOpacity);
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
	
    $('#state').focus(function () {
        $('#state').val("");
	   
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
    motor1.src = 'http://clearlybetterdiesel.org/audio/clean_diesel_clip.mp3';
  
    var motor2 = document.getElementById('motor2');
    motor2.src = 'http://clearlybetterdiesel.org/audio/old_diesel_clip.mp3j';

	
    //play sounds
    $('.playMotor').click(function(){
        switch($(this).attr("id")) {	
            case "playMotor1":
                motor1.play();
                meterAnim1();
                break;
            case "playMotor2":
                motor2.play();
                meterAnim1();
                break;
        }
    });



  
    function meterAnim1() {
        $("#meter1").effect("shake", {
            times:5, 
            direction:"down", 
            distance:"3"
        }, 90);
        $("#meter2").effect("shake", {
            times:3, 
            direction:"up", 
            distance:"2"
        }, 110);
        $("#meter3").effect("shake", {
            times:7, 
            direction:"down", 
            distance:"1"
        }, 70);
        $("#meter4").effect("shake", {
            times:6, 
            direction:"up", 
            distance:"4"
        }, 30);
        $("#meter5").effect("shake", {
            times:5, 
            direction:"up", 
            distance:"3"
        }, 60);
        $("#meter5").effect("shake", {
            times:4, 
            direction:"up", 
            distance:"4"
        }, 70);
        $("#meter6").effect("shake", {
            times:7, 
            direction:"up", 
            distance:"5"
        }, 100);
        $("#meter7").effect("shake", {
            times:6, 
            direction:"up", 
            distance:"2"
        }, 90);
        $("#meter8").effect("shake", {
            times:5, 
            direction:"up", 
            distance:"4"
        }, 110);
        $("#meter9").effect("shake", {
            times:9, 
            direction:"up", 
            distance:"6"
        }, 80);
        $("#meter10").effect("shake", {
            times:2, 
            direction:"up", 
            distance:"2"
        }, 30);
        $("#mete11").effect("shake", {
            times:5, 
            direction:"up", 
            distance:"1"
        }, 100);
        $("#meter12").effect("shake", {
            times:6, 
            direction:"up", 
            distance:"5"
        }, 60);
        $("#meter13").effect("shake", {
            times:3, 
            direction:"up", 
            distance:"4"
        }, 110);
        $("#meter14").effect("shake", {
            times:8, 
            direction:"up", 
            distance:"3"
        }, 100);
    }

    function meterAnim2() {
        $("#meter1").effect("shake", {
            times:5, 
            direction:"down", 
            distance:"5"
        }, 90);
        $("#meter2").effect("shake", {
            times:3, 
            direction:"up", 
            distance:"7"
        }, 110);
        $("#meter3").effect("shake", {
            times:7, 
            direction:"down", 
            distance:"6"
        }, 70);
        $("#meter4").effect("shake", {
            times:6, 
            direction:"up", 
            distance:"8"
        }, 30);
        $("#meter5").effect("shake", {
            times:5, 
            direction:"up", 
            distance:"12"
        }, 60);
        $("#meter5").effect("shake", {
            times:4, 
            direction:"up", 
            distance:"10"
        }, 70);
        $("#meter6").effect("shake", {
            times:7, 
            direction:"up", 
            distance:"13"
        }, 100);
        $("#meter7").effect("shake", {
            times:6, 
            direction:"up", 
            distance:"9"
        }, 90);
        $("#meter8").effect("shake", {
            times:5, 
            direction:"up", 
            distance:"7"
        }, 110);
        $("#meter9").effect("shake", {
            times:9, 
            direction:"up", 
            distance:"10"
        }, 80);
        $("#meter10").effect("shake", {
            times:2, 
            direction:"up", 
            distance:"6"
        }, 30);
        $("#mete11").effect("shake", {
            times:5, 
            direction:"up", 
            distance:"5"
        }, 100);
        $("#meter12").effect("shake", {
            times:6, 
            direction:"up", 
            distance:"12"
        }, 60);
        $("#meter13").effect("shake", {
            times:3, 
            direction:"up", 
            distance:"7"
        }, 110);
        $("#meter14").effect("shake", {
            times:8, 
            direction:"up", 
            distance:"6"
        }, 100);
    }
  
	
    function animateSlow() {
        $("#animation").stop();
        $("#car").stop();
        $("#car").animate({
            left:0
        },{
            easing:"swing",
            duration:1000
        } );	
        $("#animation").animate({
            left:"-=4122"
        },{
            easing:"linear",
            duration:13000,
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
        $("#animation").animate({
            left:"-=3800"
        },{
            easing:"linear",
            duration:7000,
            complete: function(){
                $("#animation").css("left", 0);
                animateFast();
            }
        });	
        $("#car").animate({
            left:150
        },{
            easing:"swing",
            duration:1000
        } );	
    }


    function oilAnimation() {
	 
        if($(".barrel").length < 50) {
            var barrel = document.createElement("img");
            barrel.setAttribute("class","barrel");
            barrel.setAttribute("src","images/mobile/mobile_barrel.png");
            $("#barrels").append(barrel);
            $(".barrel").fadeIn('fast');
            if($(".barrel").length > 50) {
                clearInterval(runOil);	
            }
        }
    };



    /***************************** Facebook Shore Functionality ***************************/

    FB.init( {
        appId : '403668456356714',
        status : true, // check login status
        cookie : true, // enable cookies to allow the server to access the session
        oauth:true,
        xfbml : true
    // parse XFBML
    });
 

    $("div#facebook_mobile").click(function(){ 
	
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
 
	
});
