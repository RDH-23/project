// Feather Icons
feather.replace();

// Dropdown
document.addEventListener("DOMContentLoaded", () => {
  const dropdownTrigger = document.getElementById("about-us-trigger");
  const dropdownMenu = document.getElementById("about-us-menu");
  const dropdownLinks = dropdownMenu.querySelectorAll("a");

  // menampilkan dropdown jika diklik
  dropdownTrigger.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevents immediate closing by the document listener
    dropdownMenu.classList.toggle("show");
    dropdownTrigger.classList.toggle("active");
  });

  // menyembunyikan drop down jika klik pilihan lain
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", () => {
      dropdownMenu.classList.remove("show");
      dropdownTrigger.classList.remove("active");
    });
  });

  // 3. menyembunyikan dropdown jika klik diluar
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

// --- Logika Interaksi Halaman Utama ---

// Tombol Play di Hero Section
const playBtn = document.getElementById("play-btn");
if (playBtn) {
  playBtn.addEventListener("click", () => {
    alert("Memuat pemutar video untuk 'Inception'...");
  });
}

// Klik pada Kartu Film (Movie Cards)
const movieCards = document.querySelectorAll(".movie-card");
movieCards.forEach((card) => {
  card.addEventListener("click", function () {
    const movieTitle = this.querySelector("h3").innerText;
    alert(`Membuka halaman detail untuk film: ${movieTitle}`);
  });
});
