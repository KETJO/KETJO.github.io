const staticCacheName= 's-app-v1'
const assetsUrls = [
	// "/favicon.ico",
	"/metronome/media/sounds/hi-hat/0.mp3",
	"/metronome/media/sounds/hi-hat/1.mp3",
	"/metronome/media/sounds/hi-hat2/0.mp3",
	"/metronome/media/sounds/hi-hat2/1.mp3",
	"/metronome/media/sounds/rim-shot/0.mp3",
	"/metronome/media/sounds/rim-shot/1.mp3",
	"/metronome/media/sounds/rim-shot2/0.mp3",
	"/metronome/media/sounds/rim-shot2/1.mp3",
	"/metronome/browserconfig.xml",
	"/metronome/manifest.json",
	"/metronome/index.html",
	"/metronome/js/app.js",
	"/metronome/js/app.js.map",
	"/metronome/js/chunk-vendors.js",
	"/metronome/js/chunk-vendors.js.map",
	"/metronome/css/app.css",
	"/metronome/css/app.css.map",
	"/metronome/img/volume.png",
]
self.addEventListener('install', async event=>{
	console.log('sw install');
	const cache = await caches.open(staticCacheName)
	await cache.addAll(assetsUrls)
})

self.addEventListener('activate', event=>{
	console.log(event);
	console.log('sw activate');
})

self.addEventListener('fetch', async event=>{
	console.log('fetch', event.request.url);
	event.respondWith(cacheFirst(event.request));
})

async function cacheFirst(request){
	const cached = await caches.match(request);
	return cached ?? fetch(request);
}
