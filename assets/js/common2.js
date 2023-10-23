/* common */

$(function(){
	// main slide event
	thumbSlide();

});

/*
	main visual event
 */
let thumbSwiper;

function thumbSlide(){
	thumbSwiper = new Swiper(".section12 .thumb_slide", {
		speed: 3000,
		loop: true,
		slidesPerView : "auto",
		allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});
}