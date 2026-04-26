document.addEventListener("DOMContentLoaded", () => {
  // 1. Fitur Salam Otomatis Berdasarkan Waktu
  const greetingElement = document.getElementById("greeting-text");
  if (greetingElement) {
    const hour = new Date().getHours();
    let greeting = "Selamat Datang";

    if (hour >= 5 && hour < 12) greeting = "Selamat Pagi";
    else if (hour >= 12 && hour < 15) greeting = "Selamat Siang";
    else if (hour >= 15 && hour < 18) greeting = "Selamat Sore";
    else greeting = "Selamat Malam";

    // Mempertahankan nama user (asumsi namanya ada di elemen HTML awal)
    const userName = "Nama user";
    greetingElement.innerText = `${greeting}, ${userName}!`;
  }

  // 2. Fitur Animasi Progress Bar (Continue Watching)
  const progressFills = document.querySelectorAll(".progress-fill");
  setTimeout(() => {
    progressFills.forEach((bar) => {
      const targetWidth = bar.getAttribute("data-progress");
      bar.style.width = targetWidth;
    });
  }, 300);

  // 3. Fitur Hapus Watchlist (Manipulasi DOM)
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      // Mencegah link pindah halaman saat tombol hapus diklik
      event.preventDefault();

      const confirmDelete = confirm("Hapus film ini dari Watchlist?");
      if (confirmDelete) {
        const watchlistItem = this.closest(".watchlist-item");
        watchlistItem.style.opacity = "0"; // Efek memudar

        setTimeout(() => {
          watchlistItem.remove(); // Hapus permanen dari layar

          // Cek jika watchlist kosong
          const container = document.getElementById("watchlist-container");
          if (container.children.length === 0) {
            container.innerHTML = `<p style="color: var(--text-secondary); padding: 1rem; text-align: center; border: 1px dashed var(--border); border-radius: 8px;">Watchlist kamu kosong. Ayo cari film!</p>`;
          }
        }, 300);
      }
    });
  });
});
