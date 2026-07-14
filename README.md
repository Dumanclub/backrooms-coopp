# Backrooms: Escape Together — Kurulum (README)

Bu proje hiçbir bilgisayar kullanmadan, tamamen Android veya iOS
telefonundan kurulup oynanabilir.

## İçindekiler
- index.html — Oyunun kendisi (tarayıcıda çalışır)
- server.js + package.json — Multiplayer sunucusu
- GUIDE.md — Sistemlerin ayrıntılı teknik açıklaması
- README.md — Bu dosya, kurulum adımları

## A) Android'de Kurulum

1. Dosyaları GitHub reposunda tut, Acode (Play Store) ile düzenle.
2. Multiplayer için server.js'i Render.com'a yayınla.
3. index.html içindeki SERVER_URL değişkenini Render adresinle güncelle.
4. GitHub Pages ile index.html'i yayına al, linki Chrome'da aç.
5. Chrome ⋮ menü → "Ana ekrana ekle" ile uygulama ikonu oluştur.

## B) iOS'ta Kurulum

1. Dosyaları GitHub'da tut, Spck Editor ile düzenle.
2. Aynı şekilde Render.com'a sunucuyu yayınla, SERVER_URL'i güncelle.
3. GitHub Pages linkini Safari'de aç.
4. Paylaş simgesi → "Ana Ekrana Ekle" ile uygulama ikonu oluştur.

## C) Multiplayer Sunucusunu Yayına Alma

1. GitHub reposu oluştur, index.html/server.js/package.json dosyalarını yükle.
2. Render.com → "New Web Service" → repoyu bağla.
3. Build Command: npm install, Start Command: node server.js, Free plan.
4. Render'ın verdiği adresi index.html içindeki SERVER_URL'e yapıştır.
5. GitHub Pages ile index.html'i barındır, oluşan linki arkadaşınla paylaş.
6. İkiniz de aynı linki açıp aynı oda kodunu yazarak bağlanın.

## D) Oyun İçi Sistemler — Hızlı Rehber

- **Akıl Sağlığı:** Sol üstteki mavi bar. Karanlıkta ve canavar
  seni avlarken hızla düşer. Portakal suyu (+18) ve badem sütü
  (+25) toplayarak doldurulur.
- **Tuzak çukurları (Level 0):** Yaklaşınca çıkan uyarıya dokunarak
  saklan, canavarlar seni bulamaz.
- **Akıl sağlığı biterse:**
  - Tek oyunculu → mavi ekran, doğrudan ölüm, "Yeniden Başla".
  - Çok oyunculu → ölmezsin, izleyici moduna geçip arkadaşını izlersin.

## Sorun Giderme

- **Ekran siyah:** index.html'i file:// yerine bir HTTP adresinden
  (GitHub Pages linki) aç.
- **Arkadaşımı göremiyorum:** SERVER_URL'in ikinizde de aynı olduğundan
  ve aynı oda kodunu yazdığınızdan emin ol; Render "uykuda" olabilir,
  linki bir kez açıp uyandır.
- **Mikrofon çalışmıyor:** Tarayıcı izin isteğine "İzin Ver" de;
  http:// (https değil) adreslerde mikrofon izinleri engellenir.
