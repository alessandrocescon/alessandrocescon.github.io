const dataCacheName = 'visaspadata';
const cacheName = 'visaspa';
const filesToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
  'icon72.png',
  'icon96.png',
  'icon128.png',
  'icon256.png',
  'icon512.png',
  '/css/pure-min.css',
  '/css/grids-responsive-min.css',
  '/css/style.css',
  '/data/data.json',
  '/js/ui.js',
  '/js/App.js',
  '/js/Equipment.js',
  '/js/Init.js',
  '/js/Material.js',
  '/js/Note.js',
  '/js/Signature.js',
  '/js/Ticket.js',
  '/js/Work.js'
];

//install the sw
self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});


self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function (e) {
  console.log('[Service Worker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});