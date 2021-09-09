'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "83f6b8ed4a69edbea7a112fbbc58f77f",
"assets/FontManifest.json": "b2b01145ad2540b8886174bff70e0f9d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/env/env.dart": "50653c9bd7316cf5120159655c9ba3b1",
"assets/lib/fonts/Volkswagen_Serial_Bold.ttf": "0c616f7247017882339f17f75d604430",
"assets/lib/res/icons/ic_apple.png": "b706915d33b16d5b1311da22f6a74fdc",
"assets/lib/res/icons/ic_app_store.png": "122dd2719429ef91b800971ea9885893",
"assets/lib/res/icons/ic_arrow_down.png": "02da5d21f0d736e2ca3695c254d575ad",
"assets/lib/res/icons/ic_arrow_left_circle.png": "ae9e082c7efb4e778e9a03bbe18c595b",
"assets/lib/res/icons/ic_book.png": "7e0e5f62b9f41188418a210abdb9d719",
"assets/lib/res/icons/ic_bumbii_footer.png": "8aadead432333e38aa2458bfc682984c",
"assets/lib/res/icons/ic_bumbii_footer_mobile.png": "80943deaeaf2b1540d4cddab80619b3b",
"assets/lib/res/icons/ic_check_avatar.png": "7c58c8466e7d7cb48298035b1f3153cc",
"assets/lib/res/icons/ic_delete_big.png": "d446bd8f291e4dbed81ddf07a21b8141",
"assets/lib/res/icons/ic_face.png": "1e1528760f14271fc3c74f45d0a8b16e",
"assets/lib/res/icons/ic_facebook.png": "fb149930e0b515c34b7171a36bf2dc3c",
"assets/lib/res/icons/ic_google.png": "7fc375f632e1361e7a19e83dabe86649",
"assets/lib/res/icons/ic_google_play.png": "c77769263d15ab1c491a3636f1f706c2",
"assets/lib/res/icons/ic_hide_password.png": "a63b9cda36374ec1f5ab88916dd23de6",
"assets/lib/res/icons/ic_home.png": "2f73adc74c207e16988b66e53f5f77fd",
"assets/lib/res/icons/ic_image.png": "9668ddd96ab1bd9b4d918b6e157c86cc",
"assets/lib/res/icons/ic_instagram.png": "3af3a9c6358a19b3c1f1480f8e10d522",
"assets/lib/res/icons/ic_letter.png": "da80340ac0a1fd015f5899c8d22bc680",
"assets/lib/res/icons/ic_linkedin.png": "ec74de6e31f5d73f340dbfed75ad88e7",
"assets/lib/res/icons/ic_list.png": "645e7a7cad565c42cd2ae8ead89acc80",
"assets/lib/res/icons/ic_logo.svg": "70507c882920f45b45c6d8a120aa284f",
"assets/lib/res/icons/ic_log_out.png": "229d5b6dbe67471d871a1fb37b4af3a4",
"assets/lib/res/icons/ic_no_item_found.png": "06bdd06f6dd48c2c4ad3ca31d57eb7ab",
"assets/lib/res/icons/ic_plus.png": "17fb2303975114f053e86b4329e09bc3",
"assets/lib/res/icons/ic_plus_answer.png": "6776692f44787e7fd20b8d72ca9ebb5d",
"assets/lib/res/icons/ic_plus_footer.png": "b19e1156b8949d63daa7b5e03b7ff841",
"assets/lib/res/icons/ic_qr_code.png": "cfb5042adad72d40072d1a1328869eaf",
"assets/lib/res/icons/ic_remove_item_document.png": "b1404b467adf8c882444cb1a8a027c08",
"assets/lib/res/icons/ic_search.png": "50e5bf30e4a317c02fe387adff5ab01f",
"assets/lib/res/icons/ic_see_drawer.png": "c8f14c96b55f6fad47fdc4b2cae372ce",
"assets/lib/res/icons/ic_smiling.png": "aefc967e0ce3db76f776d1052bce3c33",
"assets/lib/res/icons/ic_trash.png": "18ec116aa4804d1bb481859325cdd49b",
"assets/lib/res/icons/ic_twitter.png": "72e2d3e7c2a01d683d53733c4ef04400",
"assets/lib/res/images/img_bumbii_download.png": "04f798132745261eea36f7357e96a1b8",
"assets/lib/res/images/img_bumbii_logo.png": "dc41ef55bca2fc6f8a2c59743213b038",
"assets/lib/res/images/img_camera.png": "9fc934900da7cbb2b9ed0c16d217edcf",
"assets/lib/res/images/img_download_background.png": "f581b750c7fade2ed5b2d275ecb5e5d7",
"assets/lib/res/images/img_login.png": "695c0494d1b9f2e8261d096f11ba858d",
"assets/lib/res/images/img_logo_text.png": "0444387fe60e008fe8c0ed848d8d35c3",
"assets/lib/res/images/img_monkey.png": "3c66d0f7851a7ba33b8417ba5efdbcb4",
"assets/lib/res/images/img_monkey_teacher.png": "12ef488995cc1609f9e165103f74e907",
"assets/lib/res/images/img_parent.png": "c253283f59fd504dfef1469100d3660b",
"assets/lib/res/images/img_question_mark.png": "c6e388c4f4fb82f79f75c04021948d40",
"assets/lib/res/images/img_student.png": "fc3ce32e3f45233c22eb89ef3cbab4cb",
"assets/lib/res/images/img_teacher.png": "80756b8928e68ffd6137f3316b38d04e",
"assets/lib/res/images/img_user_upload.png": "ad19ee4f73f9a292690bceebc462f739",
"assets/NOTICES": "664ee9313d8f0ea777722359f8333f6e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "87e840ca237d56d2121c65b3926ce841",
"/": "87e840ca237d56d2121c65b3926ce841",
"main.dart.js": "d670976aebee32f5caed03bc2bbcae1f",
"manifest.json": "abe5d3ff1542f5d2f0324f2315d5e893",
"version.json": "82b8d0580e64beaefa650e026ac063cc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
