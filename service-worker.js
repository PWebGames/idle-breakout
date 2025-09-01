const CACHE_NAME = "coding-breakout-v1";

// Add every file in your project that the game needs
const ASSETS_TO_CACHE = [
  "index.html",
  "game.html",
  "look-away.html",
  "html5game/Coding_BreakOut1.js",
  "assets/favicon.png",
  "assets/thumbnail.png",
  "assets/download.png",

  // textures
  "assets/Coding_BreakOut1_texture_0.png",
  "assets/Coding_BreakOut1_texture_1.png",

  // particles
  "assets/particles/Coding_BreakOut1_texture_0.png",
  "assets/particles/Coding_BreakOut1_texture_1.png",
  "assets/particles/IDR_GIF2.png",
  "assets/particles/IDR_GIF3.png",
  "assets/particles/IDR_GIF4.png",
  "assets/particles/IDR_GIF5.png",
  "assets/particles/IDR_GIF6.png",
  "assets/particles/IDR_GIF7.png",
  "assets/particles/IDR_GIF8.png",
  "assets/particles/IDR_GIF9.png",
  "assets/particles/IDR_GIF10.png",
  "assets/particles/IDR_GIF11.png",
  "assets/particles/IDR_GIF12.png",
  "assets/particles/IDR_GIF13.png",
  "assets/particles/IDR_GIF14.png",
  "assets/particles/IDR_GIF15.png",
  "assets/particles/airhorn.mp3",
  "assets/particles/download.png",
  "assets/particles/favicon.png",
  "assets/particles/thumbnail.png",

  // audio
  "assets/audio/sound_0.ogg",
  "assets/audio/sound_0_alt.ogg",
  "assets/audio/sound_1.ogg",
  "assets/audio/sound_1_alt.ogg",
  "assets/audio/sound_2.ogg",
  "assets/audio/sound_2_alt.ogg",
  "assets/audio/sound_3.ogg",
  "assets/audio/sound_3_alt.ogg",
  "assets/audio/sound_4.ogg",
  "assets/audio/sound_4_alt.ogg",
  "assets/audio/sound_5.ogg",
  "assets/audio/sound_5_alt.ogg",
  "assets/audio/sound_6.ogg",
  "assets/audio/sound_6_alt.ogg",
  "assets/audio/sound_click.ogg",
  "assets/audio/sound_click_alt.ogg",
  "assets/audio/sound_demon.ogg",
  "assets/audio/sound_end.ogg",
  "assets/audio/sound_end_alt.ogg",
  "assets/audio/sound_laser.ogg",
  "assets/audio/sound_laser_alt.ogg",
  "assets/audio/sound_scatter.ogg",
  "assets/audio/sound_scatter_alt.ogg",

  // img folder
  "img/favicon.png",
  "img/thumbnail.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
