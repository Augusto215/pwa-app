var staticCacheName = "pwa";
 
self.addEventListener('install', function(event) {
  self.skipWaiting(); // Ativa o Service Worker mais rápido

  event.waitUntil(
    self.registration.showNotification('Bem-vindo ao NUBANK PWA', {
      body: 'Obrigado por instalar nosso app!',
      icon: 'assets/img/anne-peres-plsF6obTgms-unsplash.jpg'
    })
  );
});
 
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
 
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('push', function(event) {
  var options = {
    body: 'Esta é uma mensagem de notificação push!',
    icon: 'assets/img/anne-peres-plsF6obTgms-unsplash.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notificação', options)
  );
});
