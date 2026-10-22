# Patili Sığınaklar – Gönüllülük Projesi

Bu klasör ücretsiz olarak yayınlanabilecek statik bir web sitesidir.

## Dosyalar
- `index.html` → Ana sayfa
- `style.css` → Tasarım
- `script.js` → Harita ve barınak konumları
- `assets/barinak-yapimi.mp4` → Kendi proje videonu buraya koy

## Barınak konumu ekleme
`script.js` içindeki `shelters` listesine şu formatta yeni kayıt ekleyebilirsin:

{
  name: "Barınak 4",
  lat: 40.0000,
  lng: 39.0000,
  description: "Barınak hakkında kısa açıklama."
}

## Ücretsiz yayınlama
Bu site GitHub Pages, Netlify veya benzeri ücretsiz statik hosting servislerinde yayınlanabilir.

Not: Harita OpenStreetMap verilerini Leaflet üzerinden kullanır.
