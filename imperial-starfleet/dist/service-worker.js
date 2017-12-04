//service-worker.js
let CACHE_NAME = 'death-star-service-workers';
let urlsToCache = [
  'index.html',
  'service-worker.js',
  './assets/images/tie-fighter.png',
  './assets/images/turret.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
  	caches.open(CACHE_NAME)
  	.then(function(cache) {
  		console.log('opened cache!');
  		return cache.addAll(urlsToCache);
  	})
  );
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
		    if(response) return response;
		    return fetch(event.request);
		})
	 );
   });