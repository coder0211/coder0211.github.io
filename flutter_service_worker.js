'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c6c250e0039bd2343ab2adb49adb5d2a",
"index.html": "cac45bc2021009def076c95992630f17",
"/": "cac45bc2021009def076c95992630f17",
"main.dart.js": "ed40de5e5bbe41c1f6db6ec3d1d826ec",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "71194e530750e00459a0e0d3aa267e72",
"assets/AssetManifest.json": "bbca6d68f6dfa8ff002a6d71c9650ab2",
"assets/NOTICES": "9d0efdf3703ba80601b5f733c32a405a",
"assets/FontManifest.json": "fe0edaf23376bc3810e115c65a41990c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/lib/assets/images/img_placeholder.jpeg": "617e19945be3ea98ff52a118cd500371",
"assets/lib/assets/lotties/lottie_typing.json": "83e0a276b5541c3926d42c4b38d18ea4",
"assets/lib/assets/icons/ic_chevron_down.png": "a1e4705ef25d84b14fd4d0fc4a7e07fa",
"assets/lib/assets/icons/ic_filetype_pdf.png": "9043a739d58fc3675b07d1bef094095d",
"assets/lib/assets/icons/ic_filetype_ppt.png": "cd587c6398190ebf3ab50f3d9ac2bc89",
"assets/lib/assets/icons/ic_seen.png": "366e19bf2c93c5f4e5f5e69ea6a55736",
"assets/lib/assets/icons/ic_reaction_love.png": "c9a1643b6d0614b8e5b32e14f238a7f4",
"assets/lib/assets/icons/ic_calendar.png": "8fcb0ffe1d216d05fe8242f776985eca",
"assets/lib/assets/icons/ic_image.png": "2025f61d0e1f8973dcb6e9c1459bde69",
"assets/lib/assets/icons/ic_reaction_sad.png": "721226c1f98d97d71813eba0aae4d534",
"assets/lib/assets/icons/ic_send_error.png": "e44c3588c91038ad69b9e709a69b4728",
"assets/lib/assets/icons/ic_close.png": "b4438dc86b42c4381b0d2e75cfbec01f",
"assets/lib/assets/icons/ic_camera.png": "052523569f4e3babe70d9c7bca50c841",
"assets/lib/assets/icons/ic_heart.png": "5b8e9967c8ef552a811d45cb56bfaa57",
"assets/lib/assets/icons/ic_like.svg": "b0b3bc0baf41317997eb347c7e4f4eac",
"assets/lib/assets/icons/ic_filetype_xls.png": "a4b399666f097f705f2e8676a5dfa5c6",
"assets/lib/assets/icons/ic_price_list.png": "a3c8a517db98112a27a87b4e56aa3955",
"assets/lib/assets/icons/ic_pin.png": "20f04c88a2e60d173c3b050b1923ff43",
"assets/lib/assets/icons/ic_filetype_docx.png": "0cbe8c0168568fcee6f3dd04d572c4d9",
"assets/lib/assets/icons/ic_remove.png": "750eb085e1d73f2f1e3efb7188b76919",
"assets/lib/assets/icons/ic_down.svg": "20cc4167ff353b1c333a11645089ff5a",
"assets/lib/assets/icons/ic_cart.png": "c243be2070ada04449b5133d991bc26e",
"assets/lib/assets/icons/ic_mute.png": "3ae251fbb57c901bd4013fb890184e4c",
"assets/lib/assets/icons/ic_document.png": "90f8303aae876777383cd8716084a5df",
"assets/lib/assets/icons/ic_category.png": "23a2f2f9efccf914914cfffc5df80a54",
"assets/lib/assets/icons/ic_reaction_smile.png": "e24eb64e9b83cb1dc99d26bdf5dc2907",
"assets/lib/assets/icons/ic_edit.png": "09a04bf39488863f755ed7de2d131ebd",
"assets/lib/assets/icons/ic_dislike.svg": "3a68c6eafe80ade95170c5f34adffcf3",
"assets/lib/assets/icons/ic_sent.png": "13fc8a77b0b5b9550d2f5fe489e9f1a5",
"assets/lib/assets/icons/ic_emoji.svg": "69163a84b8e37a1907b42bf9b4f16710",
"assets/lib/assets/icons/ic_filetype_pptx.png": "67c28f7b23008efb75c913b54f6c16d3",
"assets/lib/assets/icons/ic_service.png": "870dcbe35d89cbceba4f79657419c7ea",
"assets/lib/assets/icons/ic_filetype_rar.png": "197c2842cc3a7a3688e0be0f70ed1769",
"assets/lib/assets/icons/ic_search.png": "832f0b3aac642cfb687b9c4da2b1c089",
"assets/lib/assets/icons/ic_copy.png": "24887fcaac0e08642956a32ebe4d6d69",
"assets/lib/assets/icons/ic_reply.png": "cfb17dab4265ba42c9869f8bb56d947f",
"assets/lib/assets/icons/ic_download.png": "db008a64a4eb6126742f73f95b60c0ae",
"assets/lib/assets/icons/ic_back.png": "6feef04b8ac3e78e6c50d55f537099cc",
"assets/lib/assets/icons/ic_up.svg": "1402725c567ed18fc4918d77fd5a2c86",
"assets/lib/assets/icons/ic_reaction_like.png": "28b806044f3789c4268d94925ea291ad",
"assets/lib/assets/icons/ic_filetype_txt.png": "8ffc128322c46ce67d1d8550c759b612",
"assets/lib/assets/icons/ic_logo.png": "ce132898dcf9f43264f463922ee62257",
"assets/lib/assets/icons/ic_send.svg": "f22b9ae5f65c454b89aec3b5abd80d8f",
"assets/lib/assets/icons/ic_menu.png": "23a9d300908f37a6cb39bde74568b4ac",
"assets/lib/assets/icons/ic_chevron_up.png": "8b5b64c973fda4ef1542c943b0a1200e",
"assets/lib/assets/icons/ic_close_circle_black.png": "e86ac40d9f1b7f17a16414af7b938cf3",
"assets/lib/assets/icons/ic_close_circle.png": "0ba787ca9d5a798e0ed36b8d218954f5",
"assets/lib/assets/icons/ic_promotion.png": "5ffc1a0c6c81b25b07d037f0e72914e3",
"assets/lib/assets/icons/ic_reaction_angry.png": "2f6010386aaf8ef358fe4cc156aaa214",
"assets/lib/assets/icons/ic_reaction_wow.png": "5a4752b15e4301f83211795529db2926",
"assets/lib/assets/icons/ic_filetype_xlsx.png": "eeaa9c087ac7fc59b2803ee451a87b43",
"assets/lib/assets/icons/ic_sending.png": "bdfe198a8fe342b98e84ae6cf05280c1",
"assets/lib/assets/icons/ic_filetype_zip.png": "8eab19dfe87254a16f4e0cda8fc53550",
"assets/lib/assets/icons/ic_filetype_doc.png": "b1842621cde0fd94a1b7a2f2609547f9",
"assets/lib/assets/icons/ic_attachment.png": "d90c6275daeb563efe365e914a79c82c",
"assets/lib/assets/icons/ic_add_circle.svg": "56d0af8ac71060d788fba50ca9fc3784",
"assets/lib/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/lib/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/lib/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/lib/assets/fonts/Inter-Semibold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/AssetManifest.smcbin": "2aee3e5a4fa1ef51f467fced65efb403",
"assets/fonts/MaterialIcons-Regular.otf": "a0fc65a402713415ce4c62a56e7e170a",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
