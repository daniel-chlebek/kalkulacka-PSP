const MAP_URL = new URL('./mapa-zon.svg', self.location.href).href
const CACHE_NAME = 'parking-zone-map-v2'

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
  if (event.request.url !== MAP_URL) return

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME)
    const cached = await cache.match(MAP_URL)
    if (cached) return cached

    const response = await fetch(event.request)
    if (response.ok || response.type === 'opaque') cache.put(MAP_URL, response.clone()).catch(() => undefined)
    return response
  })())
})
