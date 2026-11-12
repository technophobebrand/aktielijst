self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('aktielijst-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json'
        // Voeg hier eventueel ook je CSS- en JS-bestanden aan toe als je die hebt
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
