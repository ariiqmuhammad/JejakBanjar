/* ============================================================
   DETAIL LOKASI — render dari query string ?id=
   ============================================================ */

(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const loc = jejakCariLokasi(id);

  if (!loc) {
    document.querySelector(".detail-grid").innerHTML =
      `<div class="info-card"><h3>Lokasi tidak ditemukan</h3><p>Coba kembali ke <a href="peta.html">peta interaktif</a> dan pilih lokasi lain.</p></div>`;
    return;
  }

  document.title = `${loc.nama} — Jejak Banjar`;
  document.getElementById("d-kategori").textContent = `${loc.tipe === "alam" ? "Wisata Alam" : "Kuliner"} · ${loc.kategori}`;
  document.getElementById("d-nama").textContent = loc.nama;
  document.getElementById("d-ikon").textContent = loc.foto;
  document.getElementById("d-deskripsi").textContent = loc.deskripsi;
  document.getElementById("d-jam").textContent = loc.jamBuka;
  document.getElementById("d-harga").textContent = loc.harga;
  document.getElementById("d-kontak").textContent = loc.kontak;
  document.getElementById("d-koordinat").textContent = `${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}`;
  document.getElementById("d-maps").href = `https://www.google.com/maps?q=${loc.lat},${loc.lng}`;
  document.getElementById("d-checkin").href = `kunjungan.html?id=${loc.id}`;

  const tagsEl = document.getElementById("d-tags");
  loc.tag.forEach((t) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    tagsEl.appendChild(span);
  });

  const pasanganEl = document.getElementById("d-pasangan");
  (loc.pasangan || []).forEach((pid) => {
    const p = jejakCariLokasi(pid);
    if (!p) return;
    const jarak = jejakJarakKm(loc.lat, loc.lng, p.lat, p.lng);
    const menit = jejakEstimasiMenit(jarak);
    const card = document.createElement("a");
    card.href = `detail.html?id=${p.id}`;
    card.className = "card " + (p.tipe === "kuliner" ? "kuliner" : "");
    card.style.textDecoration = "none";
    card.innerHTML = `
      <span class="ic">${p.foto}</span>
      <h3 style="font-size:1rem;">${p.nama}</h3>
      <p style="font-size:0.85rem;">${p.kategori}</p>
      <div class="tags"><span class="tag">${jarak.toFixed(1)} km · ${menit} mnt</span></div>
    `;
    pasanganEl.appendChild(card);
  });

  if (!loc.pasangan || loc.pasangan.length === 0) {
    pasanganEl.innerHTML = `<p style="color:var(--tinta-600);">Belum ada rekomendasi pasangan untuk lokasi ini.</p>`;
  }
})();
