const CACHE_NAME = 'ece-career-hub-v1.0.2';
const STATIC_CACHE = 'ece-static-v3';
const DYNAMIC_CACHE = 'ece-dynamic-v3';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/main.css',
  '/css/themes.css',
  '/css/animations.css',
  '/css/components.css',
  '/js/app.js',
  '/js/data.js',
  '/js/router.js',
  '/js/storage.js',
  '/js/search.js',
  '/js/ui.js',
  '/manifest.json',
  '/icons/icon-96x96.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Install event — cache all static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).catch((err) => {
      console.log('Cache install error:', err);
    })
  );
  // Force activate immediately — don't wait for old tabs to close
  self.skipWaiting();
});

// Activate event — delete ALL old caches so users always get fresh files
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
          .map((key) => {
            console.log('Deleting old cache:', key);
            return caches.delete(key);
          })
      );
    })
  );
  // Take control of all open pages immediately
  self.clients.claim();
});

// Fetch event — network-first for API, cache-first for static
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Never cache API calls — always hit the network for live data
  if (url.pathname.startsWith('/api/') || url.hostname.includes('vercel.app')) {
    event.respondWith(fetch(event.request).catch(() => new Response(
      JSON.stringify({ error: 'Offline' }), 
      { headers: { 'Content-Type': 'application/json' } }
    )));
    return;
  }

  // For static assets: cache-first, fallback to network
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});

// Background sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-favorites') {
    console.log('Background sync: favorites');
  }
});
