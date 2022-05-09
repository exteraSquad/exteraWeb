/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/telegram-react/1.6c401ab23349ce7bcf14.worker.js","e49743f8ddae3a33bc8e8c298a25a748"],["/telegram-react/1.b70ef2d8bc9dee22cf58.worker.js","cfc12462bce95232d28ee61f5747ffe8"],["/telegram-react/2a79a539dfbe607fd685d6ccdd16b5df.wasm","2a79a539dfbe607fd685d6ccdd16b5df"],["/telegram-react/3dee0f934ca1a5946a253599e3e442c6.wasm","3dee0f934ca1a5946a253599e3e442c6"],["/telegram-react/6c401ab23349ce7bcf14.worker.js","ee4dc48dc684a95d5436894cfad352b6"],["/telegram-react/Android_2x.jpg","d83a0b472831b75fc35ddef1f3b4a087"],["/telegram-react/Manytabs_2x.png","7a71629a5e4f7482b6320b103f1d543c"],["/telegram-react/WP_2x.jpg","a1d37d509e6740f40c0a4729dff3100b"],["/telegram-react/b70ef2d8bc9dee22cf58.worker.js","4a255b82b2441d37b9b6bbddf2593549"],["/telegram-react/d6e29502cb97a72c1880.worker.js","b3f50bf38567ab66fb70be9378f8a5c1"],["/telegram-react/data/Folders_1.json","01b7f0acf52990784baca0a19b821be3"],["/telegram-react/data/Folders_2.json","3f6c9400e50344c82b15a7acf5087a33"],["/telegram-react/data/TwoFactorSetupMonkeyClose.json","c322e3eabf46340f12ec7f4784d4115a"],["/telegram-react/data/TwoFactorSetupMonkeyIdle.json","b2c77121d458e17d18e642c51cb9821c"],["/telegram-react/data/TwoFactorSetupMonkeyPeek.json","d914e5d5fdef6b5596bb409689c8332d"],["/telegram-react/data/TwoFactorSetupMonkeyTracking.json","addf1beac01749387f1aea96a9bfb682"],["/telegram-react/data/countries.txt","55d449eb40c46fd2bb55c4665d69116f"],["/telegram-react/emoji-mart.dark.css","3ea5c97b15bdbfc7fb83733850543e9b"],["/telegram-react/emoji-mart.light.css","5b5169b91f64393fe87aa979006071fe"],["/telegram-react/fa6295f8bac86fc2c967.worker.js","dcf56bc89751b6ad0f6bd7dc60453336"],["/telegram-react/iOS_2x.jpg","1d95f349db03f730edb3bc35224a303e"],["/telegram-react/index.html","6c840730d230241b6bc9ced71dd473c7"],["/telegram-react/libwebp/webp_wasm.js","e6b4db96a5f5d0bdf0e2d2598df33a1b"],["/telegram-react/libwebp/webp_wasm.wasm","7923e6d27dbf3a355044bd27863ae331"],["/telegram-react/libwebp/webp_wasm.worker.js","f4e99a93f6310ece1e7a048d8aaedcb2"],["/telegram-react/rlottie/pako-inflate.min.js","f9972fcc4de445207977a8b379ca6732"],["/telegram-react/rlottie/rlottie-wasm.js","776fe8699ecf70f3213dffbbe7576fd6"],["/telegram-react/rlottie/rlottie-wasm.wasm","e725dc036ad50ba694c90ee1f72c4b5b"],["/telegram-react/rlottie/rlottie-wasm.worker.js","27880e695a4459578ce37316110c8761"],["/telegram-react/static/css/0.25f05a4a.chunk.css","39342a6b7624747dca3f656ff2850d88"],["/telegram-react/static/css/4.7e669147.chunk.css","7673d0311caee318c9e2fbb8c7d4b819"],["/telegram-react/static/css/5.b25828e3.chunk.css","8ed817e07ea0953f8a6760c77e63826a"],["/telegram-react/static/css/6.1a2e9a5e.chunk.css","c78dcfb3a8c522920a4267815853de08"],["/telegram-react/static/css/main.48a82b19.chunk.css","bffbbdc73756467ed6fba0a8e75c4147"],["/telegram-react/static/js/0.d1143323.chunk.js","b1a1015a967c04d394832fefa814e7a6"],["/telegram-react/static/js/3.dc89481f.chunk.js","1a8ddbb9cdb76ca270fb1e1fac2df38e"],["/telegram-react/static/js/4.e84103f4.chunk.js","ce76f0f30586a895327764b726491a98"],["/telegram-react/static/js/5.1b830068.chunk.js","5ad6832e5849d9341edcfa188ea3edd1"],["/telegram-react/static/js/6.491ca33a.chunk.js","c9f3e809e9fa8213d7c3f68b492bf506"],["/telegram-react/static/js/7.e00a2d2b.chunk.js","950c65438ae3c363ac139647c60ba857"],["/telegram-react/static/js/main.94ebec85.chunk.js","dacdba5535d350352c69f4300a7ad41b"],["/telegram-react/static/js/runtime-main.4956f831.js","619b26946127e486e9ff1aeb3f8800d4"],["/telegram-react/static/media/bubble-tail-left.91b48ca6.svg","85479cc199de7ace1a44d901720601b8"],["/telegram-react/static/media/camomile_blurred.e2b9d359.jpg","8eb41265f8364cba2241cb9ac7003087"],["/telegram-react/static/media/check.4985d982.svg","71da74694e314a0e3a855ded564a1eaf"],["/telegram-react/static/media/logo.082ee04b.png","48f1e1b8bbb56ef6bf148649768e8242"],["/telegram-react/static/media/telegram-logo.d677880d.svg","72c6a620aa333a157798f665ffdd87e0"],["/telegram-react/tdweb.js","3aa8950a497baaec48e884ec8495ad12"]];
var cacheName = 'sw-precache-v3-sw-precache-webpack-plugin-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/./];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__).*"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    // console.log("[SW] fetch url " + url, shouldRespond);
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              let url = event.request.url;
                // console.log("[SW] found cached url " + url);
                /*if (url.indexOf(".wasm") > -1) {
                  console.log("[SW] wasm not modified");
                  let responseInit = {
                    status: 304,
                    statusText: 'Not Modified'
                  };
                  let notModifiedResponse = new Response('', responseInit);
                  return notModifiedResponse;
                }*/

              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







importScripts("./custom-service-worker.js");
