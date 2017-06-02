$(function() {

	swiperRecOnload();
	window.onresize = function() {
		swiperRecOnload();
	}

})

var swiperBanner = new Swiper('.swiperbanner', {

	paginationClickable: true,
	nextButton: '.bannernextbtn',
	prevButton: '.bannerprevbtn',
	speed: 1000,

});


var swiperRecOnload=function(){
	
	if($(window).width() <= 768) {
			var swiperRec = new Swiper(".indexrecswiper", {
				slidesPerView: 1,
				slidesPerGroup: 1,
				speed: 1000,
			})
		} else {
			 if($(window).width() <= 992) {
				var swiperRec = new Swiper(".indexrecswiper", {
					slidesPerView: 3,
					slidesPerGroup: 3,
					nextButton: '.recnextbtn',
					prevButton: '.recprevbtn',
					speed: 1000,
				})
			} else {
				var swiperRec = new Swiper(".indexrecswiper", {
					slidesPerView: 4,
					slidesPerGroup: 3,
					nextButton: '.recnextbtn',
					prevButton: '.recprevbtn',
					speed: 1000,
				})
			}
		}
	
}

