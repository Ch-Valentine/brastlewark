/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/brastlewark/precache-manifest.c5dc80bdc43cfa9999c743bcb3ff680d.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/brastlewark/index.html"), {
  
  blacklist: [/^\/_/,/\/[^\/?]+\.[^\/]+$/],
});
!function(e){var o={};function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(r,n,function(o){return e[o]}.bind(null,n));return r},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){e.exports=t(1)},function(e,o){"function"==typeof importScripts&&(importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"),workbox?(console.log("Workbox is loaded"),workbox.setConfig({debug:!1}),self.addEventListener("install",(function(e){self.skipWaiting(),location.reload()})),workbox.precaching.precacheAndRoute([]),workbox.routing.registerRoute(new RegExp("https://fonts.(?:.googlepis|gstatic).com/(.*)"),workbox.strategies.cacheFirst({cacheName:"googleapis",plugins:[new workbox.expiration.Plugin({maxEntries:30})]})),workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/,workbox.strategies.cacheFirst({cacheName:"images",plugins:[new workbox.expiration.Plugin({maxEntries:60,maxAgeSeconds:2592e3})]})),workbox.routing.registerRoute(/\.(?:js|css)$/,workbox.strategies.staleWhileRevalidate({cacheName:"static-resources",plugins:[new workbox.expiration.Plugin({maxEntries:60,maxAgeSeconds:1728e3})]})),workbox.routing.registerRoute(/\.(?:json)$/,workbox.strategies.staleWhileRevalidate({cacheName:"static-resources",plugins:[new workbox.expiration.Plugin({maxEntries:60,maxAgeSeconds:1728e3})]}))):console.error("Workbox could not be loaded. No offline support"))}]);