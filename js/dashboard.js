/* ============================================================
   DASHBOARD — render poin, progress bar, reward, riwayat
   ============================================================ */

(function () {
  const MAKS_POIN_BAR = JEJAK_REWARDS[JEJAK_REWARDS.length - 1].poin;

  function render() {
    const riwayat = jejakAmbilRiwayat();
    const total = riwayat.length;
    const berikutnya = jejakRewardBerikutnya(total);
    const dicapai = jejakRewardDicapai(total);

    document.getElementById("poin-total").textContent = total;
    document.getElementById("poin-keterangan").textContent = berikutnya
      ? `${berikutnya.poin - total} kunjungan lagi menuju "${berikutnya.label}"`
      : "Semua reward tercapai — kamu penjelajah sejati Kota Banjar!";
    document.getElementById("poin-bar").style.width =
      Math.min(100, Math.round((total / MAKS_POIN_BAR) * 100)) + "%";

    // reward strip
    const strip = document.getElementById("reward-strip");
    strip.innerHTML = "";
    JEJAK_REWARDS.forEach((r) => {
      const done = total >= r.poin;
      const el = document.createElement("div");
      el.className = "reward";
      if (done) el.style.background = "var(--liat-600)";
      el.innerHTML = `
        <span class="ic">${r.ikon}</span>
        <div class="poin-butuh">${r.poin} KUNJUNGAN ${done ? "· TERCAPAI" : ""}</div>
        <h3>${r.label}</h3>
      `;
      strip.appendChild(el);
    });

    // riwayat
    const list = document.getElementById("riwayat-list");
    if (riwayat.length === 0) {
      list.innerHTML = `<div class="empty-state"><div class="ic">🥾</div><p>Belum ada kunjungan tercatat. Isi <a href="kunjungan.html">form kunjungan</a> pertamamu!</p></div>`;
      return;
    }
    list.innerHTML = "";
    riwayat.forEach((r, i) => {
      const loc = jejakCariLokasi(r.lokasiId);
      const el = document.createElement("div");
      el.className = "riwayat-item";
      el.innerHTML = `
        <div>
          <div>${loc ? loc.foto : "📍"} <strong>${r.lokasiNama}</strong></div>
          <div class="meta">${r.tanggal || "—"} · ${r.nama || "Tanpa nama"}</div>
        </div>
        <span class="riwayat-badge">+1 poin${r.punyaFoto ? " · 📷" : ""}</span>
      `;
      list.appendChild(el);
    });
  }

  document.getElementById("btn-reset").addEventListener("click", () => {
    if (confirm("Hapus semua riwayat kunjungan dan poin di perangkat ini?")) {
      jejakHapusRiwayat();
      render();
    }
  });

  render();
})();
