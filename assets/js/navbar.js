// Inisialisasi Feather Icons
feather.replace();

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. LOGIKA DROPDOWN ABOUT US ---
  const dropdownTrigger = document.getElementById("about-us-trigger");
  const dropdownMenu = document.getElementById("about-us-menu");

  if (dropdownTrigger && dropdownMenu) {
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
  }

  // --- 2. LOGIKA AUTENTIKASI (LOGIN/GUEST STATE) ---
  const navGuest = document.getElementById("nav-guest");
  const navUser = document.getElementById("nav-user");
  const btnLogout = document.getElementById("btn-logout");

  // Mengecek status login dari LocalStorage (Memori Browser)
  // Ubah 'false' menjadi 'true' secara manual di console browser untuk melihat perubahannya
  let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Fungsi untuk memperbarui tampilan Navbar
  function updateNavbar() {
    if (isLoggedIn) {
      // Jika User sudah login
      if (navGuest) navGuest.classList.add("d-none"); // Sembunyikan tombol login
      if (navUser) navUser.classList.remove("d-none"); // Tampilkan avatar
    } else {
      // Jika masih Guest
      if (navGuest) navGuest.classList.remove("d-none"); // Tampilkan tombol login
      if (navUser) navUser.classList.add("d-none"); // Sembunyikan avatar
    }
  }

  // Panggil fungsi saat halaman dimuat
  updateNavbar();

  // Logika saat tombol Logout diklik
  if (btnLogout) {
    btnLogout.addEventListener("click", (e) => {
      e.preventDefault();
      const confirmLogout = confirm("Apakah Anda yakin ingin keluar?");
      if (confirmLogout) {
        // Hapus status login dari memori
        localStorage.removeItem("isLoggedIn");
        // Refresh halaman agar kembali menjadi Guest
        window.location.reload();
      }
    });
  }

  // --- HANYA UNTUK KEPERLUAN DEMO/PRESENTASI DOSEN ---
  // Tekan kombinasi tombol 'Ctrl + Q' di keyboard untuk mensimulasikan Login/Logout seketika
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "q") {
      if (isLoggedIn) {
        localStorage.setItem("isLoggedIn", "false");
      } else {
        localStorage.setItem("isLoggedIn", "true");
      }
      window.location.reload();
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
