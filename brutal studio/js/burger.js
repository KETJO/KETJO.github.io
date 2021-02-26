// burger 
function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger');
	let links = menu.find('.links');
	let overlay = menu.find('.overlay');
	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});
	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());
	function toggleMenu() {
		menu.toggleClass('active');
		if (menu.hasClass('active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
}
burgerMenu('.main');



