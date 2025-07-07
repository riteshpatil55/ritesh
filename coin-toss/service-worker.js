const CACHE_NAME = 'coin-toss-v1';
const urlsToCache = [
  '/coin-toss/',
  '/coin-toss/index.html',
  '/coin-toss/coin.js',
  '/coin-toss/manifest.json',
  '/coin-toss/service-worker.js',
  '/coin-toss/heads.png',
  '/coin-toss/tails.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(cacheNames =>
    Promise.all(cacheNames.map(name => {
      if (name !== CACHE_NAME) return caches.delete(name);
    }))
  ));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});