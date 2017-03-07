

$(document).ready(function(){


	// var scr = $(".main-wrapper").height() > $('body').height(); /*CHECK SCROLLBAR*/


	// var flsm1 = true; /*VARIABLE FOR CHECK WIDTH*/
	// var flsm2 = true; /*VARIABLE FOR CHECK WIDTH*/

	$(window).on('load resize', function() {

		/*CHECK WIDTH 1 ITERATION*/
		// if (window.innerWidth <= 1200) {
		// 	flsm2 = true;
		// 	if (flsm1) {
		// 		flsm1 = false;
		// 	}
		// } else {
		// 	flsm1 = true;
		// 	if (flsm2) {
		// 		flsm2 = false; 
		// 	}
		// }

	});


	/* SLICK_SLIDER */
	// if ($('.yourslider').length) {
	// 	$('.yourslider').slick({
	// 		slidesToShow: 4,
	// 		slidesToScroll: 1,
	// 		centerMode: false,
	// 		centerPadding: '30px',
	// 		responsive: [
	// 		{
	// 			breakpoint: 1200,
	// 			settings: {
	// 				slidesToShow: 3,
	// 				slidesToScroll: 1
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				vertical: true,
	// 				slidesToScroll: 1
	// 			}
	// 		}
	// 		]
	// 	});
	// };



	/*MATCHHEIGHT*/
	$('.adv-block').matchHeight();

	$(document).on('click', '.modal-form', function(e) {
		e.preventDefault();
		var th = $(this).attr('data-id');
		$(th).fancybox({
			'hideOnContentClick': true,
			minWidth : 130,
			padding: 0,
			closeBtn : true
		}).trigger('click');
	})

	/*FANCYBOX*/
	// $(".modal-form").fancybox({
	// 	'href' : $(".modal-form").attr('data-id'),
	// 	'hideOnContentClick': true,
	// 	minWidth : 230,
	// 	padding : 0,
	// 	closeBtn : true
	// });


	/*SCROLL TO*/
	// $('header a[href^="#"]').on('click', function(event) {
	// 	var target = $( $(this).attr('href') );
	// 	if( target.length ) {
	// 		event.preventDefault();
	// 		$('html, body').animate({
	// 			scrollTop: target.offset().top -85
	// 		}, 600);
	// 	}
	// });


	/*MASK JQUERY*/
	// jQuery(function($){ 
	// 	$('input[type=tel]').mask("+7(999) 999-9999");
	// });


	/*HIDE PLACEHOLDER*/
	// $('input,textarea').focus(function(){
	// 	$(this).data('placeholder',$(this).attr('placeholder'))
	// 	.attr('placeholder','');
	// }).blur(function(){
	// 	$(this).attr('placeholder',$(this).data('placeholder'));
	// });


	/* кнопка Вверх */
	// $("#back-top").hide();

	$(window).scroll(function() {

		/*FADE_IN/FADE_OUT*/
		// if ($(this).scrollTop() > 250) {
		// 	$('#back-top').fadeIn(200);
		// } else {
		// 	$('#back-top').fadeOut(200);
		// };

		/*JUMP BUTTON*/
		// var scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height() ;
		// if(scrollBottom < 60) {
		// 	$('#back-top').css('bottom', '235px')
		// } else {
		// 	$('#back-top').css('bottom', '50px')
		// }

	});


	/*SCROLL TO TOP*/
	// $('#back-top a').on('click', function(){
	// 	$('body,html').animate({
	// 		scrollTop: 0
	// 	}, 800);
	// });


	/*обработка клика по странице (для скрытия меню, popup и тд)*/
	// $(document).click( function(event){
	// 	if( $(event.target).closest(".js-dd-click-wrap").length )
	// 		return;
	// 	$('.js-dd-click').fadeOut(300).closest('.js-dd-click-wrap').removeClass('open');
	// 	event.stopPropagation();
	// });


	/*YANDEX MAP*/
	// if ($('.map-wrapp').length) {
	// 	ymaps.ready(init);
	// 	function init(){
	// 		var myMap=new ymaps.Map("map-canvas",{
	// 			center:[56.844412, 60.617085],
	// 			zoom:15,
	// 			controls:['zoomControl']
	// 		}),
	// 		Placemark1=new ymaps.Placemark([56.844412, 60.617085],{
	// 			balloonContent:'',
	// 			hintContent:'',
	// 		},{
	// 			preset:'islands#redDotIcon'
	// 		})
	// 		myMap.geoObjects.add(Placemark1);
	// 		myMap.behaviors.disable('scrollZoom');
	// 	}
	// };




});