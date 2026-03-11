const CACHE_NAME = 'hot-21-v1';
const ASSETS = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap'
];

// התקנה ושמירת קבצים ב-Cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// הפעלת האפליקציה מה-Cache (עבודה אופליין)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});