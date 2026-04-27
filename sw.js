self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Hanya biarkan ia kosong untuk memenuhi syarat PWA
});