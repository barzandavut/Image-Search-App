📸 React Image Search App

Unsplash API kullanarak yüksek kaliteli fotoğraflar arayabileceğiniz basit ve modern bir React uygulaması.

Bu proje React, TypeScript ve TailwindCSS kullanılarak geliştirilmiştir.
Kullanıcı arama çubuğuna kelime yazdığında Unsplash üzerinden ilgili fotoğraflar çekilir ve modern bir grid yapısıyla ekranda gösterilir.

🚀 Özellikler

🔎 Gerçek zamanlı fotoğraf arama

📁 Sonsuz kaydırma / Daha fazla yükle (Load More) desteği

🖼️ Responsive ve grid tabanlı fotoğraf galerisi

⚡ TailwindCSS ile hızlı ve modern tasarım

📘 TypeScript ile güvenli geliştirme

🌐 Unsplash API entegrasyonu

🛠️ Kullanılan Teknolojiler

React (Vite veya CRA fark etmez)

TypeScript

Tailwind CSS

Unsplash API

Axios (istekler için)

📦 Kurulum

1. Projeyi klonlayın
git clone https://github.com/kullaniciadi/react-image-search.git
cd react-image-search

2. Bağımlılıkları yükleyin
npm install

3. Env dosyasını oluşturun
Kök dizinde .env dosyası açın ve içine kendi Unsplash Access Key’inizi yazın:

VITE_UNSPLASH_ACCESS_KEY=YOUR_ACCESS_KEY_HERE

Access Key almak için:
https://unsplash.com/developers

4. Geliştirme sunucusunu başlatın
npm run dev

🔌 API Kullanımı

API istekleri fetchImages.ts dosyasında yapılır:

Arama kelimesi (query)

Sayfa numarası (page)

Sayfa başına kaç görsel geleceği (per_page)

Unsplash API limitleri göz önünde bulundurulmuştur.