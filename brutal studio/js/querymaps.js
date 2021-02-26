YaMapsShown = false;

$(document).ready(function () {

	$(window).scroll(function () {
		if (!YaMapsShown) {
			if ($(window).scrollTop() + $(window).height() > $(document).height() - 1500) {
				showYaMaps();
				YaMapsShown = true;
			}
		}
	});

});

function showYaMaps() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A33fed6477b24bf684db54627dd0d2952bd7b12abfb56a586bb253ab268d3e16e&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
	document.getElementById("YaMaps").appendChild(script);
}
