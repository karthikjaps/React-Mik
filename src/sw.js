workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  /\.[png|svg|jpe?g|webp|gif]$/,
  new workbox.strategies.StaleWhileRevalidate(),
  "GET"
);

workbox.routing.registerRoute(
  /\.json$/,
  new workbox.strategies.StaleWhileRevalidate(),
  "GET"
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);
