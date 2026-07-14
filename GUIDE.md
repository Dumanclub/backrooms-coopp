# Backrooms: Escape Together — Mobil Co-Op Rehberi

Bu rehber, index.html (istemci/oyun), server.js + package.json
(ağ sunucusu) dosyalarıyla birlikte çalışır.

## 0. Genel Mimari

- İstemci (index.html): Three.js ile 3D sahne, dokunmatik joystick,
  canavar AI, envanter, bulmaca mantığı, akıl sağlığı sistemi.
- Sunucu (server.js): Oda kodu eşleştirme + oyuncu pozisyon yayını.
- Cross-play: Hem Android hem iOS aynı index.html'i tarayıcıda açtığı
  için otomatik cross-play sağlanır.

## 1. Mobil Multiplayer

Oda kodu ile Socket.io odalarına katılım, sol joystick (hareket),
sağ dokunmatik alan (bakış), sarı hazmat karakter modelleri.

## 2. Canavarlar
- Level 0 Bacteria: roam/chase state machine, 15 birim mesafede tetiklenir.
- Level 2 Smiler: ışığa saldırır, göz temasıyla sakinleşir.
- Level 3 Hound: kaçınca hızlanır, göz temasıyla durur.

## 3. Akıl Sağlığı Sistemi
Portakal suyu (+18) ve badem sütü (+25) ile doldurulur, karanlıkta
ve canavar avlarken hızlı düşer. 0'a inince tek oyunculuda ölüm,
çok oyunculuda izleyici moduna geçiş olur.
