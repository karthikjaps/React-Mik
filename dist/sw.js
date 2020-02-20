importScripts("precache-manifest.a7562fac3f0128e6d4bc356d3b1031f2.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

