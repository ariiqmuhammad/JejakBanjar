/* ============================================================
   PENYIMPANAN LOKAL — poin, riwayat kunjungan, reward
   Tidak ada backend: semua disimpan di localStorage browser.
   ============================================================ */

const JEJAK_KEY = "jejak_banjar_kunjungan_v1";

const JEJAK_REWARDS = [
  { poin: 5, label: "Voucher diskon 5%", ikon: "🎟️" },
  { poin: 10, label: "Voucher makan / minum gratis", ikon: "🍽️" },
  { poin: 15, label: "Merchandise & promo mitra", ikon: "🎁" }
];

function jejakAmbilRiwayat() {
  try {
    const raw = localStorage.getItem(JEJAK_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function jejakSimpanKunjungan(entry) {
  const riwayat = jejakAmbilRiwayat();
  riwayat.unshift(entry);
  localStorage.setItem(JEJAK_KEY, JSON.stringify(riwayat));
  return riwayat;
}

function jejakHapusRiwayat() {
  localStorage.removeItem(JEJAK_KEY);
}

function jejakTotalPoin() {
  return jejakAmbilRiwayat().length;
}

function jejakRewardBerikutnya(poin) {
  return JEJAK_REWARDS.find((r) => r.poin > poin) || null;
}

function jejakRewardDicapai(poin) {
  return JEJAK_REWARDS.filter((r) => poin >= r.poin);
}
