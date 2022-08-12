console.log('works');

declare const self: ServiceWorkerGlobalScope;

self.addEventListener('install', event => {
  console.log('install');

  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('activate');

  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', async event => {
  console.log(event);

  event.respondWith(fetch(event.request));
});

export { }
