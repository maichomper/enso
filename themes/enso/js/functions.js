(function($){

	"use strict";

	$(function(){

		// Imágen de fondo en home
		$('#intro').css('height', $(window).height());
		$('#intro').backstretch("../enso/wp-content/themes/enso/images/back03.png");

		// Validar emails
		validarEmail();

		// toggle menu
		$(".nav_icon").on("click", function(e) {
			e.preventDefault();
			muestraMenu();
		});
		$(".nav_close").on("click", function(e) {
			e.preventDefault();
			escondeMenu();
		});

		// scroll a secciones del menu
		$(".main_nav_menu a").click(function(e) {
			e.preventDefault();
			var id = $(this).attr('href');
		   	scrollToAnchor(id);
		});
		// revela menú al scrollear
		esconderMenuScroll();

		// Google Maps
		creaMapa();
		
	});	
	
	// Funciones
	function muestraMenu(){
		$('.main_nav_menu').fadeIn(250);
		$('.nav_icon').hide();
		$('.nav_close').show();
	}
	function escondeMenu(){
		$('.main_nav_menu').fadeOut(250);
		$('.nav_icon').show();
		$('.nav_close').hide();
	}
	function esconderMenuScroll(){
		var opacity = 0;
		var limit = 400;
		var isLimit = false;
		$(window).scroll(function(){
		    var st = $(this).scrollTop();

		    if(st > limit) {
		    	$('header').css('opacity','1');
		    	isLimit = true;
		    }
		    else if(st < limit && isLimit) {
		    	$('header').css('opacity','-=0.1');
		       	opacity -= 0.1;
		    } 
		    else {
		    	$('header').css('opacity','+=0.1');
		       	opacity += 0.1;
		    }

		    if(st < 20) {
		    	$('header').css('opacity','0');
		    	isLimit = false;
		    	escondeMenu();
		    } 
		});

	}
	function scrollToAnchor(id){
	    var aTag = $("div "+ id);
	    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	function validarEmail(){
		window.validateEmail = function (email) {
			var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regExp.test(email);
		};
	}

	function creaMapa(){
		var map = void 0;

		var initialize = function() {
		  var mapColors, mapOptions, marker;
		  mapColors = [
		    {
		      "stylers": [
		        {
		          "saturation": -100
		        }, {
		          "gamma": 0.8
		        }, {
		          "lightness": 4
		        }, {
		          "visibility": "on"
		        }
		      ]
		    }
		  ];
		  mapOptions = {
		    zoom: 15,
		    center: new google.maps.LatLng(25.5496, -103.4464),
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    scrollwheel: false,
		    zoomControl: true,
		    zoomControlOptions: {
		      style: google.maps.ZoomControlStyle.SMALL,
		      position: google.maps.ControlPosition.TOP_RIGHT
		    },
		    panControl: false,
		    mapTypeControl: false,
		    streetViewControl: false,
		    styles: mapColors
		  };
		  map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
		  return marker = new google.maps.Marker({
		    position: new google.maps.LatLng(25.5496, -103.4464),
		    map: map,
		    icon: "../enso/wp-content/themes/enso/images/pin.png"
		  });
		};

		google.maps.event.addDomListener(window, "load", initialize);
	}


})(jQuery);