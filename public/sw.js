// Service Worker for ALCORE PWA
const CACHE_NAME = 'alcore-v1.0.0';
const RUNTIME_CACHE = 'alcore-runtime';

// Assets to cache on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.png',
  '/src/main.tsx',
  '/src/index.css',
  // Add other critical assets
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests and non-GET requests
  if (url.origin !== location.origin || request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (request.destination === 'document') {
    // Network first for HTML documents
    event.respondWith(networkFirst(request));
  } else if (request.destination === 'image') {
    // Cache first for images
    event.respondWith(cacheFirst(request));
  } else if (request.destination === 'script' || request.destination === 'style') {
    // Stale while revalidate for JS/CSS
    event.respondWith(staleWhileRevalidate(request));
  } else {
    // Network first for everything else
    event.respondWith(networkFirst(request));
  }
});

// Network first strategy
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open(RUNTIME_CACHE);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // Return offline page for navigation requests
    if (request.destination === 'document') {
      return caches.match('/');
    }
    throw error;
  }
}

// Cache first strategy
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const response = await fetch(request);
    const cache = await caches.open(RUNTIME_CACHE);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    console.log('Fetch failed:', error);
    throw error;
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);
  
  const fetchPromise = fetch(request).then((response) => {
    const cache = caches.open(RUNTIME_CACHE);
    cache.then((c) => c.put(request, response.clone()));
    return response;
  });

  return cachedResponse || fetchPromise;
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm());
  }
});

// Sync contact form when back online
async function syncContactForm() {
  try {
    const cache = await caches.open('contact-forms');
    const requests = await cache.keys();
    
    for (const request of requests) {
      try {
        await fetch(request);
        await cache.delete(request);
      } catch (error) {
        console.log('Sync failed for:', request.url);
      }
    }
  } catch (error) {
    console.log('Background sync failed:', error);
  }
}

// Push notification handler
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body || 'Nueva notificación de ALCORE',
      icon: '/favicon.png',
      badge: '/favicon.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey || '1'
      },
      actions: [
        {
          action: 'explore',
          title: 'Ver más',
          icon: '/favicon.png'
        },
        {
          action: 'close',
          title: 'Cerrar',
          icon: '/favicon.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title || 'ALCORE', options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    // Default action
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Error handler
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

// Unhandled rejection handler
self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason);
  event.preventDefault();
});