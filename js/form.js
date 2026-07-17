/* ============================================================
   FORM KUNJUNGAN — isi select lokasi, preview foto, simpan poin
   ============================================================ */

(function () {
  const selectLokasi = document.getElementById("lokasi");
  JEJAK_DATA.lokasi.forEach((loc) => {
    const opt = document.createElement("option");
    opt.value = loc.id;
    opt.textContent = `${loc.tipe === "alam" ? "🌿" : "🍲"} ${loc.nama}`;
    selectLokasi.appendChild(opt);
  });

  // prefill dari query string ?id=
  const params = new URLSearchParams(window.location.search);
  const preId = params.get("id");
  if (preId && jejakCariLokasi(preId)) selectLokasi.value = preId;

  // default tanggal = hari ini
  document.getElementById("tanggal").valueAsDate = new Date();

  // upload foto + preview
  const uploadBox = document.getElementById("upload-box");
  const fotoInput = document.getElementById("foto");
  const preview = document.getElementById("upload-preview");
  const previewImg = document.getElementById("upload-img");
  let fotoDataUrl = null;

  uploadBox.addEventListener("click", () => fotoInput.click());
  fotoInput.addEventListener("change", () => {
    const file = fotoInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      fotoDataUrl = e.target.result;
      previewImg.src = fotoDataUrl;
      preview.style.display = "block";
      uploadBox.textContent = `✅ ${file.name}`;
    };
    reader.readAsDataURL(file);
  });

  // submit
  const form = document.getElementById("form-kunjungan");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const locId = selectLokasi.value;
    const loc = jejakCariLokasi(locId);

    const entry = {
      nama: document.getElementById("nama").value.trim(),
      kontak: document.getElementById("kontak").value.trim(),
      lokasiId: locId,
      lokasiNama: loc ? loc.nama : locId,
      tanggal: document.getElementById("tanggal").value,
      catatan: document.getElementById("catatan").value.trim(),
      punyaFoto: !!fotoDataUrl,
      waktuKirim: new Date().toISOString()
    };

    jejakSimpanKunjungan(entry);

    const totalPoin = jejakTotalPoin();
    const berikutnya = jejakRewardBerikutnya(totalPoin);

    form.style.display = "none";
    document.getElementById("form-sukses").style.display = "block";
    document.getElementById("sukses-pesan").textContent = berikutnya
      ? `Poin kamu sekarang ${totalPoin}. Kunjungi ${berikutnya.poin - totalPoin} kali lagi untuk dapat "${berikutnya.label}".`
      : `Poin kamu sekarang ${totalPoin}. Semua reward sudah kamu capai — terima kasih sudah jadi penjelajah setia Banjar!`;
  });
})();
