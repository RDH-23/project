// Inisialisasi ikon Feather dari Wisnu
feather.replace();

// 1. Logika Dropdown Navbar (Dari Wisnu)
document.addEventListener("DOMContentLoaded", () => {
  const dropdownTrigger = document.getElementById("about-us-trigger");
  const dropdownMenu = document.getElementById("about-us-menu");
  const dropdownLinks = dropdownMenu.querySelectorAll("a");

  dropdownTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownMenu.classList.toggle("show");
    dropdownTrigger.classList.toggle("active");
  });

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", () => {
      dropdownMenu.classList.remove("show");
      dropdownTrigger.classList.remove("active");
    });
  });

  document.addEventListener("click", (event) => {
    if (
      !dropdownMenu.contains(event.target) &&
      !dropdownTrigger.contains(event.target)
    ) {
      dropdownMenu.classList.remove("show");
      dropdownTrigger.classList.remove("active");
    }
  });
});

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
