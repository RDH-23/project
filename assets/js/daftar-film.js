// Inisialisasi ikon Feather dari Wisnu
feather.replace();

// 2. Logika Interaksi Tambahan (Klik Poster Film)
const movieCards = document.querySelectorAll(".movie-card");
movieCards.forEach((card) => {
  // Kita bisa menambahkan interaksi klik pada seluruh kartu,
  // tapi karena sudah ada tombol "Lihat Detail", kita berikan logikanya ke tombol saja.
  const btnDetail = card.querySelector(".btn-detail");
  btnDetail.addEventListener("click", function (e) {
    // Mencegah link pindah jika file detail-film.html belum ada (hanya untuk demonstrasi)
    // e.preventDefault();
    const movieTitle = card
      .closest(".movie-card")
      .querySelector(".movie-title").innerText;
    console.log(`Membuka halaman detail untuk film: ${movieTitle}`);
  });
});
