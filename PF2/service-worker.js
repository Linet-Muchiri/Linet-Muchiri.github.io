const cacheName = "linet-portfolio-v1";
const assets = [
  "index2.html",
  "assets/css/style.css",
  "assets/images/hero-bg.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
