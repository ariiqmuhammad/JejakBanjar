# Jejak Banjar

Prototipe website wisata terpadu Kota Banjar: menghubungkan wisata alam dan kuliner lokal, form check-in kunjungan, serta sistem poin/reward. Dibangun dengan **HTML/CSS/JS murni** (tanpa build tool) + **Leaflet** untuk peta, jadi tinggal dibuka langsung di browser.

## Cara menjalankan di VS Code

1. Buka folder ini di VS Code (`File > Open Folder…`).
2. Install ekstensi **Live Server** (by Ritwick Dey) dari Extensions Marketplace.
3. Klik kanan `index.html` → **Open with Live Server**.
   - Atau jalankan manual: `npx serve .` di terminal lalu buka URL yang muncul.
   - Membuka `index.html` langsung lewat `file://` juga bisa, tapi beberapa browser membatasi fitur tertentu — Live Server lebih disarankan.

## Struktur folder

```
banjar-wisata/
├── index.html          # Beranda
├── peta.html            # Peta interaktif (Leaflet)
├── detail.html          # Detail lokasi (dinamis via ?id=)
├── kunjungan.html        # Form check-in kunjungan
├── dashboard.html        # Poin & riwayat kunjungan
├── css/
│   └── style.css        # Semua styling & design tokens
├── js/
│   ├── data.js           # Dataset lokasi wisata alam & kuliner (edit di sini)
│   ├── storage.js        # Logika poin & riwayat (localStorage)
│   ├── map.js             # Logika peta Leaflet
│   ├── detail.js          # Render halaman detail
│   ├── form.js             # Logika form kunjungan
│   └── dashboard.js        # Render dashboard poin
└── README.md
```

## Mengedit data lokasi

Semua titik wisata alam & kuliner ada di `js/data.js` dalam array `JEJAK_DATA.lokasi`. Tambah objek baru dengan format yang sama untuk menambah lokasi — id harus unik, `lat`/`lng` untuk posisi di peta, dan `pasangan` untuk daftar id lokasi rekomendasi terkait.

## Catatan penting

- **Poin & riwayat** disimpan di `localStorage` browser (per perangkat, tidak ada server). Cocok untuk prototipe/demo; untuk produksi sebaiknya diganti backend + database agar poin tersinkron lintas perangkat dan tidak hilang saat cache dibersihkan.
- **Foto bukti kunjungan** saat ini hanya dipratinjau di form, belum diunggah ke server manapun.
- Peta memakai tile gratis **OpenStreetMap** via **Leaflet** (CDN), jadi perlu koneksi internet saat dijalankan.
- Koordinat & data lokasi di `data.js` masih **contoh/dummy** — ganti dengan data asli sebelum dipakai publik.

## Langkah lanjutan yang disarankan

- Sambungkan form kunjungan & poin ke backend (mis. Firebase/Supabase) agar data tidak hilang dan bisa divalidasi admin.
- Tambahkan generator QR code per lokasi yang mengarah ke `kunjungan.html?id=<id-lokasi>`.
- Tambahkan halaman admin sederhana untuk approve bukti foto sebelum poin resmi masuk.
