const staticCacheName= 's-app-v1'
const assetsUrls = [
	"favicon.ico",
	"./media/sounds/hi-hat/0.mp3",
	"./media/sounds/hi-hat/1.mp3",
	"./media/sounds/hi-hat2/0.mp3",
	"./media/sounds/hi-hat2/1.mp3",
	"./media/sounds/rim-shot/0.mp3",
	"./media/sounds/rim-shot/1.mp3",
	"./media/sounds/rim-shot2/0.mp3",
	"./media/sounds/rim-shot2/1.mp3",
	"./browserconfig.xml",
	"./manifest.json",
	"./index.html",
	"./app.js",
	"./app.js.map",
	"./js/chunk-vendors.js",
	"./js/chunk-vendors.js.map",
	"./css/app.css",
	"./css/app.css.map",
	"./img/volume.png",
]
self.addEventListener('install', async event=>{
	console.log('sw install');
	const cache = await caches.open(staticCacheName)
	await cache.addAll(assetsUrls)
})

self.addEventListener('activate', event=>{
	console.log('sw activate');
})

self.addEventListener('fetch', async event=>{
	//console.log('fetch', event.request);
	event.respondWith(cacheFirst(event.request));
})

async function cacheFirst(request){
	const cached = await caches.match(request);
	return cached ?? fetch(request);
}
