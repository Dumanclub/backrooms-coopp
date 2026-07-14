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

## 4. Tuzak Çukurları ve Saklanma (Level 0)

Haritada 5 adet gömülü çukur bulunur (halka şeklinde işaretli).
Oyuncu yaklaşınca "Saklanmak için çukura gir" uyarısı çıkar.
İçine girince canavarlar oyuncuyu göremez, hareket durur ve akıl
sağlığı düşüşü %85 yavaşlar. Tekrar dokunarak çıkılır.

## 5. Sesli Sohbet (Proximity Voice Chat)

Mikrofon izniyle WebRTC üzerinden P2P ses bağlantısı kurulur.
İki oyuncu arasındaki 3D mesafeye göre ses seviyesi bir GainNode
ile ayarlanır — yakınken net, uzaklaşınca kısılır. "Telsiz"
butonuna basılı tutulduğunda mesafe hesaplaması devre dışı kalır,
sese cızırtı efekti eklenir (bandpass filter + hafif distorsiyon).

## 6. Seviye ve Bulmaca Sistemi

Envanter (fener, pil, telsiz, anahtar) seviyeler arası korunur.

- **Level 0:** Sarı odalarda gizli anahtarı bulup çıkış kapısını aç.
- **Level 1:** Jeneratörleri pil + yedek parça toplayarak tamir et.
- **Level 2:** Boru hattındaki vanaları doğru sırada çevirip gaz
  sızıntısını kes.

Bu bulmacalar iki oyuncunun görev paylaşmasını gerektirecek
şekilde tasarlanmıştır (biri jeneratörde, diğeri vanalarda çalışıp
telsizle koordine olabilir).

## 7. Telefonda Geliştirme

- **Android:** Acode (Play Store) ile dosyaları düzenle, "Live
  Preview" ile test et.
- **iOS:** Spck Editor (App Store) ile aynı işlemi yap.
- **3D model/ses kaynakları:** Sketchfab (CC0), Kenney.nl, Mixamo
  (animasyon), Freesound.org, Pixabay (ses efektleri) — hepsi
  ücretsiz ve tarayıcıdan indirilebilir.
- **Sunucu yayına alma:** GitHub reposu + Render.com Web Service
  (Build: `npm install`, Start: `node server.js`, Free plan).
- **Oyun linki:** GitHub Pages ile index.html'i barındır, linki
  arkadaşınla paylaş.
