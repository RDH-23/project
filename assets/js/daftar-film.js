// Inisialisasi ikon Feather
if (typeof feather !== "undefined") {
  feather.replace();
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Logika Klik Poster (Menuju Detail Film)
  const movieCards = document.querySelectorAll(".movie-card");
  movieCards.forEach((card) => {
    const btnDetail = card.querySelector(".btn-detail");
    if (btnDetail) {
      btnDetail.addEventListener("click", function (e) {
        // e.preventDefault(); // Hapus komentar ini jika ingin tombolnya mati sementara
        const movieTitle = card
          .closest(".movie-card")
          .querySelector(".movie-title").innerText;
        console.log(`Membuka halaman detail untuk film: ${movieTitle}`);
      });
    }
  });

  // 2. LOGIKA BARU: Filter Kategori Statis
  // Mengambil semua elemen select (dropdown filter)
  const filterSelects = document.querySelectorAll(".filter-select");

  if (filterSelects.length > 0) {
    // Asumsi: Dropdown pertama adalah filter Genre
    const genreFilter = filterSelects[0];

    genreFilter.addEventListener("change", function () {
      const pilihanGenre = this.value;

      if (pilihanGenre === "action") {
        // Jika pilih Action, pindah ke halaman katalog-action.html
        window.location.href = "../pages/detail-film/genre action/kalaog-action.html";
      } else if (pilihanGenre === "") {
        // Jika pilih "Semua Genre", kembali ke halaman utama
        window.location.href = "daftar-film.html";
      } else {
        // Jika pilih genre lain (Action, Drama, dll) yang belum kita buat halamannya
        alert(
          `Halaman kategori "${pilihanGenre}" belum dibuat untuk versi demo ini. Silakan pilih "Horror".`,
        );
        this.value = ""; // Kembalikan ke pilihan default
      }
    });

    // Catatan: Untuk dropdown "Tahun Rilis" dan "Urutkan",
    // kamu bisa menambahkan logika JS yang sama persis seperti di atas
    // jika kamu sudah membuat file HTML-nya (misal: daftar-film-2024.html)
  }
});
