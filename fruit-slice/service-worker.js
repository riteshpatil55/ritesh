const CACHE_NAME = 'fruit-slice-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/game.js',
  '/manifest.json',
  '/service-worker.js',
  '/images/bg.jpg',
  '/images/bomb.png',
  '/images/apple.png',
  '/images/mango.png',
  '/images/pineapple.png',
  '/images/watermelon.png',
  '/images/banana.png',
  '/images/muskmelon.png',
  '/images/strawberry.png',
  '/images/papaya.png',
  '/sounds/slice.mp3',
  '/sounds/boom.mp3'
];

// Install Service Worker and cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      )
    )
  );
});

// Fetch from cache first, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
