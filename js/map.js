/* ============================================================
   PETA — inisialisasi Leaflet, filter, dan daftar samping
   ============================================================ */

(function () {
  const PUSAT = [7.3596, 108.5423]; // pusat peta Kota Banjar

  const map = L.map("leaflet-map", { scrollWheelZoom: false }).setView(PUSAT, 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18
  }).addTo(map);

  function buatIkon(tipe) {
    const warna = tipe === "alam" ? "#1B3A2F" : "#B5502E";
    const html = `<div style="
        width:30px;height:30px;border-radius:50% 50% 50% 0;
        background:${warna};transform:rotate(-45deg);
        display:flex;align-items:center;justify-content:center;
        box-shadow:0 4px 10px rgba(20,36,29,0.35);border:2px solid #FAF4E6;">
        <span style="transform:rotate(45deg);font-size:14px;">${tipe === "alam" ? "🌿" : "🍲"}</span>
      </div>`;
    return L.divIcon({ html, className: "", iconSize: [30, 30], iconAnchor: [15, 30] });
  }

  const markers = {};

  JEJAK_DATA.lokasi.forEach((loc) => {
    const marker = L.marker([loc.lat, loc.lng], { icon: buatIkon(loc.tipe) }).addTo(map);
    marker.bindPopup(
      `<div class="popup-title">${loc.foto} ${loc.nama}</div>
       <div style="font-size:0.8rem;color:#4A5C52;margin-bottom:6px;">${loc.kategori} · ${loc.harga}</div>
       <a class="popup-link" href="detail.html?id=${loc.id}">Lihat detail →</a>`
    );
    markers[loc.id] = marker;
  });

  const listEl = document.getElementById("map-list");
  const chips = document.querySelectorAll(".chip");
  let filterAktif = "semua";

  function cocokFilter(loc, filter) {
    if (filter === "semua") return true;
    if (filter === "alam" || filter === "kuliner") return loc.tipe === filter;
    return loc.tag.includes(filter);
  }

  function renderList() {
    listEl.innerHTML = "";
    const data = JEJAK_DATA.lokasi.filter((l) => cocokFilter(l, filterAktif));

    if (data.length === 0) {
      listEl.innerHTML = `<div class="empty-state"><div class="ic">🔍</div><p>Tidak ada lokasi untuk filter ini.</p></div>`;
      return;
    }

    data.forEach((loc) => {
      const jarak = jejakJarakKm(PUSAT[0], PUSAT[1], loc.lat, loc.lng);
      const item = document.createElement("div");
      item.className = "map-list-item";
      item.innerHTML = `
        <span class="ic">${loc.foto}</span>
        <div>
          <h4>${loc.nama}</h4>
          <div class="meta">${loc.kategori} · ${jarak.toFixed(1)} km dari pusat kota</div>
        </div>`;
      item.addEventListener("click", () => {
        map.flyTo([loc.lat, loc.lng], 15, { duration: 0.6 });
        markers[loc.id].openPopup();
        document.querySelectorAll(".map-list-item").forEach((i) => i.classList.remove("selected"));
        item.classList.add("selected");
      });
      listEl.appendChild(item);
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      filterAktif = chip.dataset.filter;
      renderList();
    });
  });

  renderList();

  // perbaiki ukuran peta setelah layout selesai (perlu untuk grid layout)
  setTimeout(() => map.invalidateSize(), 200);
})();
