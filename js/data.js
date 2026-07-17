/* ============================================================
   DATA JEJAK — lokasi wisata alam & kuliner Kota Banjar
   Koordinat didekatkan ke pusat Kota Banjar (dummy/contoh).
   Ganti / tambah objek di array ini untuk data asli.
   ============================================================ */

const JEJAK_DATA = {
  lokasi: [
    {
      id: "curug-kembar",
      nama: "Curug Kembar Cibeureum",
      tipe: "alam",
      kategori: "Air Terjun",
      lat: 7.3391,
      lng: 108.5591,
      jamBuka: "07.00 – 17.00",
      kontak: "0812-xxxx-1101",
      harga: "Rp 10.000",
      tag: ["alam", "family friendly", "murah"],
      deskripsi:
        "Dua aliran curug kembar yang jatuh dari tebing batu berlumut, dikelilingi hutan pinus. Cocok untuk trekking ringan dan foto-foto pagi hari sebelum kabut naik.",
      foto: "🏞️",
      pasangan: ["warung-seblak-bu-imas", "kopi-kayu-manis"]
    },
    {
      id: "bukit-panyandaan",
      nama: "Bukit Panyandaan",
      tipe: "alam",
      kategori: "Bukit & Spot Foto",
      lat: 7.3552,
      lng: 108.5217,
      jamBuka: "06.00 – 18.00",
      kontak: "0812-xxxx-1102",
      harga: "Rp 15.000",
      tag: ["alam", "spot foto", "sunrise"],
      deskripsi:
        "Titik tertinggi di sisi barat Kota Banjar, terkenal untuk berburu matahari terbit dengan latar perbukitan berlapis dan sawah terasering.",
      foto: "⛰️",
      pasangan: ["nasi-liwet-mang-oyo", "kopi-kayu-manis"]
    },
    {
      id: "hutan-kota-banjar",
      nama: "Hutan Kota Banjar",
      tipe: "alam",
      kategori: "Ruang Terbuka Hijau",
      lat: 7.3705,
      lng: 108.5423,
      jamBuka: "05.00 – 21.00",
      kontak: "0812-xxxx-1103",
      harga: "Gratis",
      tag: ["alam", "keluarga", "gratis"],
      deskripsi:
        "Area hijau di tengah kota dengan jalur jogging, danau kecil, dan pohon-pohon tua. Ramai saat sore untuk piknik dan olahraga santai.",
      foto: "🌳",
      pasangan: ["kupat-tahu-pak-endin", "es-cendol-teh-yeti"]
    },
    {
      id: "situ-mustika",
      nama: "Situ Mustika",
      tipe: "alam",
      kategori: "Danau",
      lat: 7.3819,
      lng: 108.5488,
      jamBuka: "07.00 – 18.00",
      kontak: "0812-xxxx-1104",
      harga: "Rp 5.000",
      tag: ["alam", "danau", "sepeda air"],
      deskripsi:
        "Danau tenang dengan perahu bebek dan area memancing. Udara sejuk khas dataran tinggi menjadikannya tempat favorit akhir pekan keluarga.",
      foto: "🛶",
      pasangan: ["nasi-liwet-mang-oyo", "kupat-tahu-pak-endin"]
    },
    {
      id: "curug-cibolang-kecil",
      nama: "Curug Cibolang Kecil",
      tipe: "alam",
      kategori: "Air Terjun",
      lat: 7.3268,
      lng: 108.5486,
      jamBuka: "07.00 – 16.00",
      kontak: "0812-xxxx-1105",
      harga: "Rp 8.000",
      tag: ["alam", "trekking", "murah"],
      deskripsi:
        "Curug tersembunyi yang butuh trekking 20 menit dari area parkir, cocok untuk yang cari suasana lebih sepi dan alami.",
      foto: "💧",
      pasangan: ["warung-seblak-bu-imas", "es-cendol-teh-yeti"]
    },
    {
      id: "kebun-durian-langensari",
      nama: "Kebun Durian Langensari",
      tipe: "alam",
      kategori: "Agrowisata",
      lat: 7.3597,
      lng: 108.5622,
      jamBuka: "08.00 – 17.00 (musiman)",
      kontak: "0812-xxxx-1106",
      harga: "Makan di tempat",
      tag: ["alam", "musiman", "kuliner"],
      deskripsi:
        "Kebun durian lokal yang buka saat musim panen, pengunjung bisa makan durian langsung di kebun sambil menikmati suasana pedesaan.",
      foto: "🌱",
      pasangan: ["nasi-liwet-mang-oyo"]
    },

    {
      id: "warung-seblak-bu-imas",
      nama: "Seblak Bu Imas",
      tipe: "kuliner",
      kategori: "Seblak & Camilan Pedas",
      lat: 7.3410,
      lng: 108.5578,
      jamBuka: "10.00 – 21.00",
      kontak: "0812-xxxx-2101",
      harga: "Rp 12.000 – 20.000",
      tag: ["kuliner", "pedas", "murah"],
      deskripsi:
        "Seblak kerupuk basah dengan level pedas bisa diatur, favorit anak muda Banjar sepulang dari wisata alam sekitar Cibeureum.",
      foto: "🌶️",
      pasangan: ["curug-kembar", "curug-cibolang-kecil"]
    },
    {
      id: "nasi-liwet-mang-oyo",
      nama: "Nasi Liwet Mang Oyo",
      tipe: "kuliner",
      kategori: "Nasi Liwet Sunda",
      lat: 7.3560,
      lng: 108.5245,
      jamBuka: "10.00 – 22.00",
      kontak: "0812-xxxx-2102",
      harga: "Rp 18.000 – 35.000",
      tag: ["kuliner", "halal", "family friendly"],
      deskripsi:
        "Nasi liwet gurih dimasak pakai kastrol tanah liat, disajikan lesehan beralas daun pisang lengkap dengan lalapan dan sambal terasi.",
      foto: "🍚",
      pasangan: ["bukit-panyandaan", "situ-mustika", "kebun-durian-langensari"]
    },
    {
      id: "kopi-kayu-manis",
      nama: "Kopi Kayu Manis",
      tipe: "kuliner",
      kategori: "Kedai Kopi Lokal",
      lat: 7.3538,
      lng: 108.5233,
      jamBuka: "07.00 – 23.00",
      kontak: "0812-xxxx-2103",
      harga: "Rp 10.000 – 25.000",
      tag: ["kuliner", "kopi", "nongkrong"],
      deskripsi:
        "Kopi robusta lokal Banjar yang disangrai sendiri, tempat favorit menikmati sunrise dari Bukit Panyandaan sambil ngopi.",
      foto: "☕",
      pasangan: ["bukit-panyandaan", "curug-kembar"]
    },
    {
      id: "kupat-tahu-pak-endin",
      nama: "Kupat Tahu Pak Endin",
      tipe: "kuliner",
      kategori: "Kupat Tahu",
      lat: 7.3720,
      lng: 108.5401,
      jamBuka: "06.00 – 14.00",
      kontak: "0812-xxxx-2104",
      harga: "Rp 10.000 – 15.000",
      tag: ["kuliner", "sarapan", "murah"],
      deskripsi:
        "Kupat tahu dengan bumbu kacang kental legendaris di dekat Hutan Kota, buka pagi jadi pas untuk sarapan sebelum jalan-jalan.",
      foto: "🥙",
      pasangan: ["hutan-kota-banjar", "situ-mustika"]
    },
    {
      id: "es-cendol-teh-yeti",
      nama: "Es Cendol Teh Yeti",
      tipe: "kuliner",
      kategori: "Minuman & Dessert",
      lat: 7.3696,
      lng: 108.5449,
      jamBuka: "10.00 – 20.00",
      kontak: "0812-xxxx-2105",
      harga: "Rp 8.000 – 12.000",
      tag: ["kuliner", "minuman", "murah"],
      deskripsi:
        "Cendol gula aren asli dengan santan kental, pelepas dahaga favorit setelah berjalan kaki di Hutan Kota atau trekking curug.",
      foto: "🥤",
      pasangan: ["hutan-kota-banjar", "curug-cibolang-kecil"]
    }
  ]
};

/* Cari lokasi berdasarkan id */
function jejakCariLokasi(id) {
  return JEJAK_DATA.lokasi.find((l) => l.id === id);
}

/* Hitung jarak antara 2 titik (haversine, hasil dalam km) */
function jejakJarakKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/* Estimasi waktu tempuh jalan kaki-motor sederhana (menit), asumsi 25km/jam */
function jejakEstimasiMenit(km) {
  return Math.max(2, Math.round((km / 25) * 60));
}
