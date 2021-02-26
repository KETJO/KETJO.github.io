$('.main__slider').slick({
	lazyLoad: 'ondemand',
	autoplay: true,
	autoplaySpeed: 3000,
	pauseOnHover: false,
	speed: 3000,
	infinite: true,
	centerPadding: '0px',
	draggable: true,
	swipe: true,
	dots: false,
	arrows: false,
	fade: true,
	pauseOnDotsHover: false,
	cssEase: 'ease',
	responsive: [
		{
			breakpoint: 992,
			settings: {

			}
		}]
});

$('.reviews__items').slick({
	lazyLoad: 'ondemand',
	autoplay: true,
	autoplaySpeed: 3500,
	pauseOnHover: false,
	speed: 4000,
	infinite: true,
	centerPadding: '0px',
	centerMode: false,
	draggable: true,
	swipe: true,
	adaptiveHeight: false,
	dots: true,
	arrows: false,
	fade: false,
	pauseOnDotsHover: false,
	cssEase: 'ease',
	responsive: [
		{
			breakpoint: 992,
			settings: {

			}
		}]
});

$('.partners__items').slick({
	lazyLoad: 'ondemand',
	autoplay: true,
	autoplaySpeed: 2500,
	pauseOnHover: false,
	speed: 3000,
	infinite: true,
	centerPadding: '0px',
	centerMode: false,
	draggable: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	swipe: true,
	adaptiveHeight: false,
	dots: false,
	arrows: false,
	fade: false,
	pauseOnDotsHover: false,
	cssEase: 'ease',
	responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
			}
		}
	]
});